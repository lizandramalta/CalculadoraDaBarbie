import React, { useState } from 'react';
import * as S from './styles/CalculatorStyles';
import { addNumbers } from './styles/Addition';

function Calculator() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleNumberClick = (number: string) => {
    if (result) {
      setResult('');
      setExpression(result);
      setNumber1(result);
      setNumber2(number);
    } else if (!number1) {
      setNumber1(number);
      setExpression(`(${number})`);
    } else if (!number2) {
      setNumber2(number);
      setExpression(`(${number1}) + (${number})`);
    }
  };

  const handleAddition = () => {
    if (number1 && number2) {
      const sum = addNumbers(Number(number1), Number(number2));
      setResult(sum.toString());
      setExpression(`(${number1}) + (${number2}) = ${sum}`);
      setNumber1(sum.toString());
      setNumber2('');
    }
  };

  const handleClear = () => {
    setResult('');
    setNumber1('');
    setNumber2('');
    setExpression('');
  };

  return (
    <S.Container>
      <S.Prompt>{result || expression || 'Calculator'}</S.Prompt>
      <S.ButtonsContainer>
        <S.NumberButtonsContainer>
          <S.ACButton onClick={handleClear}>AC</S.ACButton>
          <S.NumberNormalButton onClick={() => handleNumberClick('7')}>7</S.NumberNormalButton>
          <S.NumberNormalButton onClick={() => handleNumberClick('8')}>8</S.NumberNormalButton>
          <S.NumberNormalButton onClick={() => handleNumberClick('9')}>9</S.NumberNormalButton>
          <S.NumberNormalButton onClick={() => handleNumberClick('4')}>4</S.NumberNormalButton>
          <S.NumberNormalButton onClick={() => handleNumberClick('5')}>5</S.NumberNormalButton>
          <S.NumberNormalButton onClick={() => handleNumberClick('6')}>6</S.NumberNormalButton>
          <S.NumberNormalButton onClick={() => handleNumberClick('1')}>1</S.NumberNormalButton>
          <S.NumberNormalButton onClick={() => handleNumberClick('2')}>2</S.NumberNormalButton>
          <S.NumberNormalButton onClick={() => handleNumberClick('3')}>3</S.NumberNormalButton>
          <S.ZeroButton onClick={() => handleNumberClick('0')}>0</S.ZeroButton>
          <S.NumberNormalButton>,</S.NumberNormalButton>
        </S.NumberButtonsContainer>
        <S.OperationButtonsContainer>
          <S.OperationButton>÷</S.OperationButton>
          <S.OperationButton>×</S.OperationButton>
          <S.OperationButton>-</S.OperationButton>
          <S.OperationButton onClick={handleAddition}>+</S.OperationButton>
          <S.OperationButton onClick={handleAddition}>=</S.OperationButton>
        </S.OperationButtonsContainer>
      </S.ButtonsContainer>
    </S.Container>
  );
}

export default Calculator;
