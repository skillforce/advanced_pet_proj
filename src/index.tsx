import {render} from 'react-dom';
import React, {Suspense} from 'react';
import App from './app/App';
import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider} from './app/providers/ThemeProvider';
import 'shared/config/i18n/i18n';



render(
    <BrowserRouter>
        <ThemeProvider>
            <Suspense fallback={<div>...loading</div>}>
            <App/>
            </Suspense>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
)
