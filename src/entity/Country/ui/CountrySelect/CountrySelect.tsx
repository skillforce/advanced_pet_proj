import React, { memo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { Country } from '../../model/types/country';
import cls from './CountrySelect.module.scss';

interface CountrySelectProps {
    className?: string,
    readonly?:boolean,
    onChange?:(value:Country)=>void,
    value?:string
}
const countryOptionsArr = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Kazahstan, content: Country.Kazahstan },
    { value: Country.Ukraine, content: Country.Ukraine },
];
export const CountrySelect = memo(({
    className, readonly, onChange, value,
} : CountrySelectProps) => {
    const { t } = useTranslation('profile');

    const mods:Mods = {
        [cls.readonly]: readonly,
    };
    const onChangeCountrySelectHandler = (value:string) => {
        onChange?.(value as Country);
    };

    return (
        <Select
            value={value}
            onChange={onChangeCountrySelectHandler}
            disabled={readonly}
            className={classNames(cls.countrySelectContainer, mods, [className])}
            label={t('Your country')}
            options={countryOptionsArr}
        />
    );
});
