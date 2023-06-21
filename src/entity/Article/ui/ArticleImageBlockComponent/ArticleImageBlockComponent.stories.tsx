import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleImageBlockComponent } from './ArticleImageBlockComponent';

export default {
    title: 'entity/ArticleImageBlockComponent',
    component: ArticleImageBlockComponent,

} as ComponentMeta<typeof ArticleImageBlockComponent>;

const Template: ComponentStory<typeof ArticleImageBlockComponent> = (args) => <ArticleImageBlockComponent {...args} />;

export const PrimaryArticleImageBlockComponent = Template.bind({});
PrimaryArticleImageBlockComponent.args = {};
