import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Currency } from 'entity/Currency';
import { Country } from 'entity/Country';
import { ProfileCard } from './ProfileCard';
import testAvatar from '../../../../shared/assets/tests/storybook.jpg';

export default {
    title: 'entity/ProfileCard',
    component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const PrimaryCard = Template.bind({});

PrimaryCard.args = {
    data: {
        currency: Currency.USD,
        country: Country.Ukraine,
        firstName: 'Denis',
        lastName: 'Tatarinov',
        city: 'Mogilev',
        age: 22,
        userName: 'sarcasm1613',
        avatar: testAvatar,

    },
};
export const LoadingCard = Template.bind({});

LoadingCard.args = {
    isLoading: true,
};
export const WithErrorCard = Template.bind({});

WithErrorCard.args = {
    error: 'true',
};
