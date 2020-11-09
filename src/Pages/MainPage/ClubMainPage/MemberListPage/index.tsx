// MemberListPage index.tsx
import React,{useState} from 'react';
import {View, Text, Button, TouchableOpacity, Image} from 'react-native';
import {User} from '../ChattingPage/ChattingRoomPage/ChattingInvitePage'
import {Color, Page, Styles} from '~/@types/basic_style'
import {UserClassOne,UserClassTwo,UserClassThree,UserClassFour} from '~/Components/Club/Chatting'
import Modal from 'react-native-modal'

// 동아리 멤버 리스트 페이지 동아리메인4
const MemberListPage = () => {
  const [visible,setVisible]=useState(false)
  const onPress=()=>{
    setVisible(!visible)
  }
  return (
    <View style={Page.page_container}>
      <TouchableOpacity 
        onPress={onPress}
        style={{padding:20, borderBottomWidth:1,borderColor:Color.l_color, flexDirection:'row', alignItems:'center'}}>
        <User />
        <View style={{marginHorizontal:10}}>
        <UserClassOne />
        </View>
        <UserInfo isvisible={visible} onPress={onPress}/>
      </TouchableOpacity>

    </View>
  );
};

interface UserInfoProps{
  isvisible:boolean;
  onPress:()=>void;
}
const UserInfo=({isvisible,onPress}:UserInfoProps)=>{
  return(
    <Modal isVisible={isvisible} backdropOpacity={0} onBackdropPress={onPress}>
      <View style={{
        backgroundColor:Color.l_color,
        height:150,width:'100%',
        flexDirection:'row',
        alignItems:'center',
        padding:20,
        position:'absolute',
        bottom:0}}>
        <Image 
            style={{width:80, height:80,borderRadius:50}}
            source={{
            uri: 'https://via.placeholder.com/100/ABB2B9/ABB2B9.png',
              }}/>
        <View style={{margin:20}}>
          <Text style={Styles.m_b_font}>김ㅇㅇ</Text>
          <UserClassThree />
        </View>
        <TouchableOpacity style={{backgroundColor:Color.g_color, width:75,height:25,justifyContent:'center',alignItems:'center'}}>
          <Text style={Styles.s_b_font} >채팅보내기</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  )
}

export default MemberListPage;
