import styled from "styled-components";
import colors from "../../assets/colors";

export const InputWrapper = styled.View`
    margin-top: auto;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    margin: 20px auto;
`

export const InputComponent = styled.TextInput`
    border-width: 3px;
    border-color: ${colors.pink};
    background: ${colors.white};
    color: ${colors.black};
    padding: 5px 10px;
    padding-top: 10px;
    font-family: 'PressStart2P-Regular';
`

export const Label = styled.Text`
    background: ${colors.pink};
    font-family: 'PressStart2P-Regular';
    padding: 6px;
    padding-bottom: 0;
    text-align: center;
    color: ${colors.white};
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`