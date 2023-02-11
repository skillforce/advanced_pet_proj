import React, {Suspense} from 'react';
import './styles/index.scss'
import {classNames} from 'shared/lib/classNames/classNames';
import {useTheme} from 'app/providers/ThemeProvider';
import {AppRouter} from 'app/providers/router';
import {NavBar} from 'widgets/NavBar';
import {SideBar} from 'widgets/SideBar';
import {useTranslation} from 'react-i18next';


const App = () => {
    const {t, i18n} = useTranslation();
    const {theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <NavBar/>
            <div className={'main-content-block'}>
                <SideBar/>
                <AppRouter/>
            </div>
        </div>
    );
};



export default App;