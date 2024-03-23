import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import ArticleRating from './ArticleRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'features/ArticleRating',
    component: ArticleRating,
    decorators: [withMock],

} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => <ArticleRating {...args} />;

export const PrimaryArticleRating = Template.bind({});
PrimaryArticleRating.args = {
    articleId: '1',
};
PrimaryArticleRating.decorators = [StoreDecorator({
    user: {
        authData: {
            id: '1',
        },

    },
})];

PrimaryArticleRating.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings?articleId=1&userId=1`,
            method: 'GET',
            status: 200,
            response: [
                { rate: 4 },
            ],
        },
    ],
};
