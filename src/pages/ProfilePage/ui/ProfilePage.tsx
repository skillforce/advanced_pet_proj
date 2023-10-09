import React, { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersListSchema } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    fetchProfileData,
    getProfileError,
    getProfileIsLoading,
    getProfileReadOnly,
    getValidateProfileErrors,
    profileActions,
    ProfileCard,
    profileReducer,
} from 'entity/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { ProfilePageHeader } from 'pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader';
import { classNames } from 'shared/lib/classNames/classNames';
import { getProfileForm } from 'entity/Profile/model/selectors/getProfileForm/getProfileForm';
import { Currency } from 'entity/Currency';
import { Country } from 'entity/Country';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ValidateProfileError } from 'entity/Profile/model/types/profile';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useParams } from 'react-router-dom';
import { Page } from 'shared/ui/Page/Page';

const reducers:ReducersListSchema = {
    profile: profileReducer,
};
interface ProfilePageProps {
    className?: string
}

function ProfilePage({ className }:ProfilePageProps) {
    const { t } = useTranslation('profile');
    const queryParams = useParams<{id:string}>();
    const { id } = queryParams;
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadOnly);
    const validateProfileErrors = useSelector(getValidateProfileErrors);

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    const onChangeFirstName = useCallback((value?:string) => {
        dispatch(profileActions.updateProfile({ firstName: value || '' }));
    }, [dispatch]);
    const onChangeLastName = useCallback((value?:string) => {
        dispatch(profileActions.updateProfile({ lastName: value || '' }));
    }, [dispatch]);
    const onChangeCity = useCallback((value?:string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }));
    }, [dispatch]);
    const onChangeUserName = useCallback((value?:string) => {
        dispatch(profileActions.updateProfile({ userName: value || '' }));
    }, [dispatch]);
    const onChangeAvatar = useCallback((value?:string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }));
    }, [dispatch]);
    const onChangeCurrency = useCallback((value?:Currency) => {
        dispatch(profileActions.updateProfile({ currency: value }));
    }, [dispatch]);
    const onChangeCountry = useCallback((value?:Country) => {
        dispatch(profileActions.updateProfile({ country: value }));
    }, [dispatch]);
    const onChangeAge = useCallback((value?:string) => {
        if ((/^[0-9]*$/).test(value || '')) dispatch(profileActions.updateProfile({ age: Number(value) || 0 }));
    }, [dispatch]);
    const validateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t('Server error'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Incorrect country value'),
        [ValidateProfileError.NO_DATA]: t('No data'),
        [ValidateProfileError.INCORRECT_AGE]: t('Incorrect age value'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Incorrect user name value'),
    };

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page className={classNames('', {}, [className])}>
                <ProfilePageHeader />

                {validateProfileErrors?.length
                 && validateProfileErrors.map((error) => (
                     <Text
                         key={error}
                         bodyText={validateErrorTranslates[error]}
                         theme={TextTheme.ERROR}
                     />
                 ))}

                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    readonly={readonly}
                    onChangeFirstName={onChangeFirstName}
                    onChangeLastName={onChangeLastName}
                    onChangeCity={onChangeCity}
                    onChangeAge={onChangeAge}
                    onChangeUserName={onChangeUserName}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </Page>
        </DynamicModuleLoader>
    );
}

export default memo(ProfilePage);
