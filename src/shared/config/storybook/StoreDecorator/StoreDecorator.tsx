import { Story } from '@storybook/react';
import React from 'react';

import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { ReducersListSchema } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/testing';
import { profileReducer } from '@/features/editableProfileCard/testing';
import { loginReducer } from '@/features/AuthByUserName/testing';
import { addCommentFormReducer } from '@/features/addCommentForm/testing';
import { articleDetailsReducer } from '@/entity/Article/testing';

const defaultAsyncReducers: ReducersListSchema = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer,
};

export const StoreDecorator =
    (
        initialState: DeepPartial<StateSchema>,
        asyncReducers?: ReducersListSchema,
    ) =>
    (StoryComponent: Story) => (
        <StoreProvider
            initialState={initialState as StateSchema}
            asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
        >
            <StoryComponent />
        </StoreProvider>
    );
