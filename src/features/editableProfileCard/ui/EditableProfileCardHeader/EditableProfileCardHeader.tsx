import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getUserAuthData } from 'entity/User';
import { HStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly';

interface EditableProfileCardHeaderProps {
    className?: string
}

export const EditableProfileCardHeader = memo((props: EditableProfileCardHeaderProps) => {
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
        <HStack
            max
            justify="between"
            className={classNames('', {}, [className])}
        >
            <Text title={t('Profile')} />
            {isCanEdit && (
                <div>
                    {readonly ? (
                        <Button
                            theme={ButtonTheme.OUTLINE}
                            onClick={onEdit}
                            data-testid="EditableProfileCardHeader.EditButton"
                        >
                            {t('Edit')}
                        </Button>
                    )
                        : (
                            <HStack gap="8">
                                <Button
                                    theme={ButtonTheme.OUTLINE}
                                    onClick={onSave}
                                    data-testid="EditableProfileCardHeader.SaveButton"
                                >
                                    {t('Save')}
                                </Button>
                                <Button
                                    theme={ButtonTheme.OUTLINE_RED}
                                    onClick={onCancel}
                                    data-testid="EditableProfileCardHeader.CancelButton"
                                >
                                    {t('Cancel')}
                                </Button>
                            </HStack>
                        )}
                </div>
            )}

        </HStack>
    );
});
