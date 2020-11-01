// Button 컴포넌트
import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Styled from 'styled-components/native';
import {Styles,Color} from '~/@types/basic_style';


// 롱 버튼
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

// 선택 버튼
export const SelectButton =()=>{
  const [select,setSelect] = useState(false);
  const isSelect = ()=>{
    setSelect(!select)
  }
  return(
    <TouchableOpacity onPress={isSelect}>
      {select?
      (<Select color={Color.l_color}/>):
      (<Select color={Color.w_color}/>)}
    </TouchableOpacity>
  );
}
interface SelectProps{
  color:string;
}
const Select = Styled.View`
   height:20px; 
    width:20px;
    borderRadius:30px;
    borderWidth:2px;
    borderColor:${Color.l_color};
    backgroundColor:${(props:SelectProps)=>props.color}
`;

