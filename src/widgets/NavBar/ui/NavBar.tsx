import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUserName';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entity/User';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { AppLink, AppLinksTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import { HStack } from 'shared/ui/Stack';
import { NotificationButton } from 'features/notificationButton';
import { AvatarDropdown } from 'features/avatarDropdown';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import { NotificationList } from 'entity/Notification';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string
}

export const NavBar = memo(({ className }:NavBarProps) => {
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    const userAuthData = useSelector(getUserAuthData);

    const { t } = useTranslation();

    const onOpenModal = useCallback(
        () => setIsAuthModalOpen(true),
        [setIsAuthModalOpen],
    );

    const onCloseModal = useCallback(
        () => setIsAuthModalOpen(false),
        [setIsAuthModalOpen],
    );

    if (userAuthData) {
        return (
            <header className={classNames(cls.navBarContainer, {}, [className])}>
                <HStack align="center" className={cls.logoBlock}>
                    <Text className={cls.appName} title={t('Vpname pet app')} theme={TextTheme.INVERTED} />
                    <AppLink to={RoutePaths.article_create} theme={AppLinksTheme.PRIMARY}>
                        {t('Create a new article')}
                    </AppLink>
                </HStack>
                <HStack gap="16" className={cls.actions}>
                    <NotificationButton />
                    <AvatarDropdown />
                </HStack>

            </header>
        );
    }

    return (
        <header className={classNames(cls.navBarContainer, {}, [className])}>
            <Text className={cls.appName} title={t('Vpname pet app')} theme={TextTheme.INVERTED} />
            <Button theme={ButtonTheme.CLEAR_HOVER} onClick={onOpenModal}>{t('Log In')}</Button>
            <LoginModal onClose={onCloseModal} isOpen={isAuthModalOpen} />
        </header>
    );
});
