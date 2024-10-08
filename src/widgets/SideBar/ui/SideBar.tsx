import React, { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { VStack } from '@/shared/ui/Stack';
import { getSidebarItems } from '../model/selectors/getSidebarItems';
import { SideBarItem } from './SideBarItem/SideBarItem';
import cls from './SideBar.module.scss';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LanguageSwitcher } from '@/features/LanguageSwitcher';

interface SideBarProps {
    className?: string;
}

export const SideBar = memo(({ className }: SideBarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    const sideBarItemsList = useSelector(getSidebarItems);

    const itemsList = useMemo(
        () =>
            sideBarItemsList.map((item) => (
                <SideBarItem
                    item={item}
                    isAuthOnly={item.authOnly}
                    collapsed={collapsed}
                    key={item.path}
                />
            )),
        [collapsed, sideBarItemsList],
    );
    return (
        <section
            data-testid="sideBar"
            className={classNames(
                cls.sideBarContainer,
                { [cls.collapsed]: collapsed },
                [className],
            )}
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
            <VStack role="navigation" className={cls.links} gap="16">
                {itemsList}
            </VStack>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher className={cls.langSwitcher} />
            </div>
        </section>
    );
});
