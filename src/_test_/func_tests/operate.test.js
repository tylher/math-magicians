import operate from '../../logic/operate';

describe('Calculator operation tests', () => {
  test('add two numbers', () => {
    expect(operate(17, 15, '+')).toBe('32');
  });
});
