import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreProvider } from 'app/providers/StoreProvider';
import AboutPage from './AboutPage';

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

};

const Template: ComponentStory <typeof AboutPage> = (args) => (
    <StoreProvider initialState={initialStateMock}>
        <AboutPage {...args} />
    </StoreProvider>
);

export const Light = Template.bind({});
Light.args = {};
export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
