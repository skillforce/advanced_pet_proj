import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NotificationItem } from './NotificationItem';

const notificationItemMock = {
    id: '1',
    title: 'TestTitle',
    description: 'TestDescription Hello world',
    userId: '2',
};
export default {
    title: 'entity/Notification/NotificationItem',
    component: NotificationItem,
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => (
    <NotificationItem {...args} />
);

export const PrimaryNotificationItem = Template.bind({});
PrimaryNotificationItem.args = {
    item: notificationItemMock,
};
