import styled from "styled-components";
import colors from '../../assets/colors'; 

export const MenuWrapper = styled.View`
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100px;
    background: ${colors.pink};
`

export const SubMenuItem = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
`

export const SubMenuItemText = styled.Text`
    color: ${colors.white};
    margin-left: 10px;
    font-size: 16px;
    font-family: 'PressStart2P-Regular';
    padding-top: 5px;
`