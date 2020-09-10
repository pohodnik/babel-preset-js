// eslint-disable-next-line global-require,import/no-dynamic-require
const use = pkg => require(pkg).default;

module.exports = () => ({
    presets: [
        '@pohodnik/babel-preset',
        use('@babel/preset-react')
    ],
    env: {
        production: {
            plugins: [use('babel-plugin-transform-react-remove-prop-types'), { removeImport: true }]
        }
    }
});
