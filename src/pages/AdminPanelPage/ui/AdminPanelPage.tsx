import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

function AdminPanelPage() {
    const { t } = useTranslation('adminPanelPage');
    return (
        <Page>
            {t('Admin panel page')}
        </Page>
    );
}

export default memo(AdminPanelPage);
