import { rtkApi } from '@/shared/api/rtkApi';
import { Rating } from '@/entity/Rating';

interface GetArticleRatingArg {
    userId: string;
    articleId: string;
}
interface RateArticleRatingArg extends GetArticleRatingArg {
    rate: number;
    feedback?: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRating: build.query<Rating[], GetArticleRatingArg>({
            query: ({ articleId, userId }) => ({
                url: '/article-ratings',
                params: {
                    articleId,
                    userId,
                },
            }),
        }),
        rateArticle: build.mutation<void, RateArticleRatingArg>({
            query: (arg) => ({
                url: '/article-ratings',
                method: 'POST',
                body: arg,
            }),
        }),
    }),
});

export const { useGetArticleRatingQuery } = articleRatingApi;
export const { useRateArticleMutation } = articleRatingApi;
