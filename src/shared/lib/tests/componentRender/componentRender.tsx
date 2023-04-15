import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTest from 'shared/config/i18n/i18nForTest';
import { MemoryRouter } from 'react-router-dom';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export interface componentRenderOptions{
    route?:string
    initialStoreState?:DeepPartial<StateSchema>
}

export const componentRender = (component:any, options:componentRenderOptions = {}) => {
    const {
        route = '/',
        initialStoreState = { counter: { value: 0 } },
    } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider initialState={initialStoreState as StateSchema}>
                <I18nextProvider i18n={i18nForTest}>
                    {component}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>,
    );
};
