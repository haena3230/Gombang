// Button 컴포넌트
import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Styled from 'styled-components/native';
import {Styles,Color} from '~/@types/basic_style';
import Icon from 'react-native-vector-icons/Ionicons'


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

// 즐겨찾기 별
export const SelectStar =()=>{
  const [select,setSelect] = useState(false);
  const isSelect = ()=>{
    setSelect(!select)
  }
  return(
    <TouchableOpacity onPress={isSelect}>
      {select?
      (<Icon name="star" size={25}/>):
      (<Icon name="star-outline" size={25}/>)}
    </TouchableOpacity>
  );
}
interface SelectProps{
  color:string;
}

// 채팅 추가버튼
interface ChattingAddBtnProps{
  onPressAddBtn:()=>void;
  pick:boolean
}
export const ChattingAddBtn=({pick,onPressAddBtn}:ChattingAddBtnProps)=>{
  return(
    <View>
    {pick?(
      <TouchableOpacity style={{
        backgroundColor:Color.g_color,
        borderColor:Color.g_color,
        borderWidth:1,
        borderRadius:10,
        width:28,
        height:28,
        justifyContent:'center',
        alignItems:'center'}}
        onPress={onPressAddBtn}>
        <Icon name="add-outline" size={25} color={Color.w_color} />
      </TouchableOpacity>
    ):(
      <TouchableOpacity style={{
        backgroundColor:Color.w_color,
        borderColor:Color.g_color,
        borderWidth:1,
        borderRadius:10,
        width:28,
        height:28,
        justifyContent:'center',
        alignItems:'center'}}
        onPress={onPressAddBtn}>
        <Icon name="add-outline" size={25}  color={Color.g_color}/>
      </TouchableOpacity>
    )}
    </View>
  )
}

const Select = Styled.View`
   height:20px; 
    width:20px;
    borderRadius:30px;
    borderWidth:2px;
    borderColor:${Color.l_color};
    backgroundColor:${(props:SelectProps)=>props.color}
`;

