import React, { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign, TextSize } from '@/shared/ui/Text';
import { ArticlesView } from '../../model/consts/consts';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../../ui/ArticleListItem/ArticleListItem';
import { Article } from '../../model/types/article';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticlesView;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeleton = (view: ArticlesView) =>
    new Array(view === ArticlesView.SMALL ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton view={view} key={index} />
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

    if (!isLoading && !articles.length) {
        return (
            <div
                className={classNames(cls.ArticleListContainer, {}, [
                    cls[view],
                    className,
                ])}
            >
                <Text
                    bodyText={t('Article list is empty')}
                    align={TextAlign.CENTER}
                    size={TextSize.L}
                />
            </div>
        );
    }

    return (
        <>
            <div
                className={classNames(cls.ArticleListContainer, {}, [
                    cls[view],
                    className,
                ])}
                data-testid="ArticleList"
            >
                {articles.map((article) => (
                    <ArticleListItem
                        article={article}
                        target={target}
                        className={cls.card}
                        view={view}
                        key={article.id}
                    />
                ))}
            </div>
            <div
                className={classNames(cls.ArticleListContainer, {}, [
                    cls[view],
                    className,
                ])}
            >
                {isLoading && getSkeleton(view)}
            </div>
        </>
    );
});
