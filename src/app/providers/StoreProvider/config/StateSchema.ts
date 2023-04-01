import { CounterScheme } from 'entity/Counter';
import { UserStateScheme } from 'entity/User';
import { LoginSchema } from 'features/AuthByUserName';
import {
    AnyAction, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { CombinedState } from 'redux';
import { ProfileSchema } from 'entity/Profile';

export interface StateSchema {
    counter:CounterScheme;
    user: UserStateScheme;

    // async reducers
    loginForm?:LoginSchema
    profile?: ProfileSchema
}

export type StateSchemaKeys = keyof StateSchema;

export interface ReducerManager{
    getReducerMap:()=>ReducersMapObject<StateSchema>;
    reduce:(state:StateSchema, action:AnyAction)=>CombinedState<StateSchema>;
    add: (key:StateSchemaKeys, reducer:Reducer)=>void;
    remove: (key:StateSchemaKeys) =>void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
    reducerManager:ReducerManager
}
