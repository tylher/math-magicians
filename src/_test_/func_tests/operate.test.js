import operate from '../../logic/operate';

describe('Calculator operation tests', () => {
  test('add two numbers', () => {
    expect(operate(17, 15, '+')).toBe('32');
  });

  test('multiply two numbers', () => {
    expect(operate(8, 5, 'x')).toBe('40');
  });

  test('Divide a number by another', () => {
    expect(operate(30, 3, '÷')).toBe('10');
  });

  test('Subtract a number from another', () => {
    expect(operate(9, 5, '-')).toBe('4');
  });

  test('Modulo of a number', () => {
    expect(operate(10, 5, '%')).toBe('0');
  });

  test('Error when zero divides a number', () => {
    expect(operate(19, 0, '÷')).toBe('Can\'t divide by 0.');
  });

  test('Error when n modulo zero', () => {
    expect(operate(39, 0, '%')).toBe('Can\'t find modulo as can\'t divide by 0.');
  });
});
