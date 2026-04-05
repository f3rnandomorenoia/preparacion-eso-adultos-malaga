#!/usr/bin/env python3
from __future__ import annotations

import shutil
import sys
from pathlib import Path

src = Path(sys.argv[1])
out_dir = Path('/home/fernando/clawd/tmp/eso-adultos')
out_dir.mkdir(parents=True, exist_ok=True)
dest = out_dir / src.name
shutil.copy2(src, dest)
print(dest)
