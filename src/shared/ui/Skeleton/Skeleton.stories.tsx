import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,

} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const SquareSkeleton = Template.bind({});
SquareSkeleton.args = {
    width: 200,
    height: 400,

};
export const CircleSkeleton = Template.bind({});
CircleSkeleton.args = {
    width: 100,
    height: 100,
    borderRadius: '50%',
};

export const SquareDarkSkeleton = Template.bind({});
SquareDarkSkeleton.args = {
    width: 200,
    height: 400,
};
SquareDarkSkeleton.decorators = [ThemeDecorator(Theme.DARK)];
export const CircleDarkSkeleton = Template.bind({});
CircleDarkSkeleton.args = {
    width: 100,
    height: 100,
    borderRadius: '50%',
};
CircleDarkSkeleton.decorators = [ThemeDecorator(Theme.DARK)];
