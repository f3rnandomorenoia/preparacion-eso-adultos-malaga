#!/usr/bin/env python3
from __future__ import annotations

import json
import sys
import urllib.request
import zipfile
from pathlib import Path
from urllib.parse import quote

PACKS = {
    "2024-04": {
        "groupId": "1454565",
        "folderId": "1624993",
        "title": "Pruebas convocatoria abril 2024 (incluye soluciones)",
        "uuid": "35ea24e8-0010-b560-0915-44b5fd3171e0",
        "version": "1.1",
        "zipFileName": "Convocatoria abril 2024.zip",
    },
    "2024-06": {
        "groupId": "1454565",
        "folderId": "1624993",
        "title": "Pruebas convocatoria junio 2024 (incluye soluciones)",
        "uuid": "1c4d10d9-36a0-8654-0095-1944e6c8dab7",
        "version": "1.1",
        "zipFileName": "Convocatoria junio 2024.zip",
    },
}

BASE = "https://www.juntadeandalucia.es/educacion/portales"
OUT_ROOT = Path("data/exam-packs")


def build_url(meta: dict[str, str]) -> str:
    title = quote(meta["title"], safe="")
    return f"{BASE}/documents/{meta['groupId']}/{meta['folderId']}/{title}/{meta['uuid']}?version={meta['version']}"


def download(url: str, dest: Path) -> None:
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=60) as resp:
        dest.write_bytes(resp.read())


def main() -> int:
    key = sys.argv[1] if len(sys.argv) > 1 else "2024-04"
    if key not in PACKS:
        print(f"Unknown pack: {key}", file=sys.stderr)
        return 2

    meta = PACKS[key].copy()
    meta["url"] = build_url(meta)

    pack_dir = OUT_ROOT / key
    zip_dir = pack_dir / "zip"
    extracted_dir = pack_dir / "extracted"
    zip_dir.mkdir(parents=True, exist_ok=True)
    extracted_dir.mkdir(parents=True, exist_ok=True)

    zip_path = zip_dir / meta["zipFileName"]
    download(meta["url"], zip_path)

    with zipfile.ZipFile(zip_path) as zf:
        zf.extractall(extracted_dir)
        names = zf.namelist()

    (pack_dir / "manifest.json").write_text(json.dumps(meta, indent=2, ensure_ascii=False), encoding="utf-8")

    print(f"pack={key}")
    print(f"zip={zip_path}")
    print(f"extracted={extracted_dir}")
    print("files:")
    for name in names:
        print(name)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
