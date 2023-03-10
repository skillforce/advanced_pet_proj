import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LanguageSwither.module.scss';

interface LanguageSwitcherProps {
    className?: string
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
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
}
