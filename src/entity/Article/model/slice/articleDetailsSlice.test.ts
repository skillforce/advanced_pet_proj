import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { articleDetailsActions, articleDetailsReducer } from '../slice/articleDetailsSlice';
import {
    ArticlesBlocksType, ArticlesType, Article,
} from '../types/article';
import {
    ArticleDetailsSchema,
} from '../types/articleDetailsSchema';

const article: Article = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    user: {
        id: '1',
        username: 'Denis Tatarinov',
        avatar: 'https://carnegiemnh.org/wp-content/uploads/2019/08/efcb18c281253ee89c538dd9758aee8836cd1d71.png',
    },
    createdAt: '26.02.2022',
    type: [ArticlesType.IT],
    blocks: [
        {
            id: '1',
            type: ArticlesBlocksType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
    ],
};
describe('ArticleSlice test', () => {
    test('set is loading', () => {
        const state: DeepPartial<ArticleDetailsSchema> = { isLoading: undefined };
        expect(articleDetailsReducer(state as ArticleDetailsSchema, articleDetailsActions.setIsLoading(true)))
            .toEqual({ isLoading: true });
    });
    test('set error test', () => {
        const state: DeepPartial<ArticleDetailsSchema> = { error: undefined };
        expect(articleDetailsReducer(state as ArticleDetailsSchema, articleDetailsActions.setError('error!')))
            .toEqual({ error: 'error!' });
    });
    test('set article data test', () => {
        const state: DeepPartial<ArticleDetailsSchema> = { data: undefined };
        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            articleDetailsActions.setArticleDetailsData(article),
        )).toEqual({ data: article });
    });
    test('test fetch article pending', () => {
        const state: ArticleDetailsSchema = {
            isLoading: false,
            error: 'Error!',
        };
        expect(articleDetailsReducer(state as ArticleDetailsSchema, fetchArticleById.pending))
            .toEqual({
                error: undefined,
                isLoading: true,
            });
    });
    test('test update article data fulfilled', () => {
        const state: ArticleDetailsSchema = {
            isLoading: true,
            error: 'Error!',
            data: undefined,
        };
        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.fulfilled(article, '', '', null),
        ))
            .toEqual({
                error: undefined,
                isLoading: false,
                data: article,
            });
    });
});
