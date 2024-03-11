import React from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { ReducersMapObject } from '@reduxjs/toolkit';
import i18nForTest from '@/shared/config/i18n/i18nForTest';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';

export interface componentRenderOptions{
    route?:string
    initialStoreState?:DeepPartial<StateSchema>
    asyncReducers?:DeepPartial<ReducersMapObject<StateSchema>>

}

export const componentRender = (component:any, options:componentRenderOptions = {}) => {
    const {
        route = '/',
        initialStoreState = { counter: { value: 0 } },
        asyncReducers,
    } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider
                asyncReducers={asyncReducers}
                initialState={initialStoreState as StateSchema}
            >
                <I18nextProvider i18n={i18nForTest}>
                    {component}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>,
    );
};
