#!/usr/bin/env python3
from __future__ import annotations

import json
import re
import urllib.parse
import urllib.request
from pathlib import Path

URL = "https://www.juntadeandalucia.es/educacion/portales/web/educacion-permanente/servicios/pruebas/obtencion-titulo-eso/sobre-las-pruebas/modelos-de-convocatorias-anteriores"
OUT_DIR = Path("data/junta")
OUT_DIR.mkdir(parents=True, exist_ok=True)
HTML_PATH = OUT_DIR / "modelos-page.html"
LINKS_PATH = OUT_DIR / "candidate-links.txt"
SNIPPETS_PATH = OUT_DIR / "interesting-snippets.txt"
META_PATH = OUT_DIR / "pattern-matches.json"

KEYWORDS = [
    "pdf",
    ".pdf",
    "documents/",
    "document",
    "download=true",
    "repositoryid",
    "folderid",
    "fileentryid",
    "dlfileentry",
    "assetpublisher",
    "journal-content",
    "convocatoria 2024",
    "convocatoria 2025",
    "modelos de convocatorias anteriores",
    "ámbito",
    "graduado en eso",
]


def fetch(url: str) -> str:
    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123 Safari/537.36",
            "Accept-Language": "es-ES,es;q=0.9,en;q=0.8",
        },
    )
    with urllib.request.urlopen(req, timeout=30) as resp:
        return resp.read().decode("utf-8", "ignore")


def extract_links(base: str, html: str) -> list[str]:
    attrs = re.findall(r'''(?:href|src|data-url|data-href|action)=["']([^"']+)["']''', html, flags=re.I)
    raw = re.findall(r'''https?://[^"'<>\s]+''', html, flags=re.I)
    all_links = sorted({urllib.parse.urljoin(base, link) for link in attrs} | set(raw))
    return all_links


def interesting_link(url: str) -> bool:
    s = url.lower()
    return any(k in s for k in ["pdf", "document", "documents/", "download", "modelos", "convocatorias", "graduado", "eso"])


def extract_snippets(html: str) -> list[str]:
    lines = html.splitlines()
    hits: list[str] = []
    for i, line in enumerate(lines):
        low = line.lower()
        if any(k in low for k in KEYWORDS):
            start = max(0, i - 2)
            end = min(len(lines), i + 3)
            chunk = "\n".join(lines[start:end]).strip()
            hits.append(chunk)
    # dedupe preserving order
    seen = set()
    unique = []
    for chunk in hits:
        if chunk not in seen:
            seen.add(chunk)
            unique.append(chunk)
    return unique


def regex_matches(html: str) -> dict[str, list[str]]:
    patterns = {
        "repositoryId": r"repositoryId[^0-9]{0,20}([0-9]{3,})",
        "folderId": r"folderId[^0-9]{0,20}([0-9]{3,})",
        "fileEntryId": r"fileEntryId[^0-9]{0,20}([0-9]{3,})",
        "plid": r"\bplid\b[^0-9]{0,20}([0-9]{3,})",
        "portletNamespace": r"portletNamespace[^A-Za-z0-9_:-]{0,20}([A-Za-z0-9_:-]+)",
    }
    out: dict[str, list[str]] = {}
    for name, pattern in patterns.items():
        matches = re.findall(pattern, html, flags=re.I)
        # preserve order
        deduped = []
        seen = set()
        for match in matches:
            if match not in seen:
                seen.add(match)
                deduped.append(match)
        out[name] = deduped[:50]
    return out


def main() -> None:
    html = fetch(URL)
    HTML_PATH.write_text(html, encoding="utf-8")

    links = extract_links(URL, html)
    interesting = [link for link in links if interesting_link(link)]
    LINKS_PATH.write_text("\n".join(interesting), encoding="utf-8")

    snippets = extract_snippets(html)
    SNIPPETS_PATH.write_text("\n\n---\n\n".join(snippets), encoding="utf-8")

    meta = regex_matches(html)
    META_PATH.write_text(json.dumps(meta, indent=2, ensure_ascii=False), encoding="utf-8")

    print(f"saved_html={HTML_PATH}")
    print(f"saved_links={LINKS_PATH}")
    print(f"saved_snippets={SNIPPETS_PATH}")
    print(f"saved_meta={META_PATH}")
    print(f"candidate_links={len(interesting)}")
    print("--- FIRST 80 CANDIDATE LINKS ---")
    for link in interesting[:80]:
        print(link)
    print("--- META ---")
    print(json.dumps(meta, indent=2, ensure_ascii=False))


if __name__ == "__main__":
    main()
