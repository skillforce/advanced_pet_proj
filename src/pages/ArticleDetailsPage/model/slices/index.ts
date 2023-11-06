import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types/index';
import {
    articleDetailsPageRecommendationsReducer,
} from '../../model/slices/ArticleDetailsPageRecommendationsSlice';
import { articleDetailsCommentsReducer } from '../../model/slices/ArticleDetailsCommentsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    recommendations: articleDetailsPageRecommendationsReducer,
    comments: articleDetailsCommentsReducer,
});
