import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentList } from './CommentList';

const commentListArr = [
    {
        id: '1',
        text: 'some comment1',
        user: {
            id: '1',
            username: 'Denis',
            avatar: 'https://carnegiemnh.org/wp-content/uploads/2019/08/efcb18c281253ee89c538dd9758aee8836cd1d71.png',
        },
    },
    {
        id: '2',
        text: 'some comment2',
        user: {
            id: '1',
            username: 'Andrew',
            avatar: 'https://carnegiemnh.org/wp-content/uploads/2019/08/efcb18c281253ee89c538dd9758aee8836cd1d71.png',
        },
    },
    {
        id: '3',
        text: 'some comment3',
        user: {
            id: '1',
            username: 'Vitaly',
            avatar: 'https://carnegiemnh.org/wp-content/uploads/2019/08/efcb18c281253ee89c538dd9758aee8836cd1d71.png',
        },
    },
];

export default {
    title: 'entity/Comment/CommentList',
    component: CommentList,
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
    <CommentList {...args} />
);

export const PrimaryCommentList = Template.bind({});
PrimaryCommentList.args = {
    comments: commentListArr,
};
export const LoadingCommentList = Template.bind({});
LoadingCommentList.args = {
    comments: commentListArr,
    isLoading: true,
};
