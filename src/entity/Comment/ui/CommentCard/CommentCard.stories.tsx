import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentCard } from './CommentCard';

export default {
    title: 'entity/CommentCard',
    component: CommentCard,

} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const PrimaryCommentCard = Template.bind({});
PrimaryCommentCard.args = {};
