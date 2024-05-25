import { addDecorator } from '@storybook/react';
import {StyleDecorator} from "@/shared/config/storybook/StyleDecorator/StyleDecorator";
import {RouterDecorator} from "@/shared/config/storybook/RouterDecorator/RouterDecorator";
import {ThemeDecorator} from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {SuspenseDecorator} from "@/shared/config/storybook/SuspenseDecorator/SuspenseDecorator";
import {Theme} from "@/shared/consts/theme";

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    layout:'fullscreen',
    themes: {
        default: 'light',
        list: [
            { name: 'light', class: Theme.LIGHT, color: '#ffffff' },
            { name: 'dark', class: Theme.DARK, color: '#000000' },
            { name: 'orange', class: Theme.ORANGE, color: '#ffb005' },
        ],
    },
};
addDecorator(StyleDecorator);
addDecorator(RouterDecorator);
addDecorator(ThemeDecorator());
addDecorator(SuspenseDecorator);
