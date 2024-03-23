import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RatingCard } from './RatingCard';

export default {
    title: 'entity/Rating/RatingCard',
    component: RatingCard,

} as ComponentMeta<typeof RatingCard>;

const Template: ComponentStory<typeof RatingCard> = (args) => <RatingCard {...args} />;

export const PrimaryRatingCard = Template.bind({});
PrimaryRatingCard.args = {};
