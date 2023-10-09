import { StateSchema } from 'app/providers/StoreProvider';
import { ArticlesView } from 'entity/Article';

export const getArticlePageIsLoading = (state:StateSchema) => state.articlesPage?.isLoading || false;
export const getArticlePageError = (state:StateSchema) => state.articlesPage?.error;
export const getArticlePageView = (state:StateSchema) => state.articlesPage?.view || ArticlesView.SMALL;
export const getArticlePageLimit = (state:StateSchema) => state.articlesPage?.limit || 9;
export const getArticlePageNum = (state:StateSchema) => state.articlesPage?.page || 1;
export const getArticlePageHasMore = (state:StateSchema) => state.articlesPage?.hasMore;
