# node-mobiunpack

Simple Node.js wrapper of **[mobiunpack 0.32](https://www.mobileread.com/forums/showthread.php?t=61986)** to unpack or export images from .mobi files.

## Install

```bash
npm install mobiunpack
```

## Usage

```javascript
const { unpack, exportImages } = require("mobiunpack");

unpack("test.mobi", "output/unpack");
exportImages("test.mobi", "output/images");
```

## CLI

```bash
Usage: mobiunpack <mobiFile> [outputDir] [--images]

Arguments:
  mobiFile      path to .mobi file
  outputDir     output directory (default: ".")

Options:
  --images      export sorted images
```

## Development

### Build mobiunpack executable file

```bash
pip install -i https://mirrors.aliyun.com/pypi/simple/ pyinstaller==3.6
pyinstaller -F "mobiunpack.py"
```
