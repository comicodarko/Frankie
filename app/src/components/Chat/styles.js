import styled from "styled-components";
import colors from '../../assets/colors';

export const MessagesWrapper = styled.ScrollView`
    width: 100%;
    flex: 1;
    overflow-y: scroll;
`

export const Message = styled.View`
    max-width: 80%;
    background: ${props => props.frankie ? colors.blue : colors.pink};
    margin-left: ${props => props.frankie ? '10px' : 'auto'};
    margin-right: ${props => props.frankie ? 'auto' : '10px'};
    padding: 10px;
    margin-top: 10px;
    border-radius: 10px;
    flex: 1;
`

export const MessageText = styled.Text`
    font-family: 'PressStart2P-Regular';
    margin-top: 4px;
    color: ${colors.white};
    `

export const ContentArea = styled.ScrollView`
    flex: 1;
    flex-direction: row;
    margin-top: 5px;
`

export const Content = styled.TouchableOpacity`
    margin: 0 4px;
    border-radius: 10px;
`

export const Cover = styled.Image`
    width: 140px;
    height: 200px;
    border-radius: 10px;
`

export const NoCover = styled.Text`
    width: 150px;
    background: ${colors.white};
    border-radius: 5px;
    text-align: center;
    padding-top: 10px;
    margin-top: auto;
    margin-bottom: auto;
    font-family: 'PressStart2P-Regular';
    color: ${colors.pink};
    border: 2px solid ${colors.pink};
`
