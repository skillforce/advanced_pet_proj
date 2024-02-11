import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import {
    Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Icon } from 'shared/ui/Icon/Icon';
import { DynamicModuleLoader, ReducersListSchema } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { HStack, VStack } from 'shared/ui/Stack';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { ArticleBlocks, ArticlesBlocksType } from '../../model/types/article';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import CalendarIcon from '../../../../shared/assets/icons/calendarIcon.svg';
import EyeIcon from '../../../../shared/assets/icons/eyeIcon.svg';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
    className?: string
    id?: string
}

const reducers:ReducersListSchema = {
    articleDetails: articleDetailsReducer,
};

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

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchArticleById(id));
        }
    });

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
                <HStack
                    justify="center"
                    max
                    className={cls.avatarWrapper}
                >
                    <Avatar size={200} src={articleData?.img} className={cls.avatar} />
                </HStack>
                <VStack
                    gap="4"
                    max
                >
                    <Text
                        title={articleData?.title}
                        className={cls.title}
                        size={TextSize.L}
                        bodyText={articleData?.subtitle}
                    />
                    <HStack gap="8" className={cls.articleInfo}>
                        <Icon Svg={EyeIcon} />
                        <Text
                            size={TextSize.M}
                            bodyText={String(articleData?.views || '')}
                        />
                    </HStack>
                    <HStack gap="8" className={cls.articleInfo}>
                        <Icon Svg={CalendarIcon} />
                        <Text
                            size={TextSize.M}
                            bodyText={articleData?.createdAt || ''}
                        />
                    </HStack>
                </VStack>
                {articleData?.blocks.map((block) => renderBlock(block))}
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <VStack gap="16" max className={classNames(cls.ArticleDetailsContainer, {}, [className])}>
                {content}
            </VStack>
        </DynamicModuleLoader>
    );
});
