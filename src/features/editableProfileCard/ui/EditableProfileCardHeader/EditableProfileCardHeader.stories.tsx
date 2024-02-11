import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Normal } from 'features/editableProfileCard/ui/EditableProfileCard/EditableProfileCard.stories';
import { EditableProfileCardHeader } from './EditableProfileCardHeader';

export default {
    title: 'features/editableProfileCard/EditableProfileCardHeader',
    component: EditableProfileCardHeader,

} as ComponentMeta<typeof EditableProfileCardHeader>;

const Template: ComponentStory<typeof EditableProfileCardHeader> = (args) => <EditableProfileCardHeader {...args} />;

export const PrimaryEditableProfileCardHeader = Template.bind({});
PrimaryEditableProfileCardHeader.args = {};
PrimaryEditableProfileCardHeader.decorators = [StoreDecorator({})];
