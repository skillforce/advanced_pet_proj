import { render } from 'react-dom';
import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader';
import { ThemeProvider } from './app/providers/ThemeProvider';
import 'shared/config/i18n/i18n';
import App from './app/App';

render(
    <BrowserRouter>
        <ThemeProvider>
            <Suspense fallback={<PageLoader />}>
                <App />
            </Suspense>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);
