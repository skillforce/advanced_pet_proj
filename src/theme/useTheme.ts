import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from './ThemeContext';
import {useContext, useState} from 'react';
import {defaultTheme} from './ThemeProvider';

interface useThemeResult {
    toggleTheme: () => void;
    theme: Theme
}


export function useTheme(): useThemeResult {

    const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }
    return {toggleTheme, theme}

}