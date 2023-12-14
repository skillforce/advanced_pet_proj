import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { StateSchema } from 'app/providers/StoreProvider';
import { SideBar } from '../ui/SideBar';

export default {
    title: 'widgets/SideBar',
    component: SideBar,

} as ComponentMeta<typeof SideBar>;

const Template: ComponentStory<typeof SideBar> = (args) => <SideBar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    user: { authData: {} },
} as DeepPartial<StateSchema>)];
export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    user: { authData: {} },
}as DeepPartial<StateSchema>)];

export const NoAuth = Template.bind({});
NoAuth.args = {};
NoAuth.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    user: {},
}as DeepPartial<StateSchema>)];
