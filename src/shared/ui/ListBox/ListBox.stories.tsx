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
    value: 'alalalalal',
    direction: 'top left',
    items: [
        { content: '12dcsdcsdcsdc3', value: '123' },
        { content: '12dcsdcsdcsdc3', value: '12dcsdcsdcsdc3' },
        { content: '12dcsdcsdcsdc3', value: '12dcsdcsdcsdc3' },
    ],
};
export const TopRight = Template.bind({});
TopRight.args = {
    value: 'alalalalal',
    direction: 'top right',
    items: [
        { content: '12dcsdcsdcsdc3', value: '12dcsdcsdcsdc3' },
        { content: '1', value: '12dcsdcsdcsdc3' },
        { content: '1223', value: '567' },
    ],
};
export const BottomLeft = Template.bind({});
BottomLeft.args = {
    value: 'alalalalal',
    direction: 'bottom left',
    items: [
        { content: '12dcsdcsdcsdc3', value: '123' },
        { content: '1', value: '12dcsdcsdcsdc3' },
        { content: '12dcsdcsdcsdc3', value: '12dcsdcsdcsdc3' },
    ],
};
export const BottomRight = Template.bind({});
BottomRight.args = {
    value: 'alalalalal',
    direction: 'bottom right',
    items: [
        { content: '12dcsdcsdcsdc3', value: '12dcsdcsdcsdc3' },
        { content: '1', value: '34sdcsdcsdcsd5' },
        { content: '1223', value: '567csdcsdcsdc' },
    ],
};
