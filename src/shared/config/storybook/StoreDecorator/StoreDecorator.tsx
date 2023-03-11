import { Story } from '@storybook/react';
import React from 'react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

export const StoreDecorator = (initialState:DeepPartial<StateSchema>) => (StoryComponent:Story) => (
    <StoreProvider initialState={initialState as StateSchema}>
        <StoryComponent />
    </StoreProvider>
);
