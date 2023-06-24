import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Code } from './Code';

export default {
    title: 'shared/Code',
    component: Code,

} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const PrimaryCode = Template.bind({});
PrimaryCode.args = {
    text: 'export default {\n'
        + '    title: \'shared/Code\',\n'
        + '    component: Code,\n'
        + '\n'
        + '} as ComponentMeta<typeof Code>;\n'
        + '\n'
        + 'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;',
};
