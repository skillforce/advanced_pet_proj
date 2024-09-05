import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Text } from '@/shared/ui/Text';
import { Skeleton } from '@/shared/ui/Skeleton';
import { AppLink } from '@/shared/ui/AppLink';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';
import { getRouteProfile } from '@/shared/consts/router';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <VStack
                data-testid="CommentCard.Loading"
                max
                gap="8"
                className={classNames(cls.CommentCardContainer, {}, [
                    className,
                    cls.loading,
                ])}
            >
                <HStack gap="16" className={cls.header} align="center">
                    <Skeleton width={30} height={30} borderRadius="50%" />
                    <Skeleton width={150} height={30} />
                </HStack>
                <Skeleton width="100%" height={30} />
            </VStack>
        );
    }
    if (!comment) {
        return null;
    }

    return (
        <VStack
            data-testid="CommentCard.Content"
            max
            gap="8"
            className={classNames(cls.CommentCardContainer, {}, [className])}
        >
            <AppLink
                to={getRouteProfile(comment.user.id)}
                className={cls.header}
            >
                {comment.user.avatar && (
                    <Avatar size={30} src={comment.user.avatar} />
                )}
                <Text title={comment.user.username} />
            </AppLink>
            <Text title={comment.text} />
        </VStack>
    );
});
