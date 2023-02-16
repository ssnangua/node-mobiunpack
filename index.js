const exec = require("util").promisify(require("child_process").exec);
const fs = require("fs");
const path = require("path");
const tmpdir = require("os").tmpdir();

const cmd =
  process.platform === "win32"
    ? `"${path.join(__dirname, "dist/mobiunpack.exe")}"`
    : `py "${path.join(__dirname, "mobiunpack.py")}"`;

function unpack(mobiFile, outputDir = ".") {
  fs.mkdirSync(outputDir, { recursive: true });
  return exec(`${cmd} "${mobiFile}" "${outputDir}"`);
}

async function exportImages(mobiFile, outputDir = ".") {
  const { name } = path.parse(mobiFile);
  const unpackDir = path.join(tmpdir, `mobiunpack-${name}`);
  await unpack(mobiFile, unpackDir);
  fs.mkdirSync(outputDir, { recursive: true });
  const images = fs
    .readFileSync(path.join(unpackDir, `${name}.html`))
    .toString()
    .match(/(?<=(img[^>]*src="))[^"]*/g);
  const maxLength = String(images.length).length;
  images.forEach((image, i) => {
    const dest = String(i + 1).padStart(maxLength, "0") + path.extname(image);
    fs.copyFileSync(path.join(unpackDir, image), path.join(outputDir, dest));
  });
  fs.rmSync(unpackDir, { recursive: true, force: true });
  return { length: images.length };
}

module.exports = { unpack, exportImages };
