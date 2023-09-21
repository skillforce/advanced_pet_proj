import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentCard } from './CommentCard';

const mockComment = {
    id: '1',
    text: 'some comment1',
    user: { id: '1', username: 'Denis', avatar: 'https://carnegiemnh.org/wp-content/uploads/2019/08/efcb18c281253ee89c538dd9758aee8836cd1d71.png' },
};

export default {
    title: 'entity/CommentCard',
    component: CommentCard,

} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const PrimaryCommentCard = Template.bind({});
PrimaryCommentCard.args = {
    comment: mockComment,
};
export const LoadingComment = Template.bind({});
LoadingComment.args = {
    comment: mockComment,
    isLoading: true,

};
