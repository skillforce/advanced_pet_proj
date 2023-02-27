import { render } from 'react-dom';
import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { PageLoader } from 'widgets/PageLoader';
import { ThemeProvider } from './app/providers/ThemeProvider';
import 'app/styles/index.scss';
import 'shared/config/i18n/i18n';
import App from './app/App';

render(
    <BrowserRouter>

        <ErrorBoundary>
            <ThemeProvider>
                <Suspense fallback={<PageLoader />}>
                    <App />
                </Suspense>
            </ThemeProvider>
        </ErrorBoundary>

    </BrowserRouter>,
    document.getElementById('root'),
);
