import React from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string
    data?:Profile
    error?:string
    isLoading?:boolean
    readonly?:boolean
    onChangeLastName?:(value?:string)=>void
    onChangeFirstName?:(value?:string)=>void
    onChangeCity?:(value?:string)=>void
    onChangeAge?:(value?:string)=>void
    onChangeUserName?:(value?:string)=>void
    onChangeAvatar?:(value?:string)=>void
}

export const ProfileCard = (props : ProfileCardProps) => {
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
    } = props;

    const mods:Mods = {
        [cls.editing]: !readonly,
    };

    if (isLoading) {
        return (
            <div className={classNames(cls.profileCardContainer, {}, [className, cls.loading])}>
                <Loader />
            </div>
        );
    }
    if (error) {
        return (
            <div className={classNames(cls.profileCardContainer, {}, [className, cls.error])}>
                <Text
                    title={t('Error was occurred during profile uploading')}
                    bodyText={t('Reload the page, please')}
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls.profileCardContainer, mods, [className])}>
            <div className={cls.AvatarWrapper}>
                {data?.avatar && (
                    <Avatar
                        alt="profilePageAvatarIcon"
                        src={data?.avatar}
                    />
                )}
            </div>
            <div className={cls.data}>
                <Input
                    readonly={readonly}
                    className={cls.input}
                    value={data?.firstName}
                    onChange={onChangeFirstName}
                    placeholder={t('Your name')}
                />
                <Input
                    readonly={readonly}
                    className={cls.input}
                    value={data?.lastName}
                    onChange={onChangeLastName}
                    placeholder={t('Your surname')}
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
            </div>
        </div>
    );
};
