import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

function ProfilePage() {
    const { t } = useTranslation('profilePage');

    return (
        <div>
            {t('Profile page')}
        </div>
    );
}

export default memo(ProfilePage);
