import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './index.scss'
import {MainPageAsync} from './MainPage/MainPage.async';
import {AboutPageAsync} from './AboutPage/AboutPage.async';

const App = () => {
    return (
        <div className={'app'}>
            <Link to={'/'}>
                main
            </Link>
            <Link to={'/about'}>
                About page
            </Link>
            <Suspense fallback={<div>...Loading</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;