import React, { memo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from '../../model/types/currency';
import cls from './CurrencySelect.module.scss';

interface CurrencySelectProps {
    className?: string,
    readonly?:boolean,
    onChange?:(value:Currency)=>void,
    value?:string
}
const currencyOptionsArr = [
    { value: Currency.BYN, content: Currency.BYN },
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.USD, content: Currency.USD },
];
export const CurrencySelect = memo(({
    className, readonly, onChange, value,
} : CurrencySelectProps) => {
    const { t } = useTranslation('profile');

    const mods:Mods = {
        [cls.readonly]: readonly,
    };
    const onChangeCurrencySelectHandler = (value:string) => {
        onChange?.(value as Currency);
    };

    return (
        <Select
            value={value}
            onChange={onChangeCurrencySelectHandler}
            disabled={readonly}
            className={classNames(cls.currencySelectContainer, mods, [className])}
            label={t('Your currency')}
            options={currencyOptionsArr}
        />
    );
});
