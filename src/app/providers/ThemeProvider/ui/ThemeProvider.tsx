import React, {
    FC,
    PropsWithChildren,
    useEffect,
    useMemo,
    useState,
} from 'react';
import { Theme } from '@/shared/consts/theme';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';
import { useJsonSettings } from '@/entity/User';

interface ThemeProviderProps {
    initialTheme?: Theme;
}

// PropsWithChildren(type for react 18+)
export const ThemeProvider: FC<PropsWithChildren & ThemeProviderProps> = ({
    children,
    initialTheme,
}) => {
    const { theme: defaultTheme } = useJsonSettings();
    const [isThemeInited, setIsThemeInited] = useState(false);
    const [theme, setTheme] = useState<Theme>(
        initialTheme || defaultTheme || Theme.DARK,
    );

    useEffect(() => {
        if (!isThemeInited && defaultTheme) {
            setTheme(defaultTheme);
            setIsThemeInited(true);
        }
    }, [defaultTheme, isThemeInited]);

    // установка корректной темы после перезагрузки страницы
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    );

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
