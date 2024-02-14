import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Currency } from '../../model/consts/consts';

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
    const onChangeCurrencySelectHandler = (value:string) => {
        onChange?.(value as Currency);
    };

    return (
        <ListBox
            value={value ?? ''}
            defaultValue={t('Your currency')}
            onChange={onChangeCurrencySelectHandler}
            items={currencyOptionsArr}
            className={classNames('', {}, [className])}
            readonly={readonly}
            direction="top right"
            label={t('Your currency')}
        />
    );
});
