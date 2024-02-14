import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleInfiniteList } from './ArticleInfiniteList';

export default {
    title: 'pages/ArticlePage/ArticleInfiniteList',
    component: ArticleInfiniteList,

} as ComponentMeta<typeof ArticleInfiniteList>;

const Template: ComponentStory<typeof ArticleInfiniteList> = (args) => <ArticleInfiniteList {...args} />;

export const PrimaryArticleInfiniteList = Template.bind({});
PrimaryArticleInfiniteList.args = {};
PrimaryArticleInfiniteList.decorators = [StoreDecorator({})];
