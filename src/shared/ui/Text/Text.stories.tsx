import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,

} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const PrimaryText = Template.bind({});
PrimaryText.args = {
    title: 'Test',
    bodyText: 'Test',
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Test',

};
export const onlyBodyText = Template.bind({});
onlyBodyText.args = {
    bodyText: 'Test',
};

export const DarkText = Template.bind({});
DarkText.args = {
    title: 'Test',
    bodyText: 'Test',
};
DarkText.decorators = [ThemeDecorator(Theme.DARK)];
export const WithError = Template.bind({});
WithError.args = {
    title: 'Test',
    bodyText: 'Test',
    theme: TextTheme.ERROR,
};
