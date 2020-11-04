import React,{useState} from 'react'
import {View,Text, StyleSheet, TextInput, TouchableOpacityBase, TouchableOpacity, Alert, ScrollView} from 'react-native'
import {Styles, Color } from '~/@types/basic_style';
import AddPhoto from '~/Components/AddPhoto';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Modal from 'react-native-modal';
import ConfirmModal from '~/Components/Modal/ConfirmModal';


const MyPage=()=>{
    const[text,setText] = useState('')
    // 저장
    const[set,setSet] = useState(false);
    const toggleS=()=>{
        setSet(!set);
    }
    // 탈퇴
    const[isVisible, setIsVisible] = useState(false);
    const toggle=()=>{
        setIsVisible(!isVisible);
    }
    const navigation =useNavigation()

    return(
        <ScrollView>
            <View style ={{flexDirection:'row', alignItems:'center', height:50, padding: 10}}>
                <TouchableOpacity onPress={()=>toggleS()}>
                    <Icon name = "arrow-back-outline" size={25} color={Color.g_color}/>
                    <ConfirmModal isVisible={set} onBack={()=>toggleS()} onConfirm = {()=>navigation.goBack()} text1='변경사항을 저장하겠습니까?' text2=""/>
                </TouchableOpacity>
                <View style={{marginHorizontal:20}}>
                    <Text style={Styles.b_b_font}>내 프로필</Text>
                </View>
            </View>
            <View style = {Style.bar}>
                <Text style = {Styles.s_g_font}>프로필 설정</Text>
            </View>
            <View style={{alignItems:'center'}}>
                <AddPhoto />
                <Text style= {Styles.s_g_font}>gosk0912@naver.com</Text>
                <View style={{margin:5,flexDirection:'row',borderBottomWidth:1, width:'80%', borderColor:Color.g_color, alignItems:'center', justifyContent:'space-between'}}>
                  <TextInput
                    placeholder={'이름'}
                    onChangeText={(text) => setText(text)}
                    value={text}
                    maxLength={20}
                    />
                   <Icon name = "pencil-outline" size = {25} color ={Color.g_color} />
                </View>
            </View>
            <View style = {Style.bar}>
                <Text style = {Styles.s_g_font}>내정보</Text>
            </View>
            <View>
                <Line first = {'연결계정'} second = {'dankook@naver.com'} />
                <Line first = {'휴대전화'} second = {'010-1234-5678'} />
                <Line first = {'생년월일'} second = {'1998.03.23'} />
            </View>
            <View style ={{height:10, backgroundColor:Color.l_color}} />

            <TouchableOpacity onPress={()=>toggle()} style={{margin:10}}>
                <Text style= {{color:'red', fontSize:15, fontWeight:'bold'}}>회원 탈퇴하기</Text>
                <ExitModal isVisible={isVisible} onBack={()=>toggle()}/>
            </TouchableOpacity>
        </ScrollView>
    )
}


interface ExitProps {
    isVisible : boolean;
    onBack:()=>void;
}
const ExitModal=({isVisible, onBack}:ExitProps)=>{
    const[text,setText] = useState('')
  return(
    <Modal onBackdropPress={onBack} isVisible={isVisible}>
      <View style={{justifyContent:'center', alignItems:'center'}}>
        <View style={styles.modifyContainer}>
          <Text style={Styles.s_b_font}>탈퇴를 계속 진행하시려면 아래의 문구를 입력해주세요</Text>
          <Text style={{color:'red', fontSize:15, fontWeight:'bold'}}>회원탈퇴진행</Text>
           <View style={{margin:5,flexDirection:'row',borderBottomWidth:1, width:'80%', borderColor:Color.g_color, alignItems:'center', justifyContent:'space-between'}}>
            <TextInput
            placeholder={''}
            onChangeText={(text) => setText(text)}
            value={text}
            maxLength={20}
            />
            <Icon name = "pencil-outline" size = {25} color ={Color.g_color} />
        </View>
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



interface LineProps{
    first : string;
    second:string;
}
const Line =({first,second}:LineProps)=>{
    return(
        <View style={Style.box}>
            <Text style= {Styles.s_g_font}>{first}</Text>
            <Text style={Styles.m_b_font}>{second}</Text>
        </View>
    )
}

const Style = StyleSheet.create({
    bar:{
        height:40,
        width:'100%',
        backgroundColor:Color.l_color,
        justifyContent:'center',
        paddingHorizontal:10
    },
    box:{
        borderBottomWidth:1,
        borderColor:Color.l_color,
        justifyContent:'center',
        padding:10
    }
})

const styles=StyleSheet.create({
  
  modifyContainer:{
    backgroundColor:Color.w_color,
    height:150,
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

export default MyPage;