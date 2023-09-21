import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import {
    getProfileData, getProfileReadOnly, profileActions, updateProfileData,
} from 'entity/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getUserAuthData } from 'entity/User';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string
}

export const ProfilePageHeader = memo((props : ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');
    const { className } = props;
    const readonly = useSelector(getProfileReadOnly);
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);

    const isCanEdit = authData?.id === profileData?.id;

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);
    const onCancel = useCallback(() => {
        dispatch(profileActions.cancelEditing());
    }, [dispatch]);
    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.profilePageHeaderContainer, {}, [className])}>
            <Text title={t('Profile')} className={cls.pageTitleLabel} />
            {isCanEdit && (
                <div className={cls.btnsWrapper}>
                    {readonly ? (
                        <Button theme={ButtonTheme.OUTLINE} onClick={onEdit}>
                            {t('Edit')}
                        </Button>
                    )
                        : (
                            <div className={cls.editBtnContainer}>
                                <Button theme={ButtonTheme.OUTLINE} onClick={onSave}>
                                    {t('Save')}
                                </Button>
                                <Button theme={ButtonTheme.OUTLINE_RED} onClick={onCancel}>
                                    {t('Cancel')}
                                </Button>
                            </div>
                        )}
                </div>
            )}

        </div>
    );
});
