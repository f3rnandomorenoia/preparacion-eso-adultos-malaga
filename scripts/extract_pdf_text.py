#!/usr/bin/env python3
from __future__ import annotations

import sys
from pathlib import Path

pdf_path = Path(sys.argv[1])

errors = []

# Try pypdf / PyPDF2
for mod_name in ("pypdf", "PyPDF2"):
    try:
        mod = __import__(mod_name)
        reader = mod.PdfReader(str(pdf_path))
        for i, page in enumerate(reader.pages, start=1):
            print(f"\n===== PAGE {i} =====\n")
            text = page.extract_text() or ""
            print(text)
        raise SystemExit(0)
    except Exception as e:
        errors.append(f"{mod_name}: {e}")

print("FAILED")
for err in errors:
    print(err)
raise SystemExit(1)
