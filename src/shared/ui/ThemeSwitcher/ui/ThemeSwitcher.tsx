import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import LightThemeIcon from '../../../assets/icons/theme-light.svg';
import DarkThemeIcon from '../../../assets/icons/theme-dark.svg';

interface ThemeSwitcherProps {
    className?: string
}

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
    const { toggleTheme, theme } = useTheme();
    return (
        <Button
            onClick={toggleTheme}
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
        >
            {theme === Theme.LIGHT ? <LightThemeIcon /> : <DarkThemeIcon /> }
        </Button>
    );
}
