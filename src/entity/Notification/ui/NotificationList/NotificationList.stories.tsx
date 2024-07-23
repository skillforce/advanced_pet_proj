import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
// @ts-ignore
import withMock from 'storybook-addon-mock';
import { NotificationList } from './NotificationList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const notificationsMock = [
    {
        id: '1',
        title: 'TitleTest1',
        description: 'DescriptionTest1',
        userId: '2',
    }, {
        id: '2',
        title: 'TitleTest2',
        description: 'DescriptionTest1',
        userId: '2',
    }, {
        id: '3',
        title: 'TitleTest3',
        description: 'DescriptionTest1',
        userId: '3',
    }, {
        id: '4',
        title: 'TitleTest4',
        description: 'DescriptionTest1',
        userId: '1',
    },

];
export default {
    title: 'entity/Notification/NotificationList',
    component: NotificationList,
    decorators: [withMock],

} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

export const PrimaryNotificationList = Template.bind({});
PrimaryNotificationList.args = {};
PrimaryNotificationList.decorators = [StoreDecorator({})];
PrimaryNotificationList.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: notificationsMock,
        },
    ],
};
export const EmptyNotificationList = Template.bind({});
EmptyNotificationList.args = {};
EmptyNotificationList.decorators = [StoreDecorator({})];
EmptyNotificationList.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [],
        },
    ],
};
