import { BuildOptions } from '../types/config';

interface BuildBabelLoaderProps extends BuildOptions {
    isTsx:boolean
}

export const buildBabelLoader = ({ isDev, isTsx }:BuildBabelLoaderProps) => ({
    test: isTsx ? /\.(ts|tsx)$/ : /\.(jsx|js)$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env'],
            plugins: [
                isDev && require.resolve('react-refresh/babel'),
                ['@babel/plugin-transform-typescript',
                    {
                        isTsx,
                    },
                ],
                '@babel/plugin-transform-runtime',

            ].filter(Boolean),

        },

    },
});
