import operate from '../components/logic/operate';

describe('Addition', () => {
  // test case: all numbers
  test('Add 3 to 2', () => {
    expect(operate(3, 2, '+')).toBe('5');
  });
  // test case when one is 0
  test('Add 3 to 0', () => {
    expect(operate(3, 0, '+')).toBe('3');
  });

  test('Add 3 to -1', () => {
    expect(operate(3, -1, '+')).toBe('2');
  });
});

describe('Subtraction', () => {
  test('subtract 3 from 2', () => {
    expect(operate(3, 2, '-')).toBe('1');
  });

  test('Subtract 3 from 0', () => {
    expect(operate(3, 0, '-')).toBe('3');
  });

  test('subtract 3 from -1', () => {
    expect(operate(3, -2, '-')).toBe('5');
  });
});

describe('Multiplication', () => {
  test('Multiply 3 by 2', () => {
    expect(operate(3, 2, '*')).toBe('6');
  });

  test('multiply 3 by 0', () => {
    expect(operate(3, 0, '*')).toBe('0');
  });

  test('multiply 3 by -1', () => {
    expect(operate(3, -1, '*')).toBe('-3');
  });
});

describe('Division', () => {
  test('Divide 6 by 2', () => {
    expect(operate(6, 2, '÷')).toBe('3');
  });

  test('divide 6 by 0', () => {
    expect(operate(6, 0, '÷')).toBe("Can't divide by 0.");
  });

  test('divide 6 by -1', () => {
    expect(operate(6, -1, '÷')).toBe('-6');
  });
});
