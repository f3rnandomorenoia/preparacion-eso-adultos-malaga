#!/usr/bin/env python3
from __future__ import annotations

import sys
import urllib.request

url = sys.argv[1] if len(sys.argv) > 1 else 'http://127.0.0.1:8123/'
with urllib.request.urlopen(url, timeout=10) as resp:
    html = resp.read().decode('utf-8', 'ignore')
checks = [
    'Exámenes online con corrección',
    'exam-data.js',
    'exam-runner',
]
for item in checks:
    print(item, 'OK' if item in html else 'MISSING')
