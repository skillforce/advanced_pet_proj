import { Story } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { Suspense } from 'react';

export const SuspenseDecorator = (StoryComponent:Story) => (
    <Suspense fallback="">
        <StoryComponent />
    </Suspense>
);
