import React from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

function App() {
    const { theme } = useTheme();
    const { t } = useTranslation();
    return (
        <div className={classNames('app', {}, [theme])}>
            <NavBar />
            <div className="main-content-block">
                <SideBar />
                <AppRouter />
            </div>
        </div>
    );
}

export default App;
