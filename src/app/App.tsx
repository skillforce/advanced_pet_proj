import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppRouter } from '@/app/providers/router';
import { NavBar } from '@/widgets/NavBar';
import { SideBar } from '@/widgets/SideBar';
import { userActions } from '@/entity/User';
import { getIsInited } from '@/entity/User/model/selectors/getIsInited/getIsInited';

function App() {
    const dispatch = useDispatch();
    const isInited = useSelector(getIsInited);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

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
