import styled from 'styled-components';
import colors from '../../../../assets/colors';

export const MenuButtonWrapper = styled.View`
  height: 100%;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  margin-left: 5px;
`;

export const Touchable = styled.TouchableOpacity`
  border-width: 2px;
  border-color: ${colors.blue};
  padding: 10px;
  border-radius: 10px;
  background: ${colors.purple};
`;

export const SubMenuItem = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SubMenuItemText = styled.Text`
  color: ${colors.white};
  margin-left: 10px;
  font-size: 16px;
  font-family: 'PressStart2P-Regular';
  padding-top: 5px;
`;
