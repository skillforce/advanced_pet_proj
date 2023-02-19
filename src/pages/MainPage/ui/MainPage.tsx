import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';

function MainPage() {
    const { t } = useTranslation('mainPage');
    return (
        <div>
            {t('Main page')}
            <BugButton />
        </div>
    );
}

export default MainPage;
