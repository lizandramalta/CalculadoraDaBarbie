import { addNumbers } from '../src/components/styles/Addition';

// Objetivo: Adição de 2 números inteiros
test('Deve somar corretamente dois números inteiros', () => {
    const number1 = 3;
    const number2 = 7;
    const result = addNumbers(number1, number2);
    const expectedExpression = '(3) + (7)';
    expect(result).toBe(expectedExpression);
  });
  
  test('Deve exibir a expressão correta no visor ao fazer a adição', () => {
    const number1 = 2;
    const number2 = 6;
    const result = addNumbers(number1, number2);
    const expectedExpression = '(2) + (6)';
    expect(result).toBe(expectedExpression);
});
  
  
  
  