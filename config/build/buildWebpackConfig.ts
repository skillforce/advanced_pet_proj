import {BuildOptions} from './types/config';
import {buildLoaders} from './buildLoaders';
import {buildResolvers} from './buildResolvers';
import {buildPlugins} from './buildPlugins';
import webpack from 'webpack';

export const buildWebpackConfig =(buildOptions:BuildOptions):webpack.Configuration=>{
    const {mode,paths}=buildOptions;
    return {
        mode: mode,
            entry: paths.entry,
        module: {
        rules: buildLoaders(),
    },
        resolve: buildResolvers(),
            output: {
        filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
    },
        plugins: buildPlugins(paths)
    }
}