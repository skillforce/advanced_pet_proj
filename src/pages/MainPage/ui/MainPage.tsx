import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { RatingCard } from '@/entity/Rating';

function MainPage() {
    const { t } = useTranslation('translation');

    return (
        <Page data-testid="MainPage">
            {t('Main page')}
            <RatingCard
                title="Как вам статья?"
                feedbackTitle="Оставьте отзыв о статье"
                hasFeedback
            />
        </Page>
    );
}

export default memo(MainPage);
