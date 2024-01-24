import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { EditableProfileCardHeader } from './EditableProfileCardHeader';

export default {
    title: 'shared/EditableProfileCardHeader',
    component: EditableProfileCardHeader,

} as ComponentMeta<typeof EditableProfileCardHeader>;

const Template: ComponentStory<typeof EditableProfileCardHeader> = (args) => <EditableProfileCardHeader {...args} />;

export const PrimaryEditableProfileCardHeader = Template.bind({});
PrimaryEditableProfileCardHeader.args = {};
