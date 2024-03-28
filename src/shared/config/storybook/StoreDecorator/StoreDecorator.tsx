import { Story } from '@storybook/react';
import React from 'react';

// TODO
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
// eslint-disable-next-line skillforce-fsd-plugin/public-api-imports
import { loginReducer } from '@/features/AuthByUserName/model/slice/LoginSlice';
import { ReducersListSchema } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
// eslint-disable-next-line skillforce-fsd-plugin/public-api-imports
import { articleDetailsReducer } from '@/entity/Article/model/slice/articleDetailsSlice';
// eslint-disable-next-line skillforce-fsd-plugin/public-api-imports
import { addCommentFormReducer } from '@/features/addCommentForm/model/slices/addCommentFormSlice';
// eslint-disable-next-line skillforce-fsd-plugin/public-api-imports
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/model/slices';
// eslint-disable-next-line skillforce-fsd-plugin/public-api-imports
import { profileReducer } from '@/features/editableProfileCard/model/slice/profileSlice';

const defaultAsyncReducers: ReducersListSchema = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer,
};

export const StoreDecorator = (
    initialState:DeepPartial<StateSchema>,
    asyncReducers?:ReducersListSchema,
) => (StoryComponent:Story) => (
    <StoreProvider
        initialState={initialState as StateSchema}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
        <StoryComponent />
    </StoreProvider>
);
