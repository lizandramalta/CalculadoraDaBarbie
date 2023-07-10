import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from './src/components/Calculator.test';

describe('Calculadora - Soma de Dois Inteiros', () => {
  test('Deve exibir a adição de dois números inteiros no visor da calculadora', () => {
    render(<Calculator />);

    const number1Button = screen.getByText('3');
    const number2Button = screen.getByText('7');
    const additionButton = screen.getByText('+');

    fireEvent.click(number1Button);
    fireEvent.click(additionButton);
    fireEvent.click(number2Button);

    const display = screen.getByText('(3) + (7)');
    expect(display).toBeInTheDocument();
  });
});