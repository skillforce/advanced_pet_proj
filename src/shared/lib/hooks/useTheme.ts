import { useContext } from 'react';
import { ThemeContext } from '../../lib/context/ThemeContext';
import { Theme } from '../../consts/theme';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/consts/localStorage';

interface useThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

function useTheme(): useThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        let newTheme: Theme;
        switch (theme) {
            case Theme.LIGHT:
                newTheme = Theme.DARK;
                break;
            case Theme.DARK:
                newTheme = Theme.ORANGE;
                break;
            case Theme.ORANGE:
                newTheme = Theme.LIGHT;
                break;
            default:
                newTheme = Theme.LIGHT;
                break;
        }
        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
        document.body.className = newTheme;
    };

    return { toggleTheme, theme: theme || Theme.LIGHT };
}

export default useTheme;
