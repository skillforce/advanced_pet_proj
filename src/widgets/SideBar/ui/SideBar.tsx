import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LanguageSwitcher } from 'shared/ui/LanguageSwitcher/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinksTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import MainPageIcon from '../../../shared/assets/icons/mainPageIcon.svg';
import AboutPageIcon from '../../../shared/assets/icons/aboutPageIcon.svg';
import cls from './SideBar.module.scss';

interface SideBarProps {
    className?: string
}

export function SideBar({ className }: SideBarProps) {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div
            data-testid="sideBar"
            className={classNames(cls.sideBarContainer, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                className={cls.toggleCollapseBtn}
                onClick={onToggle}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                data-testid="sideBarToggleBtn"
                type="button"
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.links}>
                <AppLink
                    className={cls.link}
                    theme={AppLinksTheme.SECONDARY}
                    to={RoutePaths.main}
                >
                    <MainPageIcon className={cls.linkIcon} />
                    <span>
                        {t('Main')}
                    </span>
                </AppLink>
                <AppLink
                    className={cls.link}
                    theme={AppLinksTheme.SECONDARY}
                    to={RoutePaths.about}
                >
                    <AboutPageIcon className={cls.linkIcon} />
                    <span>{t('About')}</span>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher className={cls.langSwitcher} />
            </div>

        </div>
    );
}
