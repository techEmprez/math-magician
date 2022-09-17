import calculate from '../components/logic/calculate';
import operate from '../components/logic/operate';

describe('calculation', () => {
  test('calculate with button of AC', () => {
    const objec = {
      total: null,
      next: null,
      operation: null,
    };

    expect(calculate(objec, 'AC')).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  test('Should be equal sign =', () => {
    const objet = {
      total: '5',
      next: '0',
      operation: '+',
    };

    expect(calculate(objet, '=')).toEqual({
      total: operate(objet.total, objet.next, objet.operation),
      next: null,
      operation: null,
    });
  });

  test('Should calculate be .', () => {
    const objec = {
      total: null,
      next: '5',
      operation: null,
    };

    expect(calculate(objec, '.')).toEqual({
      total: null,
      next: '5.',
      operation: null,
    });
  });
});
