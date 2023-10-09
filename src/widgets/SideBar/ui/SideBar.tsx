import React, { memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LanguageSwitcher } from 'shared/ui/LanguageSwitcher/LanguageSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../model/selectors/getSidebarItems';
import { SideBarItem } from './SideBarItem/SideBarItem';
import cls from './SideBar.module.scss';

interface SideBarProps {
    className?: string
}

export const SideBar = memo(({ className }: SideBarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    const sideBarItemsList = useSelector(getSidebarItems);
    return (
        <menu
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
                {sideBarItemsList.map((item) => (
                    <SideBarItem
                        item={item}
                        isAuthOnly={item.authOnly}
                        collapsed={collapsed}
                        key={item.path}
                    />
                ))}
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher className={cls.langSwitcher} />
            </div>

        </menu>
    );
});
