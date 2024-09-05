import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Currency } from '@/entity/Currency';
import { Country } from '@/entity/Country';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entity/Profile/ProfileCard',
    component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

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
        avatar: 'https://www.freecodecamp.org/news/content/images/2022/02/arrows-2889040_1920.jpg',
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
