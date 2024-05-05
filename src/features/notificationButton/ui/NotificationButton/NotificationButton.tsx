import React, { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Popover } from '@/shared/ui/Popups';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import notificationIcon from '@/shared/assets/icons/notification.svg';
import { NotificationList } from '@/entity/Notification';
import { Drawer } from '@/shared/ui/Drawer';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string
}

export const NotificationButton = memo(({ className }: NotificationButtonProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const onOpen = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = (
        <Button theme={ButtonTheme.CLEAR} onClick={onOpen}>
            <Icon inverted Svg={notificationIcon} />
        </Button>
    );

    return (
        <div>
            <div>
                <BrowserView>
                    <Popover
                        direction="bottom left"
                        className={classNames(cls.NotificationButtonContainer, {}, [className])}
                        trigger={trigger}
                    >
                        <NotificationList className={cls.notifications} />
                    </Popover>
                </BrowserView>
                <MobileView>
                    {trigger}
                    <Drawer onClose={onClose} isOpen={isOpen}>
                        <NotificationList />
                    </Drawer>
                </MobileView>
            </div>
        </div>

    );
});
