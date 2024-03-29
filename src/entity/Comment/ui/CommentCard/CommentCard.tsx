import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Text } from '@/shared/ui/Text/Text';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { RoutePaths } from '@/shared/config/routeConfig/routeConfig';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string,
    comment?:Comment,
    isLoading?:boolean
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <VStack
                max
                gap="8"
                className={classNames(cls.CommentCardContainer, {}, [className, cls.loading])}
            >
                <HStack
                    gap="16"
                    className={cls.header}
                    align="center"
                >
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
            max
            gap="8"
            className={classNames(cls.CommentCardContainer, {}, [className])}
        >
            <AppLink to={`${RoutePaths.profile}/${comment.user.id}`} className={cls.header}>
                {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} />}
                <Text title={comment.user.username} />
            </AppLink>
            <Text title={comment.text} />
        </VStack>
    );
});
