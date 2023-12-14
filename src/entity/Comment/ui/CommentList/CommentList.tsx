import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { CommentCard } from '../CommentCard/CommentCard';
import cls from './CommentList.module.scss';
import { Comment } from '../../model/types/comment';

interface CommentListProps {
    className?: string
    comments?:Comment[]
    isLoading?:boolean
}

export const CommentList = memo((props: CommentListProps) => {
    const { className, comments, isLoading } = props;
    const { t } = useTranslation('article');
    return (
        <div className={classNames(cls.CommentListContainer, {}, [className])}>
            {comments?.length !== 0 && comments?.map((comment) => (
                <CommentCard
                    key={comment.id}
                    className={cls.comment}
                    isLoading={isLoading}
                    comment={comment}
                />
            ))}

            {!comments?.length && !isLoading && <Text title={t('List of comments is empty')} />}
        </div>
    );
});
