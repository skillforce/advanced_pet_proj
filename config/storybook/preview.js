import { addDecorator } from '@storybook/react';
import {StyleDecorator} from "@/shared/config/storybook/StyleDecorator/StyleDecorator";
import {RouterDecorator} from "@/shared/config/storybook/RouterDecorator/RouterDecorator";
import {ThemeDecorator} from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {SuspenseDecorator} from "@/shared/config/storybook/SuspenseDecorator/SuspenseDecorator";

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    layout:'fullscreen'
};
addDecorator(StyleDecorator);
addDecorator(RouterDecorator);
addDecorator(ThemeDecorator());
addDecorator(SuspenseDecorator);
