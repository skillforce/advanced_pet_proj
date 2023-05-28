import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from 'entity/Currency';
import { Country } from 'entity/Country';
import testAvatar from 'shared/assets/tests/storybook.jpg';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,

} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
    profile: {
        form: {
            currency: Currency.USD,
            country: Country.Ukraine,
            firstName: 'Denis',
            lastName: 'Tatarinov',
            city: 'Mogilev',
            age: 22,
            userName: 'sarcasm1613',
            avatar: 'https://www.freecodecamp.org/news/content/images/2022/02/arrows-2889040_1920.jpg',
        },
    },
})];
export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            currency: Currency.USD,
            country: Country.Ukraine,
            firstName: 'Denis',
            lastName: 'Tatarinov',
            city: 'Mogilev',
            age: 22,
            userName: 'sarcasm1613',
            avatar: 'https://www.freecodecamp.org/news/content/images/2022/02/arrows-2889040_1920.jpg',
        },
    },
})];
