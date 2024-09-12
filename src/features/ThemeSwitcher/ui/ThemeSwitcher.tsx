import React, { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import LightThemeIcon from '@/shared/assets/icons/theme-light.svg';
import DarkThemeIcon from '@/shared/assets/icons/theme-dark.svg';
import useTheme from '@/shared/lib/hooks/useTheme';
import { Theme } from '@/shared/consts/theme';
import { saveJsonSettings } from '@/entity/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { toggleTheme, theme } = useTheme();
    const dispatch = useAppDispatch();

    const onToggleHandler = useCallback(() => {
        toggleTheme((newTheme: Theme) => {
            dispatch(saveJsonSettings({ theme: newTheme }));
        });
    }, [dispatch, toggleTheme]);

    return (
        <Button
            onClick={onToggleHandler}
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
        >
            {theme === Theme.LIGHT ? <LightThemeIcon /> : <DarkThemeIcon />}
        </Button>
    );
});
