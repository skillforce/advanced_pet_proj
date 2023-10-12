import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ArticlesView } from 'entity/Article';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';

jest.mock('../fetchArticlesList/fetchArticlesList');
describe('fetchNextArticlesPage.test.ts', () => {
    test('test fetchNextArticlesPage thunk success', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                hasMore: true,
                isLoading: false,
                error: '',
                view: ArticlesView.BIG,
                limit: 5,
                entities: {},
                ids: [],
            },
        });
        await thunk.callThunk();
        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 });
    });
    test('test fetchNextArticlesPage thunk not Called hasMore:false', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                hasMore: false,
                isLoading: false,
                error: '',
                view: ArticlesView.BIG,
                limit: 5,
                entities: {},
                ids: [],
            },
        });
        await thunk.callThunk();
        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
    test('test fetchNextArticlesPage thunk not Called isLoading:true', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                hasMore: true,
                isLoading: true,
                error: '',
                view: ArticlesView.BIG,
                limit: 5,
                entities: {},
                ids: [],
            },
        });
        await thunk.callThunk();
        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
