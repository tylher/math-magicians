import calculate from '../../logic/calculate';

describe('Test calculator', () => {
  let calcObj = {};
  test('initiate calculator', () => {
    calcObj = calculate(calcObj, 'AC');
    expect(calcObj).toEqual({
      next: '0',
      operation: null,
      total: null,
    });
  });
  test('button equals 2', () => {
    calcObj = calculate(calcObj, '2');
    expect(calcObj).toEqual({
      next: '2',
      total: null,
    });
  });

  test('button equals 2', () => {
    calcObj = calculate(calcObj, '2');
    expect(calcObj).toEqual({
      next: '22',
      total: null,
    });
  });

  test('button equals +', () => {
    calcObj = calculate(calcObj, '+');
    expect(calcObj).toEqual({
      next: null,
      total: '22',
      operation: '+',
    });
  });

  test('button equals x', () => {
    calcObj = calculate(calcObj, 'x');
    expect(calcObj).toEqual({
      next: null,
      total: '22',
      operation: 'x',
    });
  });

  test('button equals 5', () => {
    calcObj = calculate(calcObj, '5');
    expect(calcObj).toEqual({
      next: '5',
      total: '22',
      operation: 'x',
    });
  });

  test('button equals =', () => {
    calcObj = calculate(calcObj, '=');
    expect(calcObj).toEqual({
      next: null,
      total: '110',
      operation: null,
    });
  });
});
