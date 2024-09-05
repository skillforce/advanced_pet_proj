import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ProfileCard } from '@/entity/Profile';
import { Currency } from '@/entity/Currency';
import { Country } from '@/entity/Country';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { Text, TextTheme } from '@/shared/ui/Text';
import {
    DynamicModuleLoader,
    ReducersListSchema,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { VStack } from '@/shared/ui/Stack';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';
import { ValidateProfileError } from '../../model/consts/consts';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getValidateProfileErrors } from '../../model/selectors/getValidateProfileErrors/getValidateProfileErrors';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';

interface EditableProfileCardProps {
    className?: string;
    id?: string;
}
const reducers: ReducersListSchema = {
    profile: profileReducer,
};

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const { className, id } = props;
    const { t } = useTranslation('profile');
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

    const onChangeFirstName = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ firstName: value || '' }));
        },
        [dispatch],
    );
    const onChangeLastName = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ lastName: value || '' }));
        },
        [dispatch],
    );
    const onChangeCity = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ city: value || '' }));
        },
        [dispatch],
    );
    const onChangeUserName = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ userName: value || '' }));
        },
        [dispatch],
    );
    const onChangeAvatar = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ avatar: value || '' }));
        },
        [dispatch],
    );
    const onChangeCurrency = useCallback(
        (value?: Currency) => {
            dispatch(profileActions.updateProfile({ currency: value }));
        },
        [dispatch],
    );
    const onChangeCountry = useCallback(
        (value?: Country) => {
            dispatch(profileActions.updateProfile({ country: value }));
        },
        [dispatch],
    );
    const onChangeAge = useCallback(
        (value?: string) => {
            if (/^[0-9]*$/.test(value || ''))
                dispatch(
                    profileActions.updateProfile({ age: Number(value) || 0 }),
                );
        },
        [dispatch],
    );
    const validateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t('Server error'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Incorrect country value'),
        [ValidateProfileError.NO_DATA]: t('No data'),
        [ValidateProfileError.INCORRECT_AGE]: t('Incorrect age value'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t(
            'Incorrect user name value',
        ),
    };

    return (
        <DynamicModuleLoader reducers={reducers}>
            <VStack gap="8" max className={classNames('', {}, [className])}>
                <EditableProfileCardHeader />
                {validateProfileErrors?.length &&
                    validateProfileErrors.map((error) => (
                        <Text
                            key={error}
                            bodyText={validateErrorTranslates[error]}
                            theme={TextTheme.ERROR}
                            data-testid="EditableProfileCard.Error"
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
            </VStack>
        </DynamicModuleLoader>
    );
});
