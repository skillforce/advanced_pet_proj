import React from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss'
import {Theme, useTheme} from 'app/providers/ThemeProvider';
import LightThemeIcon from '../../../assets/icons/theme-light.svg';
import DarkThemeIcon from '../../../assets/icons/theme-dark.svg';
import {Button, ThemeButton} from 'shared/ui/Button/Button';


interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {

    const {toggleTheme, theme} = useTheme()
    return (
            <Button onClick={toggleTheme}
                    theme={ThemeButton.CLEAR}
                    className={classNames(cls.btn, {}, [className])}>
                {theme === Theme.LIGHT ? <LightThemeIcon/> : < DarkThemeIcon /> }
            </Button>
    );
};