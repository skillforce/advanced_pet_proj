export enum ArticlesType {
    IT='IT',
    SCIENCE='SCIENCE',
    ECONOMICS='ECONOMICS'
}
export enum ArticlesBlocksType {
    TEXT='TEXT',
    CODE='CODE',
    IMAGE='IMAGE',
}
export enum ArticlesView {
    BIG='BIG',
    SMALL='SMALL'
}
export interface ArticleBlockBase {
    id: string,
    type:ArticlesBlocksType
}

export interface ArticleCodeBlock extends ArticleBlockBase{
    type: ArticlesBlocksType.CODE,
    code: string
}
export interface ArticleImageBlock extends ArticleBlockBase{
    type: ArticlesBlocksType.IMAGE,
    src: string
    title: string,
}
export interface ArticleTextBlock extends ArticleBlockBase{
    type: ArticlesBlocksType.TEXT,
    title: string,
    paragraphs: string[]
}

export type ArticleBlocks = ArticleTextBlock | ArticleImageBlock | ArticleCodeBlock
export interface Article{
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticlesType[];
    blocks: ArticleBlocks[];
}
