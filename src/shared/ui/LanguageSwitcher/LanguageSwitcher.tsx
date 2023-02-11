import React from 'react';
import cls from './LanguageSwither.module.scss'
import {useTranslation} from 'react-i18next';
import {Button, ThemeButton} from 'shared/ui/Button/Button';
import {classNames} from 'shared/lib/classNames/classNames';

interface LanguageSwitcherProps {
    className?: string
}

export const LanguageSwitcher = ({className}: LanguageSwitcherProps) => {
    const {t, i18n} = useTranslation()

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
    }

    return (<>
            <Button className={classNames(cls.themeSwitchBtn,{},[className])}
                    theme={ThemeButton.CLEAR}
                    onClick={toggleLanguage}
            >
                {t('en')}
            </Button>
        </>
    )
};