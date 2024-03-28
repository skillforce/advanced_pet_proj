import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from '@/app/providers/ErrorBoundary';
import { Page } from '@/widgets/Page';
import { RatingCard } from '@/entity/Rating';

function MainPage() {
    const { t } = useTranslation('translation');

    return (
        <Page>
            {t('Main page')}
            <BugButton />
            <RatingCard title="Как вам статья?" feedbackTitle="Оставьте отзыв о статье" hasFeedback />
        </Page>
    );
}

export default memo(MainPage);
