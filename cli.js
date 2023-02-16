#!/usr/bin/env node

const { unpack, exportImages } = require("./index.js");
const args = process.argv.slice(2);
const [mobiFile, outputDir = "."] = args;

const help = `Usage: mobiunpack <mobiFile> [outputDir] [--images]

Unpack a .mobi file, or export images from a .mobi file.

Arguments:
  mobiFile      path to .mobi file
  outputDir     output directory (default: ".")

Options:
  --images      export sorted images
  -h, --help    display help for command`;

if (args.includes("-h") || args.includes("--help")) {
  console.log(help);
}
if (!mobiFile) {
  console.warn("Missing .mobi source path argument!");
  console.log(help);
} else if (args.includes("--images")) {
  exportImages(mobiFile, outputDir);
} else {
  unpack(mobiFile, outputDir);
}
