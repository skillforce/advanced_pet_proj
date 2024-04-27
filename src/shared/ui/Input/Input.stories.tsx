import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Input } from './Input';
import { Theme } from '@/shared/consts/theme';

export default {
    title: 'shared/Input',
    component: Input,

} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputLight = Template.bind({});
InputLight.args = {
    placeholder: 'Storybook test input',
};
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    placeholder: 'Storybook test input',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
