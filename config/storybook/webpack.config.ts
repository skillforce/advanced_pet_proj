import webpack from 'webpack';
import path from 'path';
import { Linter, Rule } from 'eslint';
import { BuildPaths } from '../build/types/config';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

module.exports = ({ config }:{ config: webpack.Configuration }) => {
    const paths:BuildPaths = {
        entry: '',
        build: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');

    config.module.rules.push(buildCssLoaders(true));
    // для корректной работы svg и storybook
    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map((rule:webpack.RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
    });
    config.module.rules.push(buildSvgLoader());

    return config;
};
