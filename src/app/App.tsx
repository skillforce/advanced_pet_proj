import React, { useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';
import { useTheme } from 'app/providers/ThemeProvider';

function App() {
    return (
        <div className={classNames('app', {}, [])}>
            <NavBar />
            <div className="main-content-block">
                <SideBar />
                <AppRouter />
            </div>
        </div>
    );
}

export default App;
