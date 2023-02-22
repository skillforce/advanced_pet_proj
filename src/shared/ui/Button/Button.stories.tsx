import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button, ThemeButton } from './Button';

export default {
    title: 'shared/Button',
    component: Button,

} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Test',
};

export const Clear = Template.bind({});
Clear.args = {
    theme: ThemeButton.CLEAR,
    children: 'Test',
};

export const Outlined = Template.bind({});
Outlined.args = {
    theme: ThemeButton.OUTLINE,
    children: 'Test',
};
