import React, { FC, PropsWithChildren, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager, StateSchema, StateSchemaKeys } from '@/app/providers/StoreProvider';

export type ReducersListSchema ={
    [name in StateSchemaKeys]?: Reducer<NonNullable<StateSchema[name]>> ;
}

interface DynamicModuleLoaderProps {
    reducers:ReducersListSchema
    removeAfterUnmount?: boolean;

}

export const DynamicModuleLoader:FC<PropsWithChildren & DynamicModuleLoaderProps> = (props) => {
    const {
        children,
        reducers,
        removeAfterUnmount = true,
    } = props;
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        const mountedReducers = store.reducerManager.getMountedReduces();
        Object.entries(reducers).forEach(([name, reducer]) => {
            const mounted = mountedReducers[name as StateSchemaKeys];
            if (!mounted) {
                store.reducerManager.add(name as StateSchemaKeys, reducer);
                dispatch({ type: `@INIT ${name} reducer` });
            }
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]) => {
                    store.reducerManager.remove(name as StateSchemaKeys);
                    dispatch({ type: `@DELETE ${name} reducer` });
                });
            }
        };
        // eslint-disable-next-line
    }, []);
    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {children}
        </>

    );
};
