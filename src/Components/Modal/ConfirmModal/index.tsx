// 완료/취소 모달
import React from 'react';
import {View, Text,TouchableOpacity, StyleSheet} from 'react-native'
import {Styles,Color} from '~/@types/basic_style';
import Modal from 'react-native-modal';


interface ConfirmModalProps{
  isVisible:boolean;
  onBack:()=>void;
  text1:string;
  text2:string;
}
const ConfirmModal=({isVisible, onBack, text1, text2}:ConfirmModalProps)=>{
  return(
    <Modal onBackdropPress={onBack} isVisible={isVisible}>
      <View style={{justifyContent:'center', alignItems:'center'}}>
        <View style={styles.modifyContainer}>
          <Text style={Styles.m_b_font}>{text1}</Text>
          <Text style={Styles.m_b_font}>{text2}</Text>
        </View>
        <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={styles.button} onPress={onBack}>
              <Text style={Styles.m_b_font}>취소</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={Styles.m_b_font}>완료</Text>
            </TouchableOpacity>
          </View>
      </View>
    </Modal>
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

export default ConfirmModal;