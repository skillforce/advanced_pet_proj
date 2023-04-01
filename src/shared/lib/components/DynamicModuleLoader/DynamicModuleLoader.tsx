import React, { FC, ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKeys } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersListSchema ={
    [name in StateSchemaKeys]?: Reducer;
}

type reducersListEntry =[
    name:StateSchemaKeys,
    reducer:Reducer
]

interface DynamicModuleLoaderProps {
    reducers:ReducersListSchema
    removeAfterUnmount?: boolean;

}

export const DynamicModuleLoader:FC<DynamicModuleLoaderProps> = (props) => {
    const {
        children, reducers, removeAfterUnmount,
    } = props;
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]:reducersListEntry) => {
            store.reducerManager.add(name, reducer);
            dispatch({ type: `@INIT ${name} reducer` });
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]:reducersListEntry) => {
                    store.reducerManager.remove(name);
                    dispatch({ type: `@DELETE ${name} reducer` });
                });
            }
        };
        // eslint-disable-next-line
    }, []);
    return (
        <div>
            {children}
        </div>

    );
};
