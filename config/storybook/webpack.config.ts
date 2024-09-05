import webpack from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

module.exports = ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        entry: '',
        build: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        buildLocales: '',
        locales: '',
    };

    const rules = config.module!.rules as webpack.RuleSetRule[]; // чтобы избежать ругани TS
    config.resolve!.modules!.push(paths.src);
    config.resolve!.extensions!.push('.ts', '.tsx');
    config.resolve!.alias! = {
        ...config.resolve!.alias!,
        '@': paths.src,
    };

    config.module!.rules!.push(buildCssLoaders(true));
    // для корректной работы svg и storybook
    // eslint-disable-next-line no-param-reassign
    config.module!.rules = rules.map((rule: webpack.RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
    });
    config.module!.rules.push(buildSvgLoader());
    config.plugins!.push(
        new webpack.DefinePlugin({
            __IS_DEV__: true,
            __API__: JSON.stringify('https://jsonplaceholder.ru'),
            __PROJECT__: JSON.stringify('storybook'),
        }),
    );

    return config;
};
