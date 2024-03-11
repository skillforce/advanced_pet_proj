import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticlesPageFilters } from './ArticlesPageFilters';

export default {
    title: 'pages/ArticlePage/ArticlesPageFilters',
    component: ArticlesPageFilters,

} as ComponentMeta<typeof ArticlesPageFilters>;

const Template: ComponentStory<typeof ArticlesPageFilters> = (args) => <ArticlesPageFilters {...args} />;

export const PrimaryArticlesPageFilters = Template.bind({});
PrimaryArticlesPageFilters.args = {};
PrimaryArticlesPageFilters.decorators = [StoreDecorator({})];
