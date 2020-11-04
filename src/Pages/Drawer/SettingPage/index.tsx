//어플설정 페이지
import React, { useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Styles,Color} from '~/@types/basic_style';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {ONButton,OFFButton} from '~/Components/Button/OnOffButton';

function SettingPage() {
  const navigation=useNavigation();
  const[button,setButton] =useState(false);
  const onPress=()=>{
    setButton(!button);
  }
  return (
    
    <View style={{flex:1, backgroundColor:Color.w_color}}>
        <View style={styles.list}>
          <Text style={Styles.m_b_font}>푸시알림</Text>
          {button?(<ONButton onPress={onPress} />):(
            <OFFButton onPress={onPress} />
          )}
        </View>
        <TouchableOpacity style={styles.list} onPress={()=>navigation.navigate('ProgramInfoPage')}>
          <Text style={Styles.m_b_font}>프로그램 정보</Text>
          <Icon name="chevron-forward-outline" />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('NoticePage')} style={styles.list}>
          <Text style={Styles.m_b_font}>공지사항</Text>
          <Icon name="chevron-forward-outline" />
        </TouchableOpacity>
    </View>
  );
}
const styles=StyleSheet.create({
  list:{
    padding:10,
    borderTopColor:Color.l_color,
    borderTopWidth:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  }
})

export default SettingPage;
