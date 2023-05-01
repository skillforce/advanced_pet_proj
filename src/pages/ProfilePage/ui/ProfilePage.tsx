import React, { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersListSchema } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    fetchProfileData,
    getProfileError,
    getProfileIsLoading,
    getProfileReadOnly,
    profileActions,
    ProfileCard,
    profileReducer,
} from 'entity/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { ProfilePageHeader } from 'pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader';
import { classNames } from 'shared/lib/classNames/classNames';
import { getProfileForm } from 'entity/Profile/model/selectors/getProfileForm/getProfileForm';

const reducers:ReducersListSchema = {
    profile: profileReducer,
};
interface ProfilePageProps {
    className?: string
}

function ProfilePage({ className }:ProfilePageProps) {
    const { t } = useTranslation('profilePage');
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadOnly);
    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    const onChangeFirstName = useCallback((value?:string) => {
        dispatch(profileActions.updateProfile({ firstName: value || '' }));
    }, [dispatch]);
    const onChangeLastName = useCallback((value?:string) => {
        dispatch(profileActions.updateProfile({ lastName: value || '' }));
    }, [dispatch]);
    const onChangeCity = useCallback((value?:string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }));
    }, [dispatch]);
    const onChangeAge = useCallback((value?:string) => {
        if ((/^[0-9]*$/).test(value || '')) dispatch(profileActions.updateProfile({ age: Number(value) || 0 }));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader />
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    readonly={readonly}
                    onChangeFirstName={onChangeFirstName}
                    onChangeLastName={onChangeLastName}
                    onChangeCity={onChangeCity}
                    onChangeAge={onChangeAge}
                />
            </div>
        </DynamicModuleLoader>
    );
}

export default memo(ProfilePage);
