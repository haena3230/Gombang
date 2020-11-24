// 모달 컴포넌트
import React from 'react';
import {View,Text} from 'react-native';
import {Styles} from '~/@types/basic_style';


// 메뉴 두개 모달 
import {Menu,MenuOptions,MenuOption,MenuTrigger} from 'react-native-popup-menu';
import Icon from 'react-native-vector-icons/Ionicons';
interface TwoOpModalProps{
  fst_op?:string;
  snd_op?:string;
  onPressMenuM:()=>void;
  onPressMenuD:()=>void;
}
export const TwoOpModal=({fst_op,snd_op,onPressMenuM, onPressMenuD}:TwoOpModalProps)=>{
  return(
    <View  style={{padding:10}}>
      <Menu>
        <MenuTrigger>
          <Icon name="ellipsis-vertical-outline" size={20}/>
        </MenuTrigger>
      <MenuOptions>
        <MenuOption onSelect={onPressMenuM}>
          <Text style={Styles.m_b_font}>{fst_op}</Text>
        </MenuOption>
        <MenuOption onSelect={onPressMenuD} >
          <Text style={Styles.m_b_font}>{snd_op}</Text>
        </MenuOption>
      </MenuOptions>
      </Menu>
    </View>
  )
}