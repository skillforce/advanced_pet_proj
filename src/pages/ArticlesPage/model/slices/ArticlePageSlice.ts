import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import {
    Article, ArticlesView, ArticleSortField, ArticlesType,
} from '@/entity/Article';
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from '@/shared/consts/localStorage';
import { SortOrder } from '@/shared/types/sort';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { ArticlePageSchema } from '../types/articlePageSchema';

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});
export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state?.articlesPage || articlesAdapter.getInitialState(),
);

const articlePageSlice = createSlice({
    name: 'articlePageSlice',
    initialState: articlesAdapter.getInitialState<ArticlePageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        limit: 9,
        entities: {},
        view: ArticlesView.SMALL,
        page: 1,
        hasMore: true,
        _inited: false,
        order: 'asc',
        sort: ArticleSortField.CREATED,
        searchText: '',
        type: ArticlesType.ALL,
    }),
    reducers: {
        setView: (state, action:PayloadAction<ArticlesView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload);
        },
        setPage: (state, action:PayloadAction<number>) => {
            state.page = action.payload;
        },
        setSearchText: (state, action:PayloadAction<string>) => {
            state.searchText = action.payload;
        },
        setOrder: (state, action:PayloadAction<SortOrder>) => {
            state.order = action.payload;
        },
        setType: (state, action:PayloadAction<ArticlesType>) => {
            state.type = action.payload;
        },
        setSort: (state, action:PayloadAction<ArticleSortField>) => {
            state.sort = action.payload;
        },
        initialState: (state) => {
            const view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticlesView;
            state.view = view;
            state._inited = true;
            state.limit = view === ArticlesView.BIG ? 4 : 9;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state, action) => {
                state.isLoading = true;
                state.error = undefined;
                if (action.meta.arg.replace) {
                    articlesAdapter.removeAll(state);
                }
            })
            .addCase(fetchArticlesList.rejected, (state, action:PayloadAction<string|undefined>) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(fetchArticlesList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasMore = action.payload.length >= state.limit;
                if (action.meta.arg.replace) {
                    articlesAdapter.setAll(state, action.payload);
                } else {
                    articlesAdapter.addMany(state, action.payload);
                }
            });
    },
});

export const { reducer: articlePageReducer } = articlePageSlice;
export const { actions: articlePageActions } = articlePageSlice;
