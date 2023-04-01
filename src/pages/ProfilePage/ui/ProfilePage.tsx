import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersListSchema } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entity/Profile';

const reducers:ReducersListSchema = {
    profile: profileReducer,
};
function ProfilePage() {
    const { t } = useTranslation('profilePage');

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div>
                {t('Profile page')}
            </div>
        </DynamicModuleLoader>
    );
}

export default memo(ProfilePage);
