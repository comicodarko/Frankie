import styled from "styled-components";
import colors from "../../../../assets/colors";

export const MenuButtonWrapper = styled.View`
    height: 100%;
    align-items: center;
    justify-content: center;
`

export const Touchable = styled.TouchableOpacity`
    border-width: 2px;
    border-color: ${colors.blue};
    padding: 10px;
    border-radius: 10px;
`