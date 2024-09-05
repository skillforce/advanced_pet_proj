import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CountrySelect } from './CountrySelect';

export default {
    title: 'entity/CountrySelect',
    component: CountrySelect,
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args) => (
    <CountrySelect {...args} />
);

export const CountrySelectPrimary = Template.bind({});
CountrySelectPrimary.args = {};
