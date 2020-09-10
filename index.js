module.exports = function () {
    return {
        presets: [
            '@pohodnik/babel-preset',
            '@babel/preset-react'
        ],
        env: {
            test: {
                plugins: []
            },
            development: {
                plugins: []
            },
            production: {
                plugins: ['babel-plugin-transform-react-remove-prop-types', { removeImport: true }]
            }
        }
    };
};
