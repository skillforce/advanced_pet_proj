import { Story } from '@storybook/react';
// eslint-disable-next-line skillforce-fsd-plugin/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme } from '@/shared/consts/theme';

export const ThemeDecorator = (theme:Theme = Theme.LIGHT) => (StoryComponent:Story) => (
    <ThemeProvider initialTheme={theme}>
        {/* `app ${theme}` was removed as is not compatible with theme addon */}
        <div className="app">
            <StoryComponent />
        </div>
    </ThemeProvider>
);
