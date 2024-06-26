import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';
import { Theme } from '@/shared/consts/theme';

export default {
    title: 'shared/Modal',
    component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const White = Template.bind({});
White.args = {
    children: 'WhiteTheme',
    isOpen: true,
};
export const Dark = Template.bind({});
Dark.args = {
    children: 'DarkTheme',
    isOpen: true,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
