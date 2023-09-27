import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleList } from './ArticleList';

export default {
    title: 'shared/ArticleList',
    component: ArticleList,

} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;

export const PrimaryArticleList = Template.bind({});
PrimaryArticleList.args = {};
