import React, { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersListSchema } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { fetchProfileData, ProfileCard, profileReducer } from 'entity/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

const reducers:ReducersListSchema = {
    profile: profileReducer,
};
function ProfilePage() {
    const { t } = useTranslation('profilePage');
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div>
                <ProfileCard />
            </div>
        </DynamicModuleLoader>
    );
}

export default memo(ProfilePage);
