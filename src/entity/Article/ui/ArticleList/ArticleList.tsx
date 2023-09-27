import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleListItem } from '../../ui/ArticleListItem/ArticleListItem';
import { Article, ArticlesView } from '../../model/types/article';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles:Article[];
    isLoading?:boolean;
    view?:ArticlesView
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticlesView.SMALL,
    } = props;

    const renderArticle = (article:Article) => (
        <ArticleListItem
            article={article}
            view={view}
        />
    );
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ArticleListContainer, {}, [className])}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : null}
        </div>
    );
});
