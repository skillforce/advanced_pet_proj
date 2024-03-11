import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entity/User';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Comment } from '@/entity/Comment';
import { getArticleDetailsData } from '@/entity/Article';
import { fetchCommentsByArticleId } from '../../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
    'articleDetails/addCommentForArticle',
    async (text, thunkAPI) => {
        const {
            extra, getState, rejectWithValue, dispatch,
        } = thunkAPI;
        const userData = getUserAuthData(getState());
        const article = getArticleDetailsData(getState());

        if (!userData || !text || !article) {
            return rejectWithValue('no data');
        }
        try {
            const response = await extra.api.post<Comment>('/comments', {
                articleId: article.id,
                userId: userData.id,
                text,
            });
            if (!response.data) {
                throw new Error();
            }
            dispatch(fetchCommentsByArticleId(article.id));
            return response.data;
        } catch (error) {
            return rejectWithValue('error');
        }
    },
);
