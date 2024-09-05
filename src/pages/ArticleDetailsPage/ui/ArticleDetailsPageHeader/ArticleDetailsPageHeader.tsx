import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { getArticleDetailsData } from '@/entity/Article';
import { HStack } from '@/shared/ui/Stack';
import { getIsAbleToEditArticle } from '../../model/selectors/article';
import {
    getRouteArticleDetails,
    getRouteArticles,
} from '@/shared/consts/router';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo(
    ({ className }: ArticleDetailsPageHeaderProps) => {
        const { t } = useTranslation('article');
        const navigate = useNavigate();
        const isCanEdit = useSelector(getIsAbleToEditArticle);
        const article = useSelector(getArticleDetailsData);

        const onBackToList = useCallback(() => {
            navigate(getRouteArticles());
        }, [navigate]);

        const onEditArticle = useCallback(() => {
            navigate(getRouteArticleDetails(article?.id ?? ''));
        }, [article?.id, navigate]);

        return (
            <HStack
                max
                justify="between"
                className={classNames('', {}, [className])}
            >
                <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                    {t('Back to list')}
                </Button>
                {isCanEdit && (
                    <Button theme={ButtonTheme.OUTLINE} onClick={onEditArticle}>
                        {t('Edit')}
                    </Button>
                )}
            </HStack>
        );
    },
);
