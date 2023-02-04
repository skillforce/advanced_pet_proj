import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss'
import {classNames} from 'shared/lib/classNames/classNames';
import {useTheme} from 'app/providers/ThemeProvider';
import {MainPage} from 'pages/MainPage';
import {AboutPage} from 'pages/AboutPage';


const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app',{},[theme])}>
            <button onClick={toggleTheme}>TOGGLE THEME</button>
            <Link to={'/'}>
                main
            </Link>
            <Link to={'/about'}>
                About page
            </Link>
            <Suspense fallback={<div>...Loading</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPage/>}/>
                    <Route path={'/about'} element={<AboutPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;