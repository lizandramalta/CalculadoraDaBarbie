import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from './components/Calculator';
import { division } from './components/Division';
test('display shows clicked numbers', () => {
  render(<Calculator />);
  fireEvent.click(screen.getByText('7'));
  fireEvent.click(screen.getByText('8'));
  fireEvent.click(screen.getByText('9'));
  expect(screen.queryByText('789')).toBeTruthy();
});



test('Divide 6 by 3 return 2', ()=>{
    expect(division(6,2)).toBe(3);
});

test('Divide -4 by -2 return 2', ()=>{
    expect(division(-4,-2)).toBe(2);
});
test('Divide 13.5 by 2.5 return ', ()=>{
    expect(division(13.5,2.5)).toBe(5.4);
});