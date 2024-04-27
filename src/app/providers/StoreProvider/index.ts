import {
    ReduxStoreWithManager, StateSchema, StateSchemaKeys, ThunkConfig, ThunkExtraArg,
} from './config/StateSchema';
import { createReduxStore, AppDispatch } from './config/store';
import { StoreProvider } from './ui/StoreProvider';

export {
    StoreProvider,
    createReduxStore,
};
export type {
    StateSchema,
    ReduxStoreWithManager,
    AppDispatch,
    ThunkExtraArg,
    ThunkConfig,
    StateSchemaKeys,
};
