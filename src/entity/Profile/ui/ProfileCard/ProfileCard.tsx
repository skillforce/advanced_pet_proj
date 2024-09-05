import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text';
import { Input } from '@/shared/ui/Input';
import { Loader } from '@/shared/ui/Loader';
import { Avatar } from '@/shared/ui/Avatar';
import { Currency, CurrencySelect } from '@/entity/Currency';
import { Country, CountrySelect } from '@/entity/Country';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    readonly?: boolean;
    onChangeLastName?: (value?: string) => void;
    onChangeFirstName?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeUserName?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (value?: Currency) => void;
    onChangeCountry?: (value?: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const {
        className,
        data,
        error,
        isLoading,
        readonly,
        onChangeLastName,
        onChangeFirstName,
        onChangeCity,
        onChangeAge,
        onChangeUserName,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    if (isLoading) {
        return (
            <HStack
                max
                justify="center"
                className={classNames(cls.profileCardContainer, {}, [
                    className,
                    cls.loading,
                ])}
            >
                <Loader />
            </HStack>
        );
    }
    if (error) {
        return (
            <HStack
                max
                justify="center"
                className={classNames(cls.profileCardContainer, {}, [
                    className,
                    cls.error,
                ])}
            >
                <Text
                    title={t('Error was occurred during profile uploading')}
                    bodyText={t('Reload the page, please')}
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                />
            </HStack>
        );
    }

    return (
        <VStack
            gap="16"
            max
            className={classNames(cls.profileCardContainer, mods, [className])}
        >
            <HStack max justify="center">
                {data?.avatar && (
                    <Avatar alt="profilePageAvatarIcon" src={data?.avatar} />
                )}
            </HStack>
            <Input
                readonly={readonly}
                className={cls.input}
                value={data?.firstName}
                onChange={onChangeFirstName}
                placeholder={t('Your name')}
                data-testid="ProfileCard.FirstNameInput"
            />
            <Input
                readonly={readonly}
                className={cls.input}
                value={data?.lastName}
                onChange={onChangeLastName}
                placeholder={t('Your surname')}
                data-testid="ProfileCard.SurnameInput"
            />
            <Input
                readonly={readonly}
                className={cls.input}
                value={data?.age}
                onChange={onChangeAge}
                placeholder={t('Your age')}
            />
            <Input
                readonly={readonly}
                className={cls.input}
                value={data?.city}
                onChange={onChangeCity}
                placeholder={t('Your city')}
            />
            <Input
                readonly={readonly}
                className={cls.input}
                value={data?.userName}
                onChange={onChangeUserName}
                placeholder={t('Your user name')}
            />
            <Input
                readonly={readonly}
                className={cls.input}
                value={data?.avatar}
                onChange={onChangeAvatar}
                placeholder={t('Your avatar')}
            />
            <CurrencySelect
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
            />
            <CountrySelect
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
            />
        </VStack>
    );
};
