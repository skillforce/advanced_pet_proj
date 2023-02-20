import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LanguageSwitcher } from 'shared/ui/LanguageSwitcher/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
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
            <button data-testid="sideBarToggleBtn" type="button" onClick={onToggle}>{t('toggle')}</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher className={cls.langSwitcher} />
            </div>

        </div>
    );
}
