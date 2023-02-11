import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinksTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string
}

export function NavBar({ className }:NavBarProps) {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.navBarContainer, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinksTheme.SECONDARY} to="/">{t('Main')}</AppLink>
                <AppLink theme={AppLinksTheme.SECONDARY} to="/about">{t('About')}</AppLink>
            </div>

        </div>
    );
}
