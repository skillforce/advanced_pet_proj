import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { CommentCard } from 'entity/Comment/ui/CommentCard/CommentCard';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Loader } from 'shared/ui/Loader/Loader';
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
            {comments?.length && comments.map((comment) => (
                <CommentCard
                    className={cls.comment}
                    comment={comment}
                />
            ))}
            {!comments?.length && <Text title={t('List of comments is empty')} />}
        </div>
    );
});
