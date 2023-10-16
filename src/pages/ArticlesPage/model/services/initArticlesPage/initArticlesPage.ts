import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlePageInited, getArticlePageNum } from '../../selectors/articlePageSelectors/articlePageSelectors';
import { articlePageActions } from '../../slices/ArticlePageSlice';
import { fetchArticlesList } from '../../services/fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/initArticlesPage',
    async (_, thunkAPI) => {
        const { getState, dispatch } = thunkAPI;
        const _inited = getArticlePageInited(getState());
        const page = getArticlePageNum(getState()) || 1;

        if (!_inited) {
            dispatch(articlePageActions.initialState());
            dispatch(fetchArticlesList({
                page,
            }));
        }
    },
);
