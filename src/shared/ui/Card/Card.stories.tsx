import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from '../Text/Text';
import { Card } from './Card';

export default {
    title: 'shared/Card',
    component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const PrimaryCard = Template.bind({});
PrimaryCard.args = {
    children: <Text title="test" bodyText="dcsdcdscsdcsd" />,
};
