import React from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './NavBar.module.scss'
import {AppLink, AppLinksTheme} from 'shared/ui/AppLink/AppLink';
import {ThemeSwitcher} from 'shared/ui/ThemeSwitcher';

interface NavBarProps {
    className?: string
}

export const NavBar = ({className}:NavBarProps) => {
    return (
        <div className={classNames(cls.navBarContainer,{},[className])}>
            <ThemeSwitcher/>
            <div className={cls.links}>
                <AppLink theme={AppLinksTheme.SECONDARY} to={'/'}>Main</AppLink>
                <AppLink theme={AppLinksTheme.SECONDARY} to={'/about'}>About</AppLink>
            </div>

        </div>
    );
};