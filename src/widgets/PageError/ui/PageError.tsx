import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string
}
const onReloadPage = () => {
    window.location.reload();
};
export const PageError = ({ className } : PageErrorProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.pageErrorContainer, {}, [className])}>
            {t('Unexpected error occurred')}
            <button type="button" onClick={onReloadPage}>{t('Press to reload the page')}</button>
        </div>
    );
};
