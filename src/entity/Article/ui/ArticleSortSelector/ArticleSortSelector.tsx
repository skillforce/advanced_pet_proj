import React, { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select, SelectOption } from '@/shared/ui/Select/Select';

import { SortOrder } from '@/shared/types';
import { ArticleSortField } from '../../model/consts/consts';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    className?: string
    sort:ArticleSortField;
    order:SortOrder;
    onChangeOrder:(newOrder:SortOrder)=>void
    onChangeSort:(newSort:ArticleSortField)=>void

}

export const ArticleSortSelector = memo(({
    className, onChangeSort, sort, onChangeOrder, order,
}: ArticleSortSelectorProps) => {
    const { t } = useTranslation('article');
    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => ([
        {
            value: 'asc',
            content: t('Ascending'),
        },
        {
            value: 'desc',
            content: t('Descending'),
        },
    ]), [t]);

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => ([
        {
            value: ArticleSortField.CREATED,
            content: t('Created date'),
        },
        {
            value: ArticleSortField.TITLE,
            content: t('Title'),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('Views'),
        },
    ]), [t]);

    return (
        <div className={classNames(cls.ArticleSortSelectorContainer, {}, [className])}>
            <Select<ArticleSortField>
                onChange={onChangeSort}
                value={sort}
                options={sortFieldOptions}
                label={t('Sort by')}
            />
            <Select<SortOrder>
                onChange={onChangeOrder}
                value={order}
                options={orderOptions}
                label={t('Order')}
            />
        </div>
    );
});
