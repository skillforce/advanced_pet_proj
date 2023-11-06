import React, { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleListItemSkeleton } from 'entity/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { ArticleListItem } from '../../ui/ArticleListItem/ArticleListItem';
import { Article, ArticlesView } from '../../model/types/article';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles:Article[];
    isLoading?:boolean;
    view?:ArticlesView
    target?:HTMLAttributeAnchorTarget;

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
        target,

    } = props;
    const { t } = useTranslation('article');

    const renderArticle = (article:Article) => (
        <ArticleListItem
            key={article.id}
            article={article}
            view={view}
            target={target}
        />
    );

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleListContainer, {}, [cls[view], className])}>
                <Text bodyText={t('Article list is empty')} align={TextAlign.CENTER} size={TextSize.L} />
            </div>
        );
    }
    return (
        <div className={classNames(cls.ArticleListContainer, {}, [cls[view], className])}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : null}
            {isLoading && getSkeleton(view) }
        </div>
    );
});
