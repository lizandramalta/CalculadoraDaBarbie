import React, { useState } from 'react';
import * as S from './styles/CalculatorStyles';

const Calculator: React.FC = () => {
    const [displayValue, setDisplayValue] = useState('0');
  
    const handleClick = (value: string) => {
      if (displayValue === '0') {
        setDisplayValue(value);
      } else {
        setDisplayValue(displayValue + value);
      }
    };
  
    const calculateResult = () => {
      try {
        const values = displayValue.split('/');
        const result = parseInt(values[0]) / parseInt(values[1]);
        setDisplayValue(result.toString());
      } catch (error) {
        setDisplayValue('Error');
      }
    };
  
    const clearDisplay = () => {
      setDisplayValue('0');
    };
  
    return (
      <S.Container>
        <S.Prompt data-testid="display-value">{displayValue}</S.Prompt>
      <S.ButtonsContainer>
        <S.NumberButtonsContainer>
          <S.ACButton onClick={clearDisplay}>AC</S.ACButton>
          <S.NumberNormalButton onClick={() => handleClick('7')}>
            7
          </S.NumberNormalButton>
          <S.NumberNormalButton onClick={() => handleClick('8')}>
            8
          </S.NumberNormalButton>
          <S.NumberNormalButton onClick={() => handleClick('9')}>
            9
          </S.NumberNormalButton>
          <S.NumberNormalButton onClick={() => handleClick('4')}>
            4
          </S.NumberNormalButton>
          <S.NumberNormalButton onClick={() => handleClick('5')}>
            5
          </S.NumberNormalButton>
          <S.NumberNormalButton onClick={() => handleClick('6')}>
            6
          </S.NumberNormalButton>
          <S.NumberNormalButton onClick={() => handleClick('1')}>
            1
          </S.NumberNormalButton>
          <S.NumberNormalButton onClick={() => handleClick('2')}>
            2
          </S.NumberNormalButton>
          <S.NumberNormalButton onClick={() => handleClick('3')}>
            3
          </S.NumberNormalButton>
          <S.ZeroButton onClick={() => handleClick('0')}>
            0
          </S.ZeroButton>
          <S.NumberNormalButton onClick={() => handleClick('.')}>
            ,
          </S.NumberNormalButton>
        </S.NumberButtonsContainer>
        <S.OperationButtonsContainer>
          <S.OperationButton onClick={() => handleClick('/')}>
            ÷
          </S.OperationButton>
          <S.OperationButton onClick={() => handleClick('×')}>
            ×
          </S.OperationButton>
          <S.OperationButton onClick={() => handleClick('-')}>
            -
          </S.OperationButton>
          <S.OperationButton onClick={() => handleClick('+')}>
            +
          </S.OperationButton>
          <S.OperationButton onClick={calculateResult}>
            =
          </S.OperationButton>
        </S.OperationButtonsContainer>
      </S.ButtonsContainer>
    </S.Container>
  );
};

export default Calculator;



