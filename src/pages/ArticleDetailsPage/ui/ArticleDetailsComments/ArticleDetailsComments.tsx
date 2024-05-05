import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/Text';
import { AddCommentForm } from '@/features/addCommentForm';
import { CommentList } from '@/entity/Comment';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { VStack } from '@/shared/ui/Stack';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleComments } from '../../model/slices/ArticleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import cls from './ArticleDetailsComments.module.scss';

interface ArticleDetailsCommentsProps {
    className?: string
    id?:string
}

export const ArticleDetailsComments = memo(({ className, id }: ArticleDetailsCommentsProps) => {
    const { t } = useTranslation('article');
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchCommentsByArticleId(id));
        }
    });

    const onSendComment = useCallback((newCommentText:string) => {
        dispatch(addCommentForArticle(newCommentText));
    }, [dispatch]);

    return (
        <VStack gap="16" max className={classNames('', {}, [className])}>
            <Text
                size={TextSize.L}
                title={t('Comments')}
                className={cls.commentsContainerTitle}
            />
            <AddCommentForm onSendComment={onSendComment} />
            <CommentList isLoading={commentsIsLoading} comments={comments} />
        </VStack>
    );
});
