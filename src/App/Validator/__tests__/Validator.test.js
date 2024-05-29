import Validator from "../Validator";

describe('Тестируем метод validateUsername класса Validator', () => {
    it('имя персонажа должно быть не короче двух символов №1', () => {
        expect(Validator.validateUsername('Luka')).toBeTruthy();
    });

    it('имя персонажа должно быть не короче двух символов №2', () => {
        expect(Validator.validateUsername('L')).toBeFalsy();
    });

    it('имя персонажа должно быть начинаться и заканчиваться на букву №1', () => {
        expect(Validator.validateUsername('Li')).toBeTruthy();
    });

    it('имя персонажа должно быть начинаться и заканчиваться на букву №2', () => {
        expect(Validator.validateUsername('-i')).toBeFalsy();
    });

    it('имя персонажа должно быть начинаться и заканчиваться на букву №3', () => {
        expect(Validator.validateUsername('Ko3')).toBeFalsy();
    });

    it('имя персонажа не должно содержать символы кроме букв, цифр, - и _ №1', () => {
        expect(Validator.validateUsername('John Doe')).toBeFalsy();
    });

    it('имя персонажа не должно содержать символы кроме букв, цифр, - и _ №2', () => {
        expect(Validator.validateUsername('John+Doe')).toBeFalsy();
    });

    it('имя персонажа не должно содержать символы кроме букв, цифр, - и _ №3', () => {
        expect(Validator.validateUsername('John,Doe')).toBeFalsy();
    });

    it('имя персонажа может содержать буквы, цифры, - и _ №1', () => {
        expect(Validator.validateUsername('John-Doe')).toBeTruthy();
    });

    it('имя персонажа может содержать буквы, цифры, - и _ №2', () => {
        expect(Validator.validateUsername('John_Doe')).toBeTruthy();
    });

    it('имя персонажа может содержать буквы, цифры, - и _ №3', () => {
        expect(Validator.validateUsername('J1o2h3n_D4o5e')).toBeTruthy();
    });

    it('имя персонажа может содержать буквы, цифры, - и _ №4', () => {
        expect(Validator.validateUsername('J1-2o3-4h5-6n')).toBeTruthy();
    });

    it('имя персонажа не должно содержать больше трёх цифр подряд №1', () => {
        expect(Validator.validateUsername('Ann123Scott')).toBeTruthy();
    });

    it('имя персонажа не должно содержать больше трёх цифр подряд №2', () => {
        expect(Validator.validateUsername('Ann1234Scott')).toBeFalsy();
    });

    it('имя персонажа не должно содержать больше трёх цифр подряд №3', () => {
        expect(Validator.validateUsername('Ann1234567890Scott')).toBeFalsy();
    });

    it('имя персонажа не должно содержать больше трёх цифр подряд №4', () => {
        expect(Validator.validateUsername('Ann123Scott123Mary123Ken')).toBeTruthy();
    });
});