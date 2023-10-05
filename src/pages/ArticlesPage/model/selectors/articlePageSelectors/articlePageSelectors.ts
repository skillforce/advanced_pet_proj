import { StateSchema } from 'app/providers/StoreProvider';
import { ArticlesView } from 'entity/Article';

export const getArticlePageIsLoading = (state:StateSchema) => state.articlesPage?.isLoading || false;
export const getArticlePageError = (state:StateSchema) => state.articlesPage?.error;
export const getArticlePageView = (state:StateSchema) => state.articlesPage?.view || ArticlesView.SMALL;
