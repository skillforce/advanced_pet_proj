import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { rtkApi } from '@/shared/api/rtkApi';
import AboutPage from './AboutPage';
import { Theme } from '@/shared/consts/theme';

export default {
    title: 'pages/AboutPage',
    component: AboutPage,

} as ComponentMeta<typeof AboutPage>;

const initialStateMock = {
    counter: { value: 0 },
    user: {
        authData:
            {
                id: '123',
                username: 'Denis',
            },
    },
    loginForm: {
        password: '',
        login: '',
        isLoading: false,
    },
    ui: { scroll: { 'test': 0 } },
    [rtkApi.reducerPath]: rtkApi.reducer as any,

};

const Template: ComponentStory <typeof AboutPage> = () => (
    <StoreProvider initialState={initialStateMock}>
        <AboutPage />
    </StoreProvider>
);

export const Light = Template.bind({});
Light.args = {};
export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
