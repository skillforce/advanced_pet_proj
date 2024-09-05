import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { EditableProfileCard } from './EditableProfileCard';
import { Currency } from '@/entity/Currency';
import { Country } from '@/entity/Country';

export default {
    title: 'features/editableProfileCard/EditableProfileCard',
    component: EditableProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = (args) => (
    <EditableProfileCard {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

Normal.decorators = [
    StoreDecorator({
        profile: {
            form: {
                currency: Currency.BYN,
                country: Country.Armenia,
                firstName: 'Denis',
                lastName: 'Testing',
                city: 'Mogilev',
                age: 13,
                userName: 'skillforce',
                avatar: 'https://www.imgacademy.com/sites/default/files/ncsa-homepage-row-2022.jpg',
                id: '1',
            },
        },
    }),
];
