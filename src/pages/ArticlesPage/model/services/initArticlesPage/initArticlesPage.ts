import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { SortOrder } from '@/shared/types';
import { ArticleSortField, ArticlesType } from '@/entity/Article';
import { getArticlePageInited } from '../../selectors/articlePageSelectors/articlePageSelectors';
import { articlePageActions } from '../../slices/ArticlePageSlice';
import { fetchArticlesList } from '../../services/fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
    'articlesPage/initArticlesPage',
    async (searchParams, thunkAPI) => {
        const { getState, dispatch } = thunkAPI;
        const _inited = getArticlePageInited(getState());

        if (!_inited) {
            const orderFromURL = searchParams.get('order') as SortOrder;
            const sortFromURL = searchParams.get('sort') as ArticleSortField;
            const type = searchParams.get('type') as ArticlesType;
            const searchTextFromURL = searchParams.get('searchText');

            if (orderFromURL) {
                dispatch(articlePageActions.setOrder(orderFromURL));
            }
            if (sortFromURL) {
                dispatch(articlePageActions.setSort(sortFromURL));
            }
            if (searchTextFromURL) {
                dispatch(articlePageActions.setSearchText(searchTextFromURL));
            }
            if (type) {
                dispatch(articlePageActions.setType(type));
            }
            dispatch(articlePageActions.initialState());
            dispatch(fetchArticlesList({}));
        }
    },
);
