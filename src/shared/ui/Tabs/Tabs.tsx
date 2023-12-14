import React, { ReactNode, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card, CardTheme } from '../Card/Card';
import cls from './Tabs.module.scss';

export interface TabItem<T extends string> {
    value: T
    content:ReactNode
}
interface TabsProps<T extends string> {
    className?: string
    tabs: TabItem<T>[];
    value: T;
    onTabClick:(tab: TabItem<T>)=>void
}

export const Tabs = <T extends string> ({
    className, tabs, value, onTabClick,
}: TabsProps<T>) => {
    const onTabClickHandler = useCallback((tabItem:TabItem<T>) => () => {
        onTabClick(tabItem);
    }, [onTabClick]);
    return (
        <div className={classNames(cls.TabsContainer, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    className={cls.tab}
                    key={tab.value}
                    theme={tab.value === value ? CardTheme.OUTLINED : CardTheme.NORMAL}
                    onClick={onTabClickHandler(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
};
