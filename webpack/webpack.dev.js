const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    // https://webpack.js.org/configuration/dev-server/#root
    devServer: {
        historyApiFallback: true,
        hot: true,
        open: true,
        // setup the port
        port: 3000,
        proxy: {
            '/api': {
                // proxy the api server
                target: 'http://localhost:8080'
            }
        }
    },
    devtool: 'cheap-module-source-map',
    mode: 'development',
    plugins: [new ReactRefreshWebpackPlugin()]
};
