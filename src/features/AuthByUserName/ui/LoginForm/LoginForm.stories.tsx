import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { LoginForm } from 'features/AuthByUserName/ui/LoginForm/LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,

} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const LoginFormPrimary = Template.bind({});
LoginFormPrimary.args = {
};
export const LoginFormDark = Template.bind({});
LoginFormDark.args = {
};
LoginFormDark.decorators = [ThemeDecorator(Theme.DARK)];
