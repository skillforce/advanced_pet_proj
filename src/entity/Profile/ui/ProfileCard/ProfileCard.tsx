import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entity/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from 'entity/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from 'entity/Profile/model/selectors/getProfileError/getProfileError';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string
}

export const ProfileCard = ({ className } : ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={classNames(cls.profileCardContainer, {}, [className])}>
            <div>
                <div className={cls.header}>
                    <Text title={t('Profile')} className={cls.pageTitleLabel} />
                    <Button theme={ButtonTheme.OUTLINE}>
                        {t('Edit')}
                    </Button>
                </div>
                <div className={cls.data}>
                    <Input
                        className={cls.input}
                        value={data?.firstName}
                        placeholder={t('Your name')}
                    />
                    <Input
                        className={cls.input}
                        value={data?.lastName}
                        placeholder={t('Your surname')}
                    />
                </div>
            </div>
        </div>
    );
};
