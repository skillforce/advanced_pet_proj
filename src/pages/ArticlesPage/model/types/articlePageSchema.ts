import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticlesView } from 'entity/Article';

export interface ArticlePageSchema extends EntityState<Article> {
    isLoading?: boolean
    error?: string;

    view: ArticlesView;

    // pagination
    page:number;
    limit?:number;
    hasMore:boolean;
}
