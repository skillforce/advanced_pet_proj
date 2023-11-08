import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUserName';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entity/User';

import { Text, TextTheme } from 'shared/ui/Text/Text';
import { AppLink, AppLinksTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string
}

export const NavBar = memo(({ className }:NavBarProps) => {
    const userAuthData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

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
                <Button theme={ButtonTheme.CLEAR_HOVER} onClick={onLogOut}>{t('Log out')}</Button>
            </header>
        );
    }

    return (
        <header className={classNames(cls.navBarContainer, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR_HOVER} onClick={onOpenModal}>{t('Log In')}</Button>
            <LoginModal onClose={onCloseModal} isOpen={isAuthModalOpen} />
        </header>
    );
});
