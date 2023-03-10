import React, { useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';
import { useDispatch } from 'react-redux';
import { userActions } from 'entity/User';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

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
