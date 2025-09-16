const Path = require('path');
const { JavascriptWebpackConfig, CssWebpackConfig } = require('@silverstripe/webpack-config');

const ENV = process.env.NODE_ENV;
const PATHS = {
  ROOT: Path.resolve(),
  SRC: Path.resolve('src'),
  DIST: Path.resolve('dist'),
};

const config = [
  // Main JS bundle
  new JavascriptWebpackConfig('js', PATHS, 'dnadesign/silverstripe-elemental')
    .setEntry({
      bundle: `${PATHS.SRC}/entry.js`,
    })
    .getConfig(),
  // sass to css
  new CssWebpackConfig('css', PATHS)
    .setEntry({
      bundle: `${PATHS.SRC}/colorpalette.scss`,
    })
    .getConfig(),
];

// Use WEBPACK_CHILD=js or WEBPACK_CHILD=css env var to run a single config
module.exports = (process.env.WEBPACK_CHILD)
  ? config.find((entry) => entry.name === process.env.WEBPACK_CHILD)
  : config;