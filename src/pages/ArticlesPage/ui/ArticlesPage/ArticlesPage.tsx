import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleList, ArticlesView, ArticleViewSelector } from 'entity/Article';
import { DynamicModuleLoader, ReducersListSchema } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { Page } from 'widgets/Page/Page';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import {
    getArticlePageError,
    getArticlePageIsLoading,
    getArticlePageView,
} from '../../model/selectors/articlePageSelectors/articlePageSelectors';
import { articlePageActions, articlePageReducer, getArticles } from '../../model/slices/ArticlePageSlice';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string
}

const reducers:ReducersListSchema = {
    articlesPage: articlePageReducer,
};

const ArticlesPage = memo(({ className }: ArticlesPageProps) => {
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlePageIsLoading);
    const error = useSelector(getArticlePageError);
    const view = useSelector(getArticlePageView);

    useInitialEffect(() => {
        dispatch(initArticlesPage());
    });

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    const onViewClick = useCallback((view:ArticlesView) => {
        dispatch(articlePageActions.setView(view));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.ArticlesPageContainer, {}, [className])}
            >

                <ArticleViewSelector
                    view={view}
                    onViewClick={onViewClick}
                />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                />
            </Page>
        </DynamicModuleLoader>

    );
});

export default memo(ArticlesPage);
