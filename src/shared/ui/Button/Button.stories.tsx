import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

export default {
    title: 'shared/Button',
    component: Button,

} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Test',
};
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Test',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Clear = Template.bind({});
Clear.args = {
    theme: ButtonTheme.CLEAR,
    children: 'Test',
};
export const ClearDark = Template.bind({});
ClearDark.args = {
    theme: ButtonTheme.CLEAR,
    children: 'Test',
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ClearWithHover = Template.bind({});
ClearWithHover.args = {
    theme: ButtonTheme.CLEAR_HOVER,
    children: 'Test',
};
export const Outlined = Template.bind({});
Outlined.args = {
    theme: ButtonTheme.OUTLINE,
    children: 'Test',
};
export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    children: 'Test',
};
export const BackgroundTransparent = Template.bind({});
BackgroundTransparent.args = {
    theme: ButtonTheme.BACKGROUND_TRANSPARENT,
    children: 'Test',
};
export const Squared = Template.bind({});
Squared.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    children: '>',
    square: true,
};
export const SquaredS = Template.bind({});
SquaredS.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    children: '>',
    square: true,
    size: ButtonSize.S,
};
export const SquaredM = Template.bind({});
SquaredM.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    children: '>',
    square: true,
    size: ButtonSize.M,
};
export const SquaredL = Template.bind({});
SquaredL.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    children: '>',
    square: true,
    size: ButtonSize.L,
};
export const SquaredXL = Template.bind({});
SquaredXL.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    children: '>',
    square: true,
    size: ButtonSize.XL,
};
export const SizeS = Template.bind({});
SizeS.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    children: 'Test',
    size: ButtonSize.S,
};
export const SizeM = Template.bind({});
SizeM.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    children: 'Test',
    size: ButtonSize.M,
};
export const SizeL = Template.bind({});
SizeL.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    children: 'Test',
    size: ButtonSize.L,
};
export const SizeXL = Template.bind({});
SizeXL.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    children: 'Test',
    size: ButtonSize.XL,
};
export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
    theme: ButtonTheme.OUTLINE,
    children: 'Test',
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Disabled = Template.bind({});
Disabled.args = {
    theme: ButtonTheme.OUTLINE,
    children: 'Test',
    disabled: true,
};
