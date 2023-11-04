import React, { memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { ArticlesType } from 'entity/Article';
import cls from './ArticleTypeTabs.module.scss';

interface ArticleTypeTabsProps {
    className?: string
    value:ArticlesType
    onChangeType:(newTab:TabItem<ArticlesType>)=>void
}

export const ArticleTypeTabs = memo(({ className, value, onChangeType }: ArticleTypeTabsProps) => {
    const { t } = useTranslation();
    const typeTabs = useMemo<TabItem<ArticlesType>[]>(() => [
        {
            value: ArticlesType.ALL,
            content: t('All'),
        },
        {
            value: ArticlesType.IT,
            content: t('IT'),
        },
        {
            value: ArticlesType.SCIENCE,
            content: t('Science'),
        },
        {
            value: ArticlesType.ECONOMICS,
            content: t('Economics'),
        },

    ], [t]);

    return (
        <Tabs<ArticlesType>
            className={classNames('', { }, [className])}
            tabs={typeTabs}
            value={value}
            onTabClick={onChangeType}
        />
    );
});
