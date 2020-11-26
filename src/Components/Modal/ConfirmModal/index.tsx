// 완료/취소 모달
import React, { useState } from 'react';
import {View, Text,TouchableOpacity, StyleSheet, Alert, TextInput} from 'react-native'
import {Styles,Color} from '~/@types/basic_style';
import Modal from 'react-native-modal';
import { useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import {URL} from '~/@types/Gombang'
import {useNavigation} from '@react-navigation/native'

interface ConfirmModalProps{
  isVisible:boolean;
  onBack:()=>void;
  onConfirm:()=>void;
  text1:string;
  text2:string;
}
export const ConfirmModal=({isVisible, onBack, onConfirm, text1, text2}:ConfirmModalProps)=>{
  return(
    <Modal onBackdropPress={onBack} isVisible={isVisible}>
      <View style={{justifyContent:'center', alignItems:'center'}}>
        <View style={styles.modifyContainer}>
          <Text style={Styles.m_b_font}>{text1}</Text>
          <Text style={Styles.m_b_font}>{text2}</Text>
        </View>
        <CancleConfirmBtn onBack={onBack} onConfirm={onConfirm} />
      </View>
    </Modal>
  )
}

// 글자 인증 모달

interface ConfirmTextModalProps {
    isVisible : boolean;
    onBack:()=>void;
}
export const ConfirmTextModal=({isVisible, onBack}:ConfirmTextModalProps)=>{
    const[text,setText] = useState('')
    const axios = require('axios')
    const userId = useSelector((state)=>state.login.userId)
    const onConfirm=()=>{
        axios.patch(`${URL}/user/${userId}/phone`,{
          phone:text,
        })
        .then((res)=>{
          console.log(res.data)
          onBack()
        })
    }
   
  return(
    <Modal onBackdropPress={onBack} isVisible={isVisible}>
      <View style={{justifyContent:'center', alignItems:'center'}}>
        <View style={styles.modifyContainer}>
          
           <View style={{margin:5,flexDirection:'row',borderBottomWidth:1, width:'80%', borderColor:Color.g_color, alignItems:'center', justifyContent:'space-between'}}>
            <TextInput
            placeholder={'-를 제외한 번호를 입력해주세요'}
            onChangeText={(text) => setText(text)}
            value={text}
            maxLength={20}
            />
            <Icon name = "pencil-outline" size = {25} color ={Color.g_color} />
        </View>
        </View>
        <CancleConfirmBtn onBack={onBack} onConfirm={onConfirm} />
      </View>
    </Modal>
  )
}
// 탈퇴 확인 모달

interface ExitProps {
    isVisible : boolean;
    onBack:()=>void;
}
export const ExitModal=({isVisible, onBack}:ExitProps)=>{
     const navigation=useNavigation()
    const[text,setText] = useState('')
    const axios = require('axios')
    const userId = useSelector((state)=>state.login.userId)
    const onConfirm=()=>{
        if(text==='회원탈퇴진행'){
            axios.delete(`${URL}/user/${userId}`)
            .then((res:any)=>{
              console.log(res.data)
            //   navigation.reset({
            //   index: 0,
            //   routes: [{ name: 'LoginPage' }],
            // })
            })
        }
        else{
            Alert.alert('문구를 확인해 주세요')
        }
    }
  return(
    <Modal onBackdropPress={onBack} isVisible={isVisible}>
      <View style={{justifyContent:'center', alignItems:'center'}}>
        <View style={styles.modifyContainer}>
          <Text style={Styles.s_b_font}>탈퇴를 계속 진행하시려면 아래의 문구를 입력해주세요</Text>
          <Text style={{color:'red', fontSize:15, fontWeight:'bold'}}>회원탈퇴진행</Text>
           <View style={{margin:5,flexDirection:'row',borderBottomWidth:1, width:'80%', borderColor:Color.g_color, alignItems:'center', justifyContent:'space-between'}}>
            <TextInput
            placeholder={'회원탈퇴진행'}
            onChangeText={(text) => setText(text)}
            value={text}
            maxLength={20}
            />
            <Icon name = "pencil-outline" size = {25} color ={Color.g_color} />
        </View>
        </View>
        
        <CancleConfirmBtn onBack={onBack} onConfirm={onConfirm} />
      </View>
    </Modal>
  )
}

// 취소 완료 버튼
interface CancleConfirmBtnProps{
  onBack:()=>void,
  onConfirm:()=>void
}
export const CancleConfirmBtn=({onBack,onConfirm}:CancleConfirmBtnProps)=>{
  return(
    <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={styles.button} onPress={onBack}>
            <Text style={Styles.m_b_font}>취소</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onConfirm}>
            <Text style={Styles.m_b_font}>완료</Text>
          </TouchableOpacity>
    </View>
  )
}


const styles=StyleSheet.create({
  
  modifyContainer:{
    backgroundColor:Color.w_color,
    height:100,
    width:300,
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:Color.l_color,
    width:150,
    height:40,
  }
})
