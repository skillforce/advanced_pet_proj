import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import { Button } from 'shared/ui/Button/Button';
import { Dropdown } from './Dropdown';

export default {
    title: 'shared/Dropdown',
    component: Dropdown,

} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const PrimaryDropdown = Template.bind({});
PrimaryDropdown.args = {
    trigger: <Button>alalalala</Button>,
    items: [
        { content: 'first' },
        { content: 'second' },
        { content: 'thirdthirdthird' },
    ],
};
