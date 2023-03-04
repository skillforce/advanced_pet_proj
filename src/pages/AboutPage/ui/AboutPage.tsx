import React from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'entity/Counter';

function AboutPage() {
    const { t } = useTranslation('aboutPage');
    return (
        <div>
            {t('About page')}
            <Counter />
        </div>
    );
}

export default AboutPage;
