import React, { memo, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from 'entity/Article';
import {
    Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleCodeBlockComponent } from 'entity/Article/ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from 'entity/Article/ui/ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from 'entity/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleBlocks, ArticlesBlocksType } from '../../model/types/article';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import CalendarIcon from '../../../../shared/assets/icons/calendarIcon.svg';
import EyeIcon from '../../../../shared/assets/icons/eyeIcon.svg';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
    className?: string
    id: string
}

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const articleData = useSelector(getArticleDetailsData);
    const isError = useSelector(getArticleDetailsError);

    const renderBlock = useCallback((block: ArticleBlocks) => {
        switch (block.type) {
        case ArticlesBlocksType.IMAGE: {
            return (
                <ArticleImageBlockComponent
                    key={block.id}
                    block={block}
                    className={cls.articleContainer}
                />
            );
        }
        case ArticlesBlocksType.CODE: {
            return (
                <ArticleCodeBlockComponent
                    key={block.id}
                    block={block}
                    className={cls.articleContainer}
                />
            );
        }
        case ArticlesBlocksType.TEXT: {
            return (
                <ArticleTextBlockComponent
                    className={cls.articleContainer}
                    block={block}
                    key={block.id}
                />
            );
        }
        default:
            return null;
        }
    }, []);

    useEffect(() => {
        if (id) {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} borderRadius="50%" />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </>
        );
    } else if (isError) {
        content = (
            <Text
                align={TextAlign.CENTER}
                title={t('Article doesn\'t exist')}
                theme={TextTheme.ERROR}
            />
        );
    } else {
        content = (
            <>
                <div className={cls.avatarWrapper}>
                    <Avatar size={200} src={articleData?.img} className={cls.avatar} />
                </div>
                <Text
                    title={articleData?.title}
                    className={cls.title}
                    size={TextSize.L}
                    bodyText={articleData?.subtitle}
                />
                <div className={cls.articleInfo}>
                    <Icon Svg={EyeIcon} />
                    <Text
                        size={TextSize.M}
                        bodyText={String(articleData?.views || '')}
                    />
                </div>
                <div className={cls.articleInfo}>
                    <Icon Svg={CalendarIcon} />
                    <Text
                        size={TextSize.M}
                        bodyText={articleData?.createdAt || ''}
                    />
                </div>
                {articleData?.blocks.map((block) => renderBlock(block))}
            </>
        );
    }

    return (
        <div className={classNames(cls.ArticleDetailsContainer, {}, [className])}>
            {content}
        </div>
    );
});