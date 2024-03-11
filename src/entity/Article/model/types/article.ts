import { UserScheme } from '@/entity/User';
import { ArticlesBlocksType, ArticlesType } from '../consts/consts';

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
    user:UserScheme
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticlesType[];
    blocks: ArticleBlocks[];
}
