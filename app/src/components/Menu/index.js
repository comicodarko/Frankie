import React from "react";
import GameIcon from 'react-native-vector-icons/Ionicons';
import SearchIcon from 'react-native-vector-icons/AntDesign';

import { MenuWrapper, SubMenuItem, SubMenuItemText } from "./styles";
import colors from "../../assets/colors";
import MenuButton from './components/MenuButton';

export default function Menu() {
    function handleSearchContent() {
        console.log('teste');
    }
    
    return (
        <MenuWrapper>
            <MenuButton 
                icon={<GameIcon name="game-controller" color={colors.blue} size={50} />} 
                items={[
                    {
                        id: 1,
                        action: handleSearchContent,
                        component: 
                            <SubMenuItem>
                                <SearchIcon name="search1" color={colors.white} size={30} />
                                <SubMenuItemText> Buscar</SubMenuItemText>
                            </SubMenuItem>
                    },
                ]}    
            />
        </MenuWrapper>
    )
}