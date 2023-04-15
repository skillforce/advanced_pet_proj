import { Story } from '@storybook/react';
import React from 'react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUserName/model/slice/LoginSlice';
import { profileReducer } from 'entity/Profile';
import { ReducersListSchema } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersListSchema = {
    loginForm: loginReducer,
    profile: profileReducer,
};

export const StoreDecorator = (
    initialState:DeepPartial<StateSchema>,
    asyncReducers?:ReducersListSchema,
) => (StoryComponent:Story) => (
    <StoreProvider
        initialState={initialState as StateSchema}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
        <StoryComponent />
    </StoreProvider>
);
