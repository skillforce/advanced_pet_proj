import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';
import { BuildOptions } from '../types/config';

interface BuildBabelLoaderProps extends BuildOptions {
    isTsx:boolean
}

export const buildBabelLoader = ({ isDev, isTsx }:BuildBabelLoaderProps) => {
    const isProd = !isDev;
    return {
        test: isTsx ? /\.(ts|tsx)$/ : /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                cacheDirectory: true,
                presets: ['@babel/preset-env'],
                plugins: [
                    isDev && require.resolve('react-refresh/babel'),
                    ['@babel/plugin-transform-typescript',
                        {
                            isTsx,
                        },
                    ],
                    '@babel/plugin-transform-runtime',
                    isTsx && isProd && [babelRemovePropsPlugin(),
                        {
                            props: ['data-testid'],
                        }],

                ].filter(Boolean),

            },

        },
    };
};
