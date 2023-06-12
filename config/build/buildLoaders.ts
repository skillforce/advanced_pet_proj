import webpack from 'webpack';
import { buildBabelLoader } from './loaders/buildBabelLoader';
import { BuildOptions } from './types/config';
import { buildCssLoaders } from './loaders/buildCssLoaders';
import { buildSvgLoader } from './loaders/buildSvgLoader';

export const buildLoaders = (buildOptions: BuildOptions): webpack.RuleSetRule[] => {
    const { isDev } = buildOptions;

    // Если не используем ts => нужен babel-loader
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const babelLoader = buildBabelLoader(buildOptions);

    const svgLoader = buildSvgLoader();

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const scssLoader = buildCssLoaders(isDev);

    return [
        svgLoader,
        fileLoader,
        babelLoader,
        typescriptLoader,
        scssLoader,
    ];
};
