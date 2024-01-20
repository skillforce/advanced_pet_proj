import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { ArticleList } from 'entity/Article';
import { VStack } from 'shared/ui/Stack';
import { rtkApi } from 'shared/api/rtkApi';

interface ArticleRecommendationListProps {
    className?: string;
}

const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendationsList: build.query({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
    overrideExisting: false,
});

const useGetArticleRecommendationsList = recommendationsApi.useGetArticleRecommendationsListQuery;

export const ArticleRecommendationList = memo((props: ArticleRecommendationListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { isLoading, data: recommendationsList, error } = useGetArticleRecommendationsList(4);

    if (isLoading || error) {
        return null;
    }

    return (
        <VStack gap="8" className={classNames('', {}, [className])}>
            <Text
                size={TextSize.L}
                title={t('Recommend for you:')}
            />
            <ArticleList
                articles={recommendationsList}
                target="_blank"
            />
        </VStack>
    );
});
