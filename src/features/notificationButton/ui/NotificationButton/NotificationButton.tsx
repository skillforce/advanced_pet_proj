import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Popover } from 'shared/ui/Popups';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import notificationIcon from 'shared/assets/icons/notification.svg';
import { NotificationList } from 'entity/Notification';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string
}

export const NotificationButton = memo(({ className }: NotificationButtonProps) => (
    <Popover
        direction="bottom left"
        className={classNames(cls.NotificationButtonContainer, {}, [className])}
        trigger={(
            <Button theme={ButtonTheme.CLEAR}>
                <Icon inverted Svg={notificationIcon} />
            </Button>
        )}
    >
        <NotificationList className={cls.notifications} />
    </Popover>
));
