import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { ReducersMapObject } from '@reduxjs/toolkit';
// eslint-disable-next-line skillforce-fsd-plugin/layer-imports
// eslint-disable-next-line skillforce-fsd-plugin/layer-imports
import '@/app/styles/index.scss';
import i18nForTest from '@/shared/config/i18n/i18nForTest';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { Theme } from '@/shared/consts/theme';
import { ThemeProvider } from '@/app/providers/ThemeProvider';

export interface componentRenderOptions {
    route?: string;
    initialStoreState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
    theme?: Theme;
}

interface TestProviderProps {
    children: ReactNode;
    options?: componentRenderOptions;
}

export const TestProvider = ({ children, options = {} }: TestProviderProps) => {
    const {
        route = '/',
        asyncReducers,
        initialStoreState,
        theme = Theme.LIGHT,
    } = options;

    return (
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider
                asyncReducers={asyncReducers}
                initialState={initialStoreState as StateSchema}
            >
                <I18nextProvider i18n={i18nForTest}>
                    <ThemeProvider initialTheme={theme}>
                        <div className="app">{children}</div>
                    </ThemeProvider>
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    );
};

export const componentRender = (
    component: any,
    options: componentRenderOptions = {},
) => render(<TestProvider options={options}>{component}</TestProvider>);
