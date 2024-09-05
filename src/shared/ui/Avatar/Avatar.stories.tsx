import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import avatarImg from '../../assets/tests/storybook.jpg';
import { Avatar } from './Avatar';

export default {
    title: 'shared/Avatar',
    component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const AvatarBig = Template.bind({});
AvatarBig.args = {
    size: 150,
    src: avatarImg,
    alt: 'flamingoTestImg',
};
export const AvatarSmall = Template.bind({});
AvatarSmall.args = {
    size: 50,
    src: avatarImg,
    alt: 'flamingoTestImg',
};
