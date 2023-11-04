import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticlesPageFilters } from './ArticlesPageFilters';

export default {
    title: 'entity/Article/ArticlesPageFilters',
    component: ArticlesPageFilters,

} as ComponentMeta<typeof ArticlesPageFilters>;

const Template: ComponentStory<typeof ArticlesPageFilters> = (args) => <ArticlesPageFilters {...args} />;

export const PrimaryArticlesPageFilters = Template.bind({});
PrimaryArticlesPageFilters.args = {};
