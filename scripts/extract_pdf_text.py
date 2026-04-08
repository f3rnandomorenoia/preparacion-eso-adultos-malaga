#!/usr/bin/env python3
from __future__ import annotations

import shutil
import subprocess
import sys
from pathlib import Path


def usage() -> int:
    print("Usage: extract_pdf_text.py <input.pdf> [output.txt|-]", file=sys.stderr)
    return 2


def extract_with_pdftotext(pdf_path: Path) -> str:
    pdftotext = shutil.which("pdftotext")
    if not pdftotext:
        raise RuntimeError("pdftotext is not installed")

    result = subprocess.run(
        [pdftotext, str(pdf_path), "-"],
        check=True,
        capture_output=True,
        text=True,
    )
    return result.stdout


def extract_with_python_reader(pdf_path: Path) -> str:
    errors: list[str] = []
    for mod_name in ("pypdf", "PyPDF2"):
        try:
            mod = __import__(mod_name)
            reader = mod.PdfReader(str(pdf_path))
            chunks: list[str] = []
            for index, page in enumerate(reader.pages, start=1):
                text = page.extract_text() or ""
                chunks.append(f"\n===== PAGE {index} =====\n\n{text}\n")
            return "".join(chunks)
        except Exception as exc:  # pragma: no cover, best-effort fallback
            errors.append(f"{mod_name}: {exc}")

    raise RuntimeError(" ; ".join(errors) or "No PDF reader available")


def main() -> int:
    if len(sys.argv) < 2 or len(sys.argv) > 3:
        return usage()

    pdf_path = Path(sys.argv[1]).expanduser().resolve()
    output_arg = sys.argv[2] if len(sys.argv) == 3 else "-"

    if not pdf_path.is_file():
        print(f"PDF not found: {pdf_path}", file=sys.stderr)
        return 1

    try:
        text = extract_with_pdftotext(pdf_path)
    except Exception:
        text = extract_with_python_reader(pdf_path)

    if output_arg == "-":
        sys.stdout.write(text)
        return 0

    output_path = Path(output_arg).expanduser().resolve()
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(text, encoding="utf-8")
    print(output_path)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
