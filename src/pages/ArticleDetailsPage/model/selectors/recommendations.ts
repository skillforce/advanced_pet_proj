import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticlePageRecommendationsIsLoading = (state:StateSchema) => (state.articleDetailsPage?.recommendations.isLoading);
export const getArticlePageRecommendationsError = (state:StateSchema) => state.articleDetailsPage?.recommendations?.error;
