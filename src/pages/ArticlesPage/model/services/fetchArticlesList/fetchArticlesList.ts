import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article, ArticlesType } from '@/entity/Article';
import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams';
import {
    getArticlePageFiltersType,
    getArticlePageLimit,
    getArticlePageNum,
    getArticlePageOrder,
    getArticlePageSearchText,
    getArticlePageSort,
} from '../../selectors/articlePageSelectors/articlePageSelectors';

interface FetchArticlesListProps {
    replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
    Article[],
    FetchArticlesListProps,
    ThunkConfig<string>
>('articlesPage/fetchArticlesList', async (args, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;
    const limit = getArticlePageLimit(getState());
    const sort = getArticlePageSort(getState());
    const order = getArticlePageOrder(getState());
    const searchText = getArticlePageSearchText(getState());
    const page = getArticlePageNum(getState());
    const type = getArticlePageFiltersType(getState());
    try {
        addQueryParams({
            sort,
            order,
            searchText,
            type,
        });
        const response = await extra.api.get<Article[]>('/articles', {
            params: {
                _expand: 'user',
                _page: page,
                _limit: limit,
                _sort: sort,
                _order: order,
                q: searchText ?? '',
                type: type === ArticlesType.ALL ? undefined : type,
            },
        });
        if (!response.data) {
            throw new Error();
        }
        return response.data;
    } catch (error) {
        return rejectWithValue('error');
    }
});
