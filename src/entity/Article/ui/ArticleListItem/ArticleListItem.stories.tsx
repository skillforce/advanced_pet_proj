import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleListItem } from './ArticleListItem';

export default {
    title: 'shared/ArticleListItem',
    component: ArticleListItem,

} as ComponentMeta<typeof ArticleListItem>;

const Template: ComponentStory<typeof ArticleListItem> = (args) => <ArticleListItem {...args} />;

export const PrimaryArticleListItem = Template.bind({});
PrimaryArticleListItem.args = {};
