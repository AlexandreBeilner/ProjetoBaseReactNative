import styled from "styled-components/native";
import { height, width } from "../../utils/Functions.ts";
import Animated from 'react-native-reanimated';

export const CustomInputContainer = styled.TouchableOpacity<{ isFocused: boolean }>`
    width: ${width * 0.9}px;
    height: ${height * 0.09}px;
    background-color: white;
    border-radius: 22px;
    border: ${props => props.isFocused ? "2px #24C2F9" : "1px #000"};
    flex-direction: row;
    margin-top: 50px;
`;

export const Input = styled.TextInput`
    flex: 1;
    padding-left: 8%;
    padding-right: 8%;
    font-size: ${height * 0.02}px;
`;

export const ShowPassword = styled.TouchableOpacity`
    width: 15%;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

export const OverPlaceholder = styled(Animated.Text)`
    padding: 5px;
    color: #000;
    position: absolute;
    top: -${height * 0.018}px;
    left: ${width*0.06}px;
    background-color: white;
    font-size: ${height*0.018}px;
`;
