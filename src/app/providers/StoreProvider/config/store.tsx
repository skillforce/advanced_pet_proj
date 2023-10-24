import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entity/Counter';
import { userReducer } from 'entity/User';
import { $api } from 'shared/api/api';
import { CombinedState, Reducer } from 'redux';
import { uiReducer } from 'features/UI';
import { createReducerManager } from './reducerManager';
import { StateSchema, ThunkExtraArg } from '../config/StateSchema';

export const createReduxStore = (
    initialState?:StateSchema,
    asyncReducers?:ReducersMapObject<StateSchema>,
) => {
    const rootReducer:ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
        ui: uiReducer,
    };

    const reducerManager = createReducerManager(rootReducer);

    const extraArg : ThunkExtraArg = {
        api: $api,
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
