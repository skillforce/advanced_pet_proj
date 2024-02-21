import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NotificationList.module.scss';

interface NotificationListProps {
    className?: string
}

export const NotificationList = memo(({ className }: NotificationListProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.NotificationListContainer, {}, [className])} />
    );
});
