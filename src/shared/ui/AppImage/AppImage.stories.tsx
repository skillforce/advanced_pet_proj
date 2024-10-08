import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppImage } from './AppImage';

export default {
    title: 'shared/AppImage',
    component: AppImage,
} as ComponentMeta<typeof AppImage>;

const Template: ComponentStory<typeof AppImage> = (args) => (
    <AppImage {...args} />
);

export const PrimaryAppImage = Template.bind({});
PrimaryAppImage.args = {};
