import React, {
    memo, useCallback, useEffect, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUserName';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entity/User';

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
            <div className={classNames(cls.navBarContainer, {}, [className])}>
                <Button theme={ButtonTheme.CLEAR_HOVER} onClick={onLogOut}>{t('Log out')}</Button>
            </div>
        );
    }

    return (
        <header className={classNames(cls.navBarContainer, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR_HOVER} onClick={onOpenModal}>{t('Log In')}</Button>
            <LoginModal onClose={onCloseModal} isOpen={isAuthModalOpen} />
        </header>
    );
});
