import {BuildOptions} from './types/config';
import {buildLoaders} from './buildLoaders';
import {buildResolvers} from './buildResolvers';
import {buildPlugins} from './buildPlugins';
import webpack from 'webpack';
import {buildDevServer} from './buildDevServer';

export const buildWebpackConfig = (buildOptions: BuildOptions): webpack.Configuration => {
    const {mode, paths, isDev} = buildOptions;
    return {
        mode: mode,
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
        },
        plugins: buildPlugins(paths),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer:isDev ? buildDevServer(buildOptions):undefined,
    }
}