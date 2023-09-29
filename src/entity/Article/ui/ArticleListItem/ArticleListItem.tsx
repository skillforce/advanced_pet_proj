import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import { Card } from 'shared/ui/Card/Card';
import { useHover } from 'shared/lib/hooks/useHover';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import {
    Article, ArticlesBlocksType, ArticlesView, ArticleTextBlock,
} from '../../model/types/article';
import cls from './ArticleListItem.module.scss';
import eyeIcon from '../../../../shared/assets/icons/eyeIcon.svg';

interface ArticleListItemProps {
    className?: string;
    article:Article;
    view:ArticlesView
}

export const ArticleListItem = memo(({ className, article, view }: ArticleListItemProps) => {
    const { t } = useTranslation('article');
    const [isHover, bindHover] = useHover();
    const navigate = useNavigate();

    const types = <Text bodyText={article.type.join(', ')} className={cls.types} />;
    const views = (
        <>
            <Text bodyText={String(article.views)} className={cls.views} />
            <Icon Svg={eyeIcon} />
        </>
    );
    const onOpenArticle = useCallback(() => {
        navigate(`${RoutePaths.article_details}${article.id}`);
    }, [article.id, navigate]);

    if (view === ArticlesView.BIG) {
        const textBlock = article.blocks.find((block) => block.type === ArticlesBlocksType.TEXT) as ArticleTextBlock;
        return (
            <div className={classNames(cls.ArticleListItemContainer, {}, [className, cls[view]])}>
                <Card>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text bodyText={article.user.username} className={cls.username} />
                        <Text bodyText={article.createdAt} className={cls.date} />
                    </div>
                    <Text title={article.title} className={cls.title} />
                    {types}
                    <img src={article.img} alt={article.title} className={cls.img} />
                    {textBlock && <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} /> }
                    <div className={cls.footer}>
                        <Button onClick={onOpenArticle} theme={ButtonTheme.OUTLINE}>
                            {t('Read more...')}
                        </Button>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }
    return (
        <div {...bindHover} className={classNames(cls.ArticleListItemContainer, {}, [className, cls[view]])}>
            <Card onClick={onOpenArticle}>
                <div className={cls.imageWrapper}>
                    <img src={article.img} alt={article.title} className={cls.img} />
                    <Text bodyText={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text title={article.title} className={cls.title} />
            </Card>
        </div>
    );
});
