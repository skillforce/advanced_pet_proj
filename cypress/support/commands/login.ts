import { AUTH_USER_LOCAL_STORAGE } from '../../../src/shared/consts/localStorage';

export function loginCypress(email:string = 'Denis', password:string = '12345') {
    cy.request({
        method: 'POST',
        url: 'http://localhost:8000/login',
        body: {
            username: email,
            password,
        },
    }).then(({ body }) => {
        window.localStorage.setItem(AUTH_USER_LOCAL_STORAGE, JSON.stringify(body));
        cy.visit('/');
    });
}
