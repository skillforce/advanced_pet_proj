import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppLink, AppLinksTheme } from './AppLink';
import { Theme } from '@/shared/consts/theme';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
    <AppLink {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    theme: AppLinksTheme.PRIMARY,
    children: 'TestLink',
};
export const Secondary = Template.bind({});
Secondary.args = {
    theme: AppLinksTheme.SECONDARY,
    children: 'TestLink',
};

export const Active = Template.bind({});
Active.args = {
    theme: AppLinksTheme.ACTIVE,
    children: 'TestLink',
};
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    theme: AppLinksTheme.PRIMARY,
    children: 'TestLink',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
    theme: AppLinksTheme.SECONDARY,
    children: 'TestLink',
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ActiveDark = Template.bind({});
ActiveDark.args = {
    theme: AppLinksTheme.ACTIVE,
    children: 'TestLink',
};
ActiveDark.decorators = [ThemeDecorator(Theme.DARK)];
