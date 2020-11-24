// MemberListPage index.tsx
import React,{useEffect, useState} from 'react';
import {View, Text, Button, TouchableOpacity, Image} from 'react-native';
import {User} from '../ChattingPage/ChattingRoomPage/ChattingInvitePage'
import {Color, Page, Styles} from '~/@types/basic_style'
import {UserClassOne,UserClassTwo,UserClassThree,UserClassFour} from '~/Components/Club/Chatting'
import Modal from 'react-native-modal'
import  {useSelector} from 'react-redux'
import {URL} from '~/@types/Gombang'


// 동아리 멤버 리스트 페이지 동아리메인4
const MemberListPage = () => {
  const [mem,setMem]= useState<Array<any>>([])
  const axios = require('axios')
  const clubId = useSelector((state)=>state.login.clubId)
  useEffect(()=>{
    axios.get(`${URL}/club/${clubId}/member`)
    .then((res)=>{
      console.log(res.data)
      setMem(res.data)
    })
  },[])
  const [visible,setVisible]=useState(false)
  const onPress=()=>{
    setVisible(!visible)
  }
  return (
    <View style={Page.page_container}>
      {mem.map((member)=>{
        return(
          <TouchableOpacity 
            key = {member.userId}
            onPress={onPress}
            style={{padding:20, borderBottomWidth:1,borderColor:Color.l_color, flexDirection:'row', alignItems:'center'}}>
            <User name={member.name} image={member.image}/>
            <View style={{marginHorizontal:10}}>
              {member.authority==='회장'?(
                <UserClassOne />
              ):( 
                member.authority==='관리자'?(
                  <UserClassThree />
                ):(

                  <UserClassFour />
                )
              )}
            
            </View>
            <UserInfo isvisible={visible} onPress={onPress}/>
          </TouchableOpacity>
        )
      })}
      

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
