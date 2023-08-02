import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entity/User';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entity/Comment';
import { getArticleDetailsData } from 'entity/Article';
import { getCommentText } from '../../selectors/GetCommentText';

export const sendComment = createAsyncThunk<Comment, void, ThunkConfig<string>>(
    'addCommentForm/sendComment',
    async (_, thunkAPI) => {
        const {
            extra, getState, rejectWithValue,
        } = thunkAPI;
        const userData = getUserAuthData(getState());
        const text = getCommentText(getState());
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

            return response.data;
        } catch (error) {
            return rejectWithValue('error');
        }
    },
);
