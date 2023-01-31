import webpack from 'webpack';

export  const buildLoaders =():webpack.RuleSetRule[]=>{

    //Если не используем ts => нужен babel-loader
    const typescriptLoader =  {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }

    const scssLoader =  {
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                "style-loader",
                // Translates CSS into CommonJS
                "css-loader",
                // Compiles Sass to CSS
                "sass-loader",
            ],
        }
    return [
        typescriptLoader,
        scssLoader
    ];
}