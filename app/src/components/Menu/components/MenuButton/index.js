import React, { useState } from 'react';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';

import colors from '../../../../assets/colors';
import { MenuButtonWrapper, Touchable } from './styles';

export default function MenuButton({ icon, items }) {
    const [visible, setVisible] = useState(false);
    function handle(action) {
        setVisible(!visible);
        action();
    }

    const open = () => setVisible(true);
    const close = () => setVisible(false);

    return (
        <MenuButtonWrapper>
            <Menu style={{ marginTop: 85, backgroundColor: colors.blue }}
                visible={visible}
                anchor={<Touchable onPress={open}>{icon}</Touchable>}
                onRequestClose={close}
            >
                {items.map(item => 
                    <MenuItem key={item.id} onPress={() => {handle(item.action)} }>
                        {item.component}
                    </MenuItem>    
                )}
            </Menu>
        </MenuButtonWrapper>
    );
}