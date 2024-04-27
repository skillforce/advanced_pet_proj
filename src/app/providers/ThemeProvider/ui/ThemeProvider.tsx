import React, {
    FC, PropsWithChildren, useEffect, useMemo, useState,
} from 'react';
import { Theme } from '@/shared/consts/theme';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/consts/localStorage';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';

export const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
    initialTheme?:Theme
}

// PropsWithChildren(type for react 18+)
export const ThemeProvider: FC<PropsWithChildren & ThemeProviderProps> = ({ children, initialTheme }) => {
    const [theme, setTheme] = useState<Theme>(initialTheme ?? defaultTheme);
    // установка корректной темы после перезагрузки страницы
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
