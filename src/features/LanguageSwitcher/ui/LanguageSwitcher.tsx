import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './LanguageSwither.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';

interface LanguageSwitcherProps {
    className?: string
}

export const LanguageSwitcher = memo(({ className }: LanguageSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
    };

    return (
        <Button
            className={classNames(cls.themeSwitchBtn, {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={toggleLanguage}
        >
            {t('en')}
        </Button>
    );
});
