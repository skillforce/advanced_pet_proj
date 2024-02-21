import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
    className?: string
}

export const NotificationItem = memo(({ className }: NotificationItemProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.NotificationItemContainer, {}, [className])} />
    );
});
