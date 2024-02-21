import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUserName';
import { useDispatch, useSelector } from 'react-redux';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from 'entity/User';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { AppLink, AppLinksTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { HStack } from 'shared/ui/Stack';
import { Icon } from 'shared/ui/Icon/Icon';
import { Dropdown, Popover } from 'shared/ui/Popups';
import notificationIcon from '../../../shared/assets/icons/notification.svg';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string
}

export const NavBar = memo(({ className }:NavBarProps) => {
    const userAuthData = useSelector(getUserAuthData);
    const dispatch = useDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const isAdminPanelAvailable = isManager || isAdmin;

    const { t } = useTranslation();

    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    const onOpenModal = useCallback(
        () => setIsAuthModalOpen(true),
        [setIsAuthModalOpen],
    );
    const onLogOut = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const onCloseModal = useCallback(
        () => setIsAuthModalOpen(false),
        [setIsAuthModalOpen],
    );
    if (userAuthData) {
        return (
            <header className={classNames(cls.navBarContainer, {}, [className])}>
                <div className={cls.logoBlock}>
                    <Text className={cls.appName} title={t('Vpname pet app')} theme={TextTheme.INVERTED} />
                    <AppLink to={RoutePaths.article_create} theme={AppLinksTheme.PRIMARY}>
                        {t('Create a new article')}
                    </AppLink>
                </div>
                <HStack gap="16" className={cls.actions}>
                    <Popover
                        direction="bottom left"
                        trigger={(
                            <Button theme={ButtonTheme.CLEAR}>
                                <Icon inverted Svg={notificationIcon} />
                            </Button>
                        )}
                    >
                        {t('dscsdcsdcsdcsdcs')}
                    </Popover>
                    <Dropdown
                        className={cls.dropdown}
                        direction="bottom left"
                        items={[
                            ...(isAdminPanelAvailable ? [
                                {
                                    content: t('Admin panel'),
                                    href: RoutePaths.admin_panel,
                                },
                            ] : []),
                            {
                                content: t('Profile'),
                                href: `${RoutePaths.profile}/${userAuthData.id}`,
                            },
                            {
                                content: t('Log out'),
                                onClick: onLogOut,
                            },
                        ]}
                        trigger={<Avatar size={30} src={userAuthData.avatar} />}
                    />
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
