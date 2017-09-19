const assert = require("assert");
const fs = require("fs");
const babel = require("babel-core");

const input = fs.readFileSync("node_modules/jquery/dist/jquery.js", "utf8");

const result1 = babel.transform(input);

const result2 = babel.transform(result1.code, {
  plugins: ["minify-dead-code-elimination"],
});

assert(result2.code.length < result1.code.length);

fs.writeFileSync("jquery.original.js", input);
fs.writeFileSync("jquery.input.js", result1.code + "\n");
fs.writeFileSync("jquery.output.js", result2.code + "\n");
fs.writeFileSync("jquery.output-edit.js", result1.code + "\n");
