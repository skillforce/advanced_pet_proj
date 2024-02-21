import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    decorators: [
        (Story) => (
            <div style={{ padding: 100 }}>
                <Story />
            </div>
        ),
    ],

} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const TopLeft = Template.bind({});
TopLeft.args = {
    value: 'TestForStory',
    direction: 'top left',
    items: [
        { content: 'test listBox item 1', value: '1' },
        { content: 'test listBox item 2', value: '2' },
        { content: 'test listBox item 3', value: '3' },
    ],
};
export const TopRight = Template.bind({});
TopRight.args = {
    value: 'TestForStory',
    direction: 'top right',
    items: [
        { content: 'test listBox item 1', value: '1' },
        { content: 'test listBox item 2', value: '2' },
        { content: 'test listBox item 3', value: '3' },
    ],
};
export const BottomLeft = Template.bind({});
BottomLeft.args = {
    value: 'TestForStory',
    direction: 'bottom left',
    items: [
        { content: 'test listBox item 1', value: '1' },
        { content: 'test listBox item 2', value: '2' },
        { content: 'test listBox item 3', value: '3' },
    ],
};
export const BottomRight = Template.bind({});
BottomRight.args = {
    value: 'TestForStory',
    direction: 'bottom right',
    items: [
        { content: 'test listBox item 1', value: '1' },
        { content: 'test listBox item 2', value: '2' },
        { content: 'test listBox item 3', value: '3' },
    ],
};
