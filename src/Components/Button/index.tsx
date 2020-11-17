// Button 컴포넌트
import React from 'react';
import {Text} from 'react-native';
import Styled from 'styled-components/native';
import Styles, {Color} from '~/Components/InputText';

interface ButtonProps {
  buttonTitle?: string;
  onPress?: () => void;
}
export const LongButton = ({buttonTitle, onPress}: ButtonProps) => {
  return (
    <Button onPress={onPress}>
      <Text style={Styles.m_w_font}>{buttonTitle}</Text>
    </Button>
  );
};

const Button = Styled.TouchableOpacity` 
    padding: 10px;
    backgroundColor: ${Color.g_color};
    borderRadius: 10px;
    alignItems: center;
`;
