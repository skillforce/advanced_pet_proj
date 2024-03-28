import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './NotFoundPage.module.scss';
import { Page } from '@/widgets/Page';

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage = memo(({ className } : NotFoundPageProps) => {
    const { t } = useTranslation();
    return (
        <Page className={classNames(cls.notFoundPageContainer, {}, [className])}>
            {t('Page not found')}
        </Page>
    );
});
