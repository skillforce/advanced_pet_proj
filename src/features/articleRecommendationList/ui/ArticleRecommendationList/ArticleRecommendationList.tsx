import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/Text';
import { ArticleList } from '@/entity/Article';
import { VStack } from '@/shared/ui/Stack';
import {
    useGetArticleRecommendationsList,
} from '../../api/articleRecommendationsApi';

interface ArticleRecommendationListProps {
    className?: string;
}

export const ArticleRecommendationList = memo((props: ArticleRecommendationListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { isLoading, data: recommendationsList, error } = useGetArticleRecommendationsList(4);

    if (isLoading || error || !recommendationsList) {
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
