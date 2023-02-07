import React from 'react';
import './styles/index.scss'
import {classNames} from 'shared/lib/classNames/classNames';
import {useTheme} from 'app/providers/ThemeProvider';
import {AppRouter} from 'app/providers/router';
import {NavBar} from 'widgets/NavBar';


const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app',{},[theme])}>
            <NavBar/>
            <button onClick={toggleTheme}>TOGGLE THEME</button>
            <AppRouter />
        </div>
    );
};

export default App;