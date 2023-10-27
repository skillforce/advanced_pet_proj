import { getQueryParams } from './addQueryParams';

describe('shared/url/addQueryParams', () => {
    test('test with one param', () => {
        const params = getQueryParams({
            test: 'value',
        });
        expect(params).toBe('?test=value');
    });
    test('test with multiply params', () => {
        const params = getQueryParams({
            test: 'value',
            test1: 'value1',
            test2: 'value2',
        });
        expect(params).toBe('?test=value&test1=value1&test2=value2');
    });
    test('test with one undefined param', () => {
        const params = getQueryParams({
            test: undefined,
        });
        expect(params).toBe('?');
    });
});
