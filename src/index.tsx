import { createRoot } from 'react-dom/client';
import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { PageLoader } from '@/widgets/PageLoader';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { ThemeProvider } from './app/providers/ThemeProvider';
import '@/app/styles/index.scss';
import '@/shared/config/i18n/i18n';
import App from './app/App';

const container = document.getElementById('root');
if (!container) {
    throw new Error('container wasn\'t defined');
}
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <Suspense fallback={<PageLoader />}>
                        <App />
                    </Suspense>
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
);
