import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Tabs } from './Tabs';

export default {
    title: 'shared/Tabs',
    component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const PrimaryTabs = Template.bind({});
PrimaryTabs.args = {
    tabs: [
        { content: 'First', value: 'first' },
        { content: 'Second', value: 'second' },
        { content: 'Third', value: 'third' },
    ],
    value: 'first',
    onTabClick: action('onTabClick'),
};
