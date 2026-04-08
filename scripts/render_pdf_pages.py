#!/usr/bin/env python3
from __future__ import annotations

import shutil
import subprocess
import sys
from pathlib import Path


def usage() -> int:
    print(
        "Usage: render_pdf_pages.py <input.pdf> <output-prefix> [first-page] [last-page]",
        file=sys.stderr,
    )
    return 2


def main() -> int:
    if len(sys.argv) < 3 or len(sys.argv) > 5:
        return usage()

    pdf_path = Path(sys.argv[1]).expanduser().resolve()
    output_prefix = Path(sys.argv[2]).expanduser().resolve()
    first_page = int(sys.argv[3]) if len(sys.argv) >= 4 else 1
    last_page = int(sys.argv[4]) if len(sys.argv) >= 5 else first_page

    if not pdf_path.is_file():
        print(f"PDF not found: {pdf_path}", file=sys.stderr)
        return 1

    if first_page < 1 or last_page < first_page:
        print("Invalid page range", file=sys.stderr)
        return 1

    pdftoppm = shutil.which("pdftoppm")
    if not pdftoppm:
        print("pdftoppm is not installed", file=sys.stderr)
        return 1

    output_prefix.parent.mkdir(parents=True, exist_ok=True)

    subprocess.run(
        [
            pdftoppm,
            "-f",
            str(first_page),
            "-l",
            str(last_page),
            "-png",
            str(pdf_path),
            str(output_prefix),
        ],
        check=True,
    )

    generated = sorted(output_prefix.parent.glob(f"{output_prefix.name}*.png"))
    for path in generated:
        print(path)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
