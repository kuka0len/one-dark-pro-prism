# One Dark Pro theme for [Prism](https://prismjs.com/)

<img src="https://i.imgur.com/h2jfQHf.png" alt="colors" style="height:400px;" />

Based on [One Dark Pro theme for VS Code](https://github.com/Binaryify/OneDark-Pro).

The highlighting is not exactly the same because VS Code and Prism don't have the same tokenization. But I did my best to make this theme mimic the original as much as possible.

## Why?

Because One Dark Pro is the greatest theme of all time.

## Usage

Use `one-dark-pro.css` instead of the default `prism.css`.

Also, optionally, use `one-dark-pro.js` along with the default `prism.js`. This script fixes the style for a few keywords that can't be acheived with CSS, this includes the keyword `this` for JavaScript, the operators `:=` and `<-` for Go and vendor prefixes (`-moz`, etc) for CSS.

## Development

Make sure you have Sass installed.

Clone:

```shell
git clone https://www.github.com/kuka0len/one-dark-pro-prism.git
```

Watch mode for development:

```shell
sass scss/main.scss theme/one-dark-pro.css --watch
```

Build:

```shell
sass scss/main.scss theme/one-dark-pro.css --style compressed
```

If you're not interested in some languages, just remove them from the imports in `main.scss` and rebuild.

You can also create an entirely new theme just by changing the colors in `_colors.scss`.
