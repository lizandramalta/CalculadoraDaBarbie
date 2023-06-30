import * as S from './styles/CalculatorStyles'

function Calculator(){
    return <S.Container>
        <S.Prompt/>
        <S.ButtonsContainer>
            <S.NumberButtonsContainer>
                <S.ACButton>AC</S.ACButton>
                <S.NumberNormalButton>7</S.NumberNormalButton>
                <S.NumberNormalButton>8</S.NumberNormalButton>
                <S.NumberNormalButton>9</S.NumberNormalButton>
                <S.NumberNormalButton>4</S.NumberNormalButton>
                <S.NumberNormalButton>5</S.NumberNormalButton>
                <S.NumberNormalButton>6</S.NumberNormalButton>
                <S.NumberNormalButton>1</S.NumberNormalButton>
                <S.NumberNormalButton>2</S.NumberNormalButton>
                <S.NumberNormalButton>3</S.NumberNormalButton>
                <S.ZeroButton>0</S.ZeroButton>
                <S.NumberNormalButton>,</S.NumberNormalButton>
            </S.NumberButtonsContainer>
            <S.OperationButtonsContainer>
                <S.OperationButton>÷</S.OperationButton>
                <S.OperationButton>×</S.OperationButton>
                <S.OperationButton>-</S.OperationButton>
                <S.OperationButton>+</S.OperationButton>
                <S.OperationButton>=</S.OperationButton>
            </S.OperationButtonsContainer>
        </S.ButtonsContainer>
    </S.Container>
}

export default Calculator