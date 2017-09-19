const babel = require("babel-core");

const input = `
function test(props) {
  var isBox = "width" in props;

  for (prop in props) {
    delete props[prop];
  }
  // This also triggers the bug:
  // delete props.width;

  if (isBox) {
    console.log("hello");
  }
}
`.trim();

const result = babel.transform(input, {
  plugins: ["minify-dead-code-elimination"],
});

console.log(`
INPUT:
${input}

OUTPUT:
${result.code}
`.trim());
