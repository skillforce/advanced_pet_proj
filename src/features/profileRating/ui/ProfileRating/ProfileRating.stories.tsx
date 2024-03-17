import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProfileRating } from './ProfileRating';

export default {
    title: 'shared/ProfileRating',
    component: ProfileRating,

} as ComponentMeta<typeof ProfileRating>;

const Template: ComponentStory<typeof ProfileRating> = (args) => <ProfileRating {...args} />;

export const PrimaryProfileRating = Template.bind({});
PrimaryProfileRating.args = {};
