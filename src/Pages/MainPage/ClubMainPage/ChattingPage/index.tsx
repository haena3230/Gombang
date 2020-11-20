// ChattingPage index.tsx
import React from 'react';
import {View, Text, Button, ScrollView, TouchableOpacity} from 'react-native';
import { Color, Page, Styles } from '~/@types/basic_style';
import { SelectStar } from '~/Components/Button';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux'


// 동아리 채팅 동아리메인2
const ChattingPage = () => {
  const clubId=useSelector((state)=>state.login.clubId)
  return (
    <ScrollView style={Page.page_container}>
      <ChattingRoom />
    </ScrollView>
  );
};


const ChattingRoom=()=>{
  const navigation=useNavigation()
  return(
    <TouchableOpacity 
      style={{height:100}} onPress={()=>navigation.navigate('ChattingRoomPage')}>
        <View style={{
          flexDirection:'row', 
          alignItems:'center', 
          justifyContent:'space-between', 
          height:70,
          borderBottomColor:Color.l_color, 
          borderBottomWidth:1,
          padding:20}}>
            <Text style={Styles.m_b_font}>떙떙톡</Text>
            <SelectStar />
        </View>
    </TouchableOpacity>
  )
}
export default ChattingPage;
