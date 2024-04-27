import { Story } from '@storybook/react';
// eslint-disable-next-line skillforce-fsd-plugin/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme } from '@/shared/consts/theme';

export const ThemeDecorator = (theme:Theme = Theme.LIGHT) => (StoryComponent:Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
);
