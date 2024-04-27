import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeSwitcher } from 'src/features/ThemeSwitcher/ui/ThemeSwitcher';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/consts/theme';

export default {
    title: 'widgets/ThemeSwitcher',
    component: ThemeSwitcher,

} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />;

export const Light = Template.bind({});
Light.args = {};
export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
