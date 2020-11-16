import React from 'react'
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Color, Styles } from '~/@types/basic_style';

// 하단 글쓰기 버튼
interface WriteBtnProps{
    text:string;
}
export const WriteBtn = ({text}:WriteBtnProps) => {
  return (
    
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: Color.l_color,
          height: 30,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 15,
          borderRadius: 30,
          borderWidth: 2,
          borderColor: Color.b_color,
        }}>
        <Icon name="pencil-outline" size={20} color={Color.g_color}></Icon>
        <Text style={Styles.m_b_font}>{text}</Text>
      </View>
  );
};
