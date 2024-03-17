import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entity/Rating';
import { useGetArticleRatingQuery, useRateArticleMutation } from '../../api/articleRatingApi';
import { getUserAuthData } from '@/entity/User';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

export interface ArticleRatingProps {
    className?: string
    articleId:string
}
const ArticleRating = memo(
    ({ className, articleId }: ArticleRatingProps) => {
        const { t } = useTranslation('article');
        const userData = useSelector(getUserAuthData);

        const { data, isLoading } = useGetArticleRatingQuery({ userId: userData?.id ?? '', articleId });
        const [rateArticle] = useRateArticleMutation();

        const handleRateArticle = useCallback((starsCount:number, feedback?:string) => {
            try {
                rateArticle({
                    rate: starsCount,
                    userId: userData?.id ?? '',
                    feedback,
                    articleId,
                });
            } catch (e) {
                // error handling
                console.log(e);
            }
        }, [articleId, rateArticle, userData?.id]);

        const onCancel = useCallback((starsCount: number) => {
            handleRateArticle(starsCount);
        }, [handleRateArticle]);

        const onAccept = useCallback((starsCount: number, feedback?:string) => {
            handleRateArticle(starsCount, feedback);
        }, [handleRateArticle]);

        if (isLoading) {
            return <Skeleton width="100%" height={120} />;
        }

        const rating = data?.[0];

        return (
            <RatingCard
                onCancel={onCancel}
                onAccept={onAccept}
                rate={rating?.rate}
                className={className}
                hasFeedback
                title={t('Rate this article please')}
                feedbackTitle={t('Leave your comment it\'ll help us to improve quality of service')}
            />
        );
    },
);
export default ArticleRating;
