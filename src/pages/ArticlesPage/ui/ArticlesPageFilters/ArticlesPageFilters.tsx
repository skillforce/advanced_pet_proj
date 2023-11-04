import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    ArticleSortField, ArticleSortSelector, ArticlesType, ArticlesView, ArticleViewSelector,
} from 'entity/Article';
import { articlePageActions } from 'pages/ArticlesPage/model/slices/ArticlePageSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { SortOrder } from 'shared/types';
import { useDebounce } from 'shared/lib/hooks/useDebounce';
import { TabItem } from 'shared/ui/Tabs/Tabs';
import { ArticleTypeTabs } from 'entity/Article/ui/ArticleTypeTabs/ArticleTypeTabs';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import {
    getArticlePageFiltersType,
    getArticlePageOrder,
    getArticlePageSearchText,
    getArticlePageSort,
    getArticlePageView,
} from '../../model/selectors/articlePageSelectors/articlePageSelectors';
import cls from './ArticlesPageFilters.module.scss';

interface ArticlesPageFiltersProps {
    className?: string,
}

export const ArticlesPageFilters = memo(({ className }: ArticlesPageFiltersProps) => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlePageView);
    const sort = useSelector(getArticlePageSort);
    const order = useSelector(getArticlePageOrder);
    const searchText = useSelector(getArticlePageSearchText);
    const type = useSelector(getArticlePageFiltersType);

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 500);

    const onViewClick = useCallback((view:ArticlesView) => {
        dispatch(articlePageActions.setView(view));
        dispatch(articlePageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeSort = useCallback((newSort:ArticleSortField) => {
        dispatch(articlePageActions.setSort(newSort));
        dispatch(articlePageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeOrder = useCallback((newOrder:SortOrder) => {
        dispatch(articlePageActions.setOrder(newOrder));
        dispatch(articlePageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeSearchText = useCallback((newSearchText:string) => {
        dispatch(articlePageActions.setSearchText(newSearchText));
        dispatch(articlePageActions.setPage(1));
        debouncedFetchData();
    }, [debouncedFetchData, dispatch]);

    const onChangeArticlePageType = useCallback((newTab:TabItem<ArticlesType>) => {
        dispatch(articlePageActions.setType(newTab.value));
        dispatch(articlePageActions.setPage(1));
        fetchData();
    }, [debouncedFetchData, dispatch]);

    return (
        <div className={classNames(cls.ArticlesPageFiltersContainer, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onChangeSort={onChangeSort}
                    onChangeOrder={onChangeOrder}
                />
                <ArticleViewSelector
                    view={view}
                    onViewClick={onViewClick}
                />
            </div>
            <Card className={cls.search}>
                <Input
                    value={searchText}
                    onChange={onChangeSearchText}
                    placeholder={t('Search')}
                />
            </Card>
            <ArticleTypeTabs
                onChangeType={onChangeArticlePageType}
                className={cls.tabs}
                value={type}
            />

        </div>
    );
});
