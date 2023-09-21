import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import AddCommentForm from './AddCommentForm';

export default {
    title: 'feature/AddCommentForm',
    component: AddCommentForm,

} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />;

export const PrimaryAddCommentForm = Template.bind({});
PrimaryAddCommentForm.args = {
    onSendComment: action('onSendComment'),
};
PrimaryAddCommentForm.decorators = [
    StoreDecorator({ }),
];
