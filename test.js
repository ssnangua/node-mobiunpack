const { unpack, exportImages } = require("./index.js");

unpack("test.mobi", "output/unpack");
exportImages("test.mobi", "output/images");
