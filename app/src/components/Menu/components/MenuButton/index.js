import React, {useState} from 'react';
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';

import colors from '../../../../assets/colors';
import {
  MenuButtonWrapper,
  Touchable,
  SubMenuItem,
  SubMenuItemText,
} from './styles';

export default function MenuButton({icon, items}) {
  const [visible, setVisible] = useState(false);
  function handle(action) {
    setVisible(!visible);
    action();
  }

  const open = () => setVisible(true);
  const close = () => setVisible(false);

  return (
    <MenuButtonWrapper>
      <Menu
        style={{marginTop: 85, backgroundColor: colors.blue}}
        visible={visible}
        anchor={<Touchable onPress={open}>{icon}</Touchable>}
        onRequestClose={close}>
        {items.map(item => (
          <React.Fragment key={item.id}>
            <MenuItem
              onPress={() => {
                handle(item.action);
              }}>
              <SubMenuItem>
                {item.icon}
                <SubMenuItemText>{item.label}</SubMenuItemText>
              </SubMenuItem>
            </MenuItem>
            <MenuDivider />
          </React.Fragment>
        ))}
      </Menu>
    </MenuButtonWrapper>
  );
}
