import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ListBox } from '@/shared/ui/Popups';
import { Country } from '../../model/consts/consts';

interface CountrySelectProps {
    className?: string;
    readonly?: boolean;
    onChange?: (value: Country) => void;
    value?: string;
}
const countryOptionsArr = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Kazahstan, content: Country.Kazahstan },
    { value: Country.Ukraine, content: Country.Ukraine },
];
export const CountrySelect = memo(
    ({ className, readonly, onChange, value }: CountrySelectProps) => {
        const { t } = useTranslation('profile');

        const onChangeCountrySelectHandler = (value: string) => {
            onChange?.(value as Country);
        };

        return (
            <ListBox
                value={value ?? ''}
                defaultValue={t('Your country')}
                onChange={onChangeCountrySelectHandler}
                items={countryOptionsArr}
                className={classNames('', {}, [className])}
                readonly={readonly}
                direction="top right"
                label={t('Your country')}
            />
        );
    },
);
