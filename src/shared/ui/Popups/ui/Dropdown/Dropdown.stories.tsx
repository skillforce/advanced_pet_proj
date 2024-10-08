import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Dropdown } from './Dropdown';
import { Button } from '../../../Button/Button';

export default {
    title: 'shared/Dropdown',
    component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
    <Dropdown {...args} />
);

export const PrimaryDropdown = Template.bind({});
PrimaryDropdown.args = {
    // eslint-disable-next-line i18next/no-literal-string
    trigger: <Button>testButton</Button>,
    items: [
        { content: 'first' },
        { content: 'second' },
        { content: 'thirdthirdthird' },
    ],
};
