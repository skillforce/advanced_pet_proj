import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Article, ArticlesView } from '../../model/types/article';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    className?: string;
    article:Article;
    view:ArticlesView
}

export const ArticleListItem = memo(({ className, article, view }: ArticleListItemProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ArticleListItemContainer, {}, [className])}>
            {article.title}
        </div>
    );
});
