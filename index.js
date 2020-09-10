const env = process.env.BABEL_ENV || process.env.NODE_ENV || 'development';
/* eslint-disable global-require */
module.exports = function () {
    return {
        presets: [
            require('@pohodnik/babel-preset'),
            [
                require('@babel/preset-react').default,
                {
                    development: env !== 'production',
                    useBuiltIns: true,
                },
            ],
        ],
        plugins: [
            env === 'production' && [
                require('babel-plugin-transform-react-remove-prop-types').default,
                { removeImport: true },
            ],
        ].filter(Boolean)
    };
};
