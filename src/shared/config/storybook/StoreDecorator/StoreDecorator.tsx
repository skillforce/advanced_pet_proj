import { Story } from '@storybook/react';
import React from 'react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUserName/model/slice/LoginSlice';
import { profileReducer } from 'entity/Profile';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
    profile: profileReducer,
};

export const StoreDecorator = (initialState:DeepPartial<StateSchema>) => (StoryComponent:Story) => (
    <StoreProvider initialState={initialState as StateSchema} asyncReducers={defaultAsyncReducers}>
        <StoryComponent />
    </StoreProvider>
);
