// 채팅방 설정 페이지
import React,{useState} from 'react'
import {Image,View,Text, TouchableOpacity} from 'react-native'
import { Color, Page,Styles } from '~/@types/basic_style'
import {ONButton, OFFButton} from '~/Components/Button/OnOffButton'
const ChattingSettingPage =()=>{
    const[alram,setAlram ]=useState(false)
    const onPress=()=>{
        setAlram(!alram)
    }
    return(
        <View style={Page.page_container}>
            <TouchableOpacity style={{padding:20, borderBottomWidth:1, borderColor:Color.l_color}}>
                <Text style={Styles.m_b_font}>채팅방 이름 설정</Text>
                <Text style={Styles.s_g_font}>김ㅇㅇ,공ㅇㅇ</Text>
            </TouchableOpacity>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', padding:20}}>
                <Text style={Styles.m_b_font}> 채팅방 알림</Text>
                {alram?(
                    <ONButton onPress={onPress}/>
                ):(
                    <OFFButton onPress={onPress}/>
                )}
            </View>

        </View>
    )
}

export default ChattingSettingPage;