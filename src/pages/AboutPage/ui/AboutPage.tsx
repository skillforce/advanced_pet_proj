import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'entity/Counter';
import { Page } from 'widgets/Page/Page';

function AboutPage() {
    const { t } = useTranslation('aboutPage');
    return (
        <Page>
            {t('About page')}
            <Counter />
        </Page>
    );
}

export default memo(AboutPage);
