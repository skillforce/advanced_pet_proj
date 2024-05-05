import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { ArticleList } from '@/entity/Article';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Text, TextTheme } from '@/shared/ui/Text';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import {
    getArticlePageError,
    getArticlePageIsLoading,
    getArticlePageView,
} from '../../model/selectors/articlePageSelectors/articlePageSelectors';
import { getArticles } from '../../model/slices/ArticlePageSlice';

interface ArticleInfiniteListProps {
    className?: string
}

export const ArticleInfiniteList = memo(({ className }: ArticleInfiniteListProps) => {
    const { t } = useTranslation('article');

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlePageIsLoading);
    const error = useSelector(getArticlePageError);
    const view = useSelector(getArticlePageView);
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    if (error) {
        return <Text theme={TextTheme.ERROR} title={t('Error with articles downloading')} />;
    }

    return (
        <ArticleList
            isLoading={isLoading}
            view={view}
            articles={articles}
            className={className}
        />
    );
});
