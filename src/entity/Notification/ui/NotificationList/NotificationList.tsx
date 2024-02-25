import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { VStack } from 'shared/ui/Stack';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { Notifications } from '../../model/types/notifications';
import cls from './NotificationList.module.scss';
import { useNotifications } from '../../api/notificationApi';

interface NotificationListProps {
    className?: string
}

export const NotificationList = memo(({ className }: NotificationListProps) => {
    const { t } = useTranslation();
    const { data, isLoading } = useNotifications(null, { pollingInterval: 5000 });

    if (isLoading) {
        return (
            <VStack
                gap="16"
                className={classNames(cls.NotificationListContainer, {}, [className])}
            >
                <Skeleton width="100%" borderRadius="8px" height="80px" />
                <Skeleton width="100%" borderRadius="8px" height="80px" />
                <Skeleton width="100%" borderRadius="8px" height="80px" />
            </VStack>
        );
    }

    return (
        <VStack
            gap="16"
            className={classNames(cls.NotificationListContainer, {}, [className])}
        >
            {data?.map((notification:Notifications) => (
                <NotificationItem
                    key={notification.id}
                    item={notification}
                />
            ))}
        </VStack>
    );
});
