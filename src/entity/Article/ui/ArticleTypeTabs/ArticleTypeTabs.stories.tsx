import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleTypeTabs } from './ArticleTypeTabs';

export default {
    title: 'entity/Article/ArticleTypeTabs',
    component: ArticleTypeTabs,

} as ComponentMeta<typeof ArticleTypeTabs>;

const Template: ComponentStory<typeof ArticleTypeTabs> = (args) => <ArticleTypeTabs {...args} />;

export const PrimaryArticleTypeTabs = Template.bind({});
PrimaryArticleTypeTabs.args = {};
