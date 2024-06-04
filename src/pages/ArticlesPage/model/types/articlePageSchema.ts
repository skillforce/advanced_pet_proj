import { EntityState } from '@reduxjs/toolkit';
import {
    Article, ArticlesType, ArticlesView, ArticleSortField,
} from '@/entity/Article';
import { SortOrder } from '@/shared/types/sort';

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
    type:ArticlesType;

    _inited:boolean
}
