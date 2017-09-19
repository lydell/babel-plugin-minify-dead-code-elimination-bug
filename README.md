# babel-plugin-minify-dead-code-elimination bug demo

1. `npm install`
2. `npm run build`
3. Open `pass.html` in a browser.
4. Open `fail.html` in a browser.

Tip: To see the diff between input and output:

```
git diff --no-index jquery.input.js jquery.output.js
```

You can see the output of that command here: [jquery.diff](jquery.diff).

## Expected behavior (before minify)

![pass.gif](pass.gif)

## Actual behavior (after minify)

![fail.gif](fail.gif)
