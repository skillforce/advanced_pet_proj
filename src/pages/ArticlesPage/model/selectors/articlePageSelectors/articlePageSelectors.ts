import { StateSchema } from 'app/providers/StoreProvider';
import { ArticlesView } from 'entity/Article';
import { ArticleSortField, ArticlesType } from 'entity/Article/model/types/article';

export const getArticlePageIsLoading = (state:StateSchema) => state.articlesPage?.isLoading || false;
export const getArticlePageError = (state:StateSchema) => state.articlesPage?.error;
export const getArticlePageView = (state:StateSchema) => state.articlesPage?.view || ArticlesView.SMALL;
export const getArticlePageLimit = (state:StateSchema) => state.articlesPage?.limit || 9;
export const getArticlePageNum = (state:StateSchema) => state.articlesPage?.page || 1;
export const getArticlePageHasMore = (state:StateSchema) => state.articlesPage?.hasMore;
export const getArticlePageInited = (state:StateSchema) => state.articlesPage?._inited;
export const getArticlePageSort = (state:StateSchema) => state.articlesPage?.sort || ArticleSortField.CREATED;
export const getArticlePageOrder = (state:StateSchema) => state.articlesPage?.order || 'asc';
export const getArticlePageSearchText = (state:StateSchema) => state.articlesPage?.searchText || '';
export const getArticlePageFiltersType = (state:StateSchema) => state.articlesPage?.type ?? ArticlesType.ALL;
