import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleListItemSkeleton } from 'entity/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../../ui/ArticleListItem/ArticleListItem';
import { Article, ArticlesView } from '../../model/types/article';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles:Article[];
    isLoading?:boolean;
    view?:ArticlesView
}

const getSkeleton = (view:ArticlesView) => new Array(view === ArticlesView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton
            view={view}
            key={index}
        />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticlesView.SMALL,
    } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.ArticleListContainer, {}, [className, cls[view]])}>
                {getSkeleton(view)}
            </div>
        );
    }

    const renderArticle = (article:Article) => (
        <ArticleListItem
            key={article.id}
            article={article}
            view={view}
        />
    );

    return (
        <div className={classNames(cls.ArticleListContainer, {}, [className, cls[view]])}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : null}
        </div>
    );
});
