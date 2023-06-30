import styled from 'styled-components';

export const Container = styled.div`
    width: 380px;
    height: 520px;
    border-radius: 10px;

`

export const Prompt = styled.div`
    width: 380px;
    height: 130px;
    background-color: #CB4682;
    border-radius: 10px 10px 0px 0px;
`

export const ButtonsContainer = styled.div`
    width: 380px;
    height: 100%;
    border-radius: 0px 0px 10px 10px;
    display: flex;
    flex-direction: row;
    background-color: #ffffff;
`

export const NumberButtonsContainer = styled.div`
    width: 72%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: #ffffff;
    border-radius: 0px 0px 0px 10px;
`
export const OperationButtonsContainer = styled.div`
    width: 29%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: red;
    border-radius: 0px 0px 10px 0px;
`

export const ACButton = styled.button`
    width: 100%;
    height: 20%;
    background-color: #F0F0F0;
    border: 1px solid #B98DA1;
    font-size: 40px;
`

export const NumberNormalButton = styled.button`
    width: calc(100%/3);
    height: 20%;
    background-color: #F0F0F0;
    border: none;
    border: 1px solid #B98DA1;
    font-size: 40px;
`

export const ZeroButton = styled.button`
    width: calc((100%/3)*2);
    height: 20%;
    background-color: #F0F0F0;
    border: 1px solid #B98DA1;
    border-radius: 0px 0px 0px 10px;
    font-size: 40px;
`

export const OperationButton = styled.button`
    width: 100%;
    height: 20%;
    background-color: #E1657F;
    border: none;
    border: 1px solid #B98DA1;
    font-size: 40px;
`