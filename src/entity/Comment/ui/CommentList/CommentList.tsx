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
    const fakeComments = ['1', '2', '3'];
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
            {comments?.length === 0 && fakeComments?.map((id) => (
                <CommentCard
                    isLoading
                    key={id}
                    className={cls.comment}
                    comment={{ text: 'id', id, user: { id: '1', username: '1' } }}
                />
            ))}
            {!comments?.length && !isLoading && <Text title={t('List of comments is empty')} />}
        </div>
    );
});
