import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('only one argument', () => {
        const argument = 'onlyOneClass';

        expect(classNames(argument)).toBe(argument);
    });
    test('main className with two mods in true condition', () => {
        const argument = 'onlyOneClass';
        const mods = { 'modsClass1': true, 'modsClass2': true };

        expect(classNames(argument, mods)).toBe('onlyOneClass modsClass1 modsClass2');
    });
    test('main className with two mods(one in false condition)', () => {
        const argument = 'onlyOneClass';
        const mods = { 'modsClass1': true, 'modsClass2': false };

        expect(classNames(argument, mods)).toBe('onlyOneClass modsClass1');
    });
    test('main className with two mods(one in undefined condition)', () => {
        const argument = 'onlyOneClass';
        const mods:any = { 'modsClass1': true, 'modsClass2': undefined };

        expect(classNames(argument, mods)).toBe('onlyOneClass modsClass1');
    });
    test('main className with two mods and one additional className', () => {
        const argument = 'onlyOneClass';
        const additionalClassName = ['onlyOneAdditionalClass'];
        const mods = { 'modsClass1': true, 'modsClass2': true };
        const expected = 'onlyOneClass modsClass1 modsClass2 onlyOneAdditionalClass';

        expect(classNames(argument, mods, additionalClassName)).toBe(expected);
    });
});
