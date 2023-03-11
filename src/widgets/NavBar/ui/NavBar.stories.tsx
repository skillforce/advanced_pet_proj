import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { SideBar } from 'widgets/SideBar';
import { NavBar } from 'widgets/NavBar';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';

export default {
    title: 'widgets/NavBar',
    component: NavBar,

} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];
export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
