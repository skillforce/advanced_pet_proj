import { AUTH_USER_LOCAL_STORAGE } from '../../../src/shared/consts/localStorage';
import { Article } from '../../../src/entity/Article';

const defaultArticle = {
    title: 'Экономическая статья - ИНФЛЯЦИЯ!',
    subtitle: 'Экономика',
    img: 'https://www.mirea.ru/upload/iblock/7cf/vvp_rf2018_1.jpg',
    views: 1022,
    createdAt: '26.02.2022',
    userId: '1',
    type: [
        'ECONOMICS',
    ],
    blocks: [],
};

export function createArticle(newArticle?:Article) {
    return cy.request({
        method: 'POST',
        url: 'http://localhost:8000/articles',
        headers: {
            Authorization: `Bearer ${AUTH_USER_LOCAL_STORAGE}`,
        },
        body: newArticle ?? defaultArticle,
    }).then((resp) => resp.body);
}

export function removeArticle(articleId: string) {
    return cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: {
            Authorization: `Bearer ${AUTH_USER_LOCAL_STORAGE}`,
        },
    });
}

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(newArticle?:Article): Chainable<Article>
            removeArticle(articleId: string): Chainable<void>
        }
    }
}
