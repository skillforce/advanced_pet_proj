import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import LoginForm from 'features/AuthByUserName/ui/LoginForm/LoginForm';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'features/LoginForm',
    component: LoginForm,

} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const LoginFormPrimary = Template.bind({});

LoginFormPrimary.args = {};
LoginFormPrimary.decorators = [StoreDecorator({
    loginForm: {
        login: 'Denis',
        password: '12345',
    },
})];

export const PrimaryWithError = Template.bind({});

PrimaryWithError.args = {};
PrimaryWithError.decorators = [StoreDecorator({
    loginForm: {
        login: 'Denis',
        password: '12345',
        error: 'ERROR TEXT!',
    },
})];
export const PrimaryLoading = Template.bind({});

PrimaryLoading.args = {};
PrimaryLoading.decorators = [StoreDecorator({
    loginForm: {
        login: 'Denis',
        password: '12345',
        isLoading: true,
    },
})];

export const LoginFormDark = Template.bind({});
LoginFormDark.args = {};
LoginFormDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    loginForm: {
        login: 'Denis',
        password: '12345',
    },
})];
