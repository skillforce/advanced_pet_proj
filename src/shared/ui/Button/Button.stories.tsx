import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from './Button';

export default {
    title: 'shared/Button',
    component: Button,

} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Test',
};
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Test',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Clear = Template.bind({});
Clear.args = {
    theme: ThemeButton.CLEAR,
    children: 'Test',
};
export const ClearDark = Template.bind({});
ClearDark.args = {
    theme: ThemeButton.CLEAR,
    children: 'Test',
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];
export const Outlined = Template.bind({});
Outlined.args = {
    theme: ThemeButton.OUTLINE,
    children: 'Test',
};
export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
    theme: ThemeButton.OUTLINE,
    children: 'Test',
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];
