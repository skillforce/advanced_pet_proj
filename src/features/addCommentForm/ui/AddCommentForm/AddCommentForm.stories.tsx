import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AddCommentForm } from './AddCommentForm';

export default {
    title: 'shared/AddCommentForm',
    component: AddCommentForm,

} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />;

export const PrimaryAddCommentForm = Template.bind({});
PrimaryAddCommentForm.args = {};
