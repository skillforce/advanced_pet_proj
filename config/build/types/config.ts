export type BuildMode = 'production' | 'development';
export interface BuildPaths {
    entry:string;
    build:string;
    html:string;
    src:string;
}

export interface BuildOptions {
    mode: BuildMode;
    paths:BuildPaths;
    isDev:boolean;
    isAnalyze:boolean;
    port:number;
    apiUrl:string
}

export interface BuildEnv{
    mode:BuildMode,
    analyze:boolean,
    port:number,
    apiUrl:string
}
