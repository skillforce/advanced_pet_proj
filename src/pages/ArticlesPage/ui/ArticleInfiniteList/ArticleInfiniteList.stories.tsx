import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleInfiniteList } from './ArticleInfiniteList';

export default {
    title: 'pages/ArticlePage/ArticleInfiniteList',
    component: ArticleInfiniteList,

} as ComponentMeta<typeof ArticleInfiniteList>;

const Template: ComponentStory<typeof ArticleInfiniteList> = (args) => <ArticleInfiniteList {...args} />;

export const PrimaryArticleInfiniteList = Template.bind({});
PrimaryArticleInfiniteList.args = {};
