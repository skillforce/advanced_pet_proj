import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, CardTheme } from '@/shared/ui/Card';
import { Text } from '@/shared/ui/Text';
import { Notifications } from '../../model/types/notifications';
import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
    className?: string;
    item: Notifications;
}

export const NotificationItem = memo(
    ({ className, item }: NotificationItemProps) => {
        const { t } = useTranslation();
        const content = (
            <Card
                theme={CardTheme.OUTLINED}
                className={classNames(cls.NotificationItemContainer, {}, [
                    className,
                ])}
            >
                <Text title={item.title} bodyText={item.description} />
            </Card>
        );
        if (item?.href) {
            return (
                <a
                    className={cls.link}
                    target="_blank"
                    href={item.href}
                    rel="noreferrer"
                >
                    {content}
                </a>
            );
        }

        return content;
    },
);
