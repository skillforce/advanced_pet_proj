import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,

} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const SelectPrimary = Template.bind({});
SelectPrimary.args = {
    label: 'Select option',
    options: [
        { value: 'q', content: 'q' },
        { value: 'w', content: 'w' },
        { value: 'e', content: 'e' },
    ],

};

export const SelectPrimaryDark = Template.bind({});
SelectPrimaryDark.args = {
    label: 'Select option',
    options: [
        { value: 'q', content: 'q' },
        { value: 'w', content: 'w' },
        { value: 'e', content: 'e' },
    ],

};
SelectPrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
