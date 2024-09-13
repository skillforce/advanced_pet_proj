import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { NavBar } from '@/widgets/NavBar';
import { SideBar } from '@/widgets/SideBar';
import { getIsInited, initAuthData } from '@/entity/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { PageLoader } from '@/widgets/PageLoader';

function App() {
    const dispatch = useAppDispatch();
    const isInited = useSelector(getIsInited);

    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    if (!isInited) {
        return <PageLoader />;
    }

    return (
        <div className={classNames('app', {}, [])}>
            <NavBar />
            <div className="main-content-block">
                <SideBar />
                {isInited && <AppRouter />}
            </div>
        </div>
    );
}

export default App;
