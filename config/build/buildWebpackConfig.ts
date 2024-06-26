import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildPlugins } from './buildPlugins';
import { buildDevServer } from './buildDevServer';

export const buildWebpackConfig = (buildOptions: BuildOptions): webpack.Configuration => {
    const { mode, paths, isDev } = buildOptions;
    return {
        mode,
        cache: false,
        entry: paths.entry,
        module: {
            rules: buildLoaders(buildOptions),
        },
        resolve: buildResolvers(buildOptions),
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
            publicPath: '/',
        },
        plugins: buildPlugins(buildOptions),
        devtool: isDev ? 'eval-cheap-module-source-map' : undefined,
        devServer: isDev ? buildDevServer(buildOptions) : undefined,
    };
};
