import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ArticlesView } from '@/entity/Article';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { initArticlesPage } from './initArticlesPage';

jest.mock('../fetchArticlesList/fetchArticlesList');
describe('initArticlesPage.test.ts', () => {
    test('test initArticlesPage thunk success', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                page: 1,
                hasMore: true,
                isLoading: false,
                error: '',
                view: ArticlesView.BIG,
                limit: 5,
                entities: {},
                ids: [],
                _inited: false,
            },
        });
        await thunk.callThunk({} as URLSearchParams);
        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
    test('test initArticlesPage thunk Called _inited:true', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                page: 2,
                hasMore: false,
                isLoading: false,
                error: '',
                view: ArticlesView.BIG,
                limit: 5,
                entities: {},
                ids: [],
                _inited: true,
            },
        });
        await thunk.callThunk({} as URLSearchParams);
        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
