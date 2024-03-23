import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ProfileRating from './ProfileRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { PrimaryArticleRating } from '@/features/articleRating/ui/ArticleRating/ArticleRating.stories';

export default {
    title: 'features/ProfileRating',
    component: ProfileRating,

} as ComponentMeta<typeof ProfileRating>;

const Template: ComponentStory<typeof ProfileRating> = (args) => <ProfileRating {...args} />;

export const PrimaryProfileRating = Template.bind({});
PrimaryProfileRating.args = {};
PrimaryProfileRating.decorators = [StoreDecorator({
    user: {
        authData: {
            id: '1',
        },

    },
})];
