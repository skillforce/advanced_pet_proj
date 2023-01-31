import path from 'path';
import webpack from 'webpack';
import {buildWebpackConfig} from './config/build/buildWebpackConfig';
import {BuildEnv, BuildPaths} from './config/build/types/config';

const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    build: path.resolve(__dirname, 'build')
}

export default (env: BuildEnv): webpack.Configuration => {
    const mode = env.mode || 'development';
    const PORT = env.port || 3000;

    const isDev = mode === 'development';

    return buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT
    })
}