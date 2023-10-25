import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticlesView } from 'entity/Article';
import { SortOrder } from 'shared/types';
import { ArticleSortField } from 'entity/Article/model/types/article';

export interface ArticlePageSchema extends EntityState<Article> {
    isLoading?: boolean
    error?: string;

    // pagination

    page:number;
    limit:number;
    hasMore:boolean;
    // filters
    view: ArticlesView;
    order?: SortOrder;
    sort:ArticleSortField;
    searchText:string;

    _inited:boolean
}
