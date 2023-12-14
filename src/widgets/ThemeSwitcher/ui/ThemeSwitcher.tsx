import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import LightThemeIcon from 'shared/assets/icons/theme-light.svg';
import DarkThemeIcon from 'shared/assets/icons/theme-dark.svg';

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
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
});
