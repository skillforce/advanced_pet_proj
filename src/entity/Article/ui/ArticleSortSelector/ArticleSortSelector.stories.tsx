import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleSortSelector } from './ArticleSortSelector';

export default {
    title: 'shared/ArticleSortSelector',
    component: ArticleSortSelector,

} as ComponentMeta<typeof ArticleSortSelector>;

const Template: ComponentStory<typeof ArticleSortSelector> = (args) => <ArticleSortSelector {...args} />;

export const PrimaryArticleSortSelector = Template.bind({});
PrimaryArticleSortSelector.args = {};
