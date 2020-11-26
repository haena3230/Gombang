// 동아리 메인 공지사항 컴포넌트
import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import {Color, Styles} from '~/@types/basic_style';

interface PartyViewProps{
    onPress:()=>void}
export const PartyView=({onPress}:PartyViewProps)=>{
    return(
        <TouchableOpacity style={{
            backgroundColor:Color.g_color,
            borderRadius:5, 
            width:120,
            justifyContent:'center',
            alignItems:'center',
            height:35,
            margin:10}}
            onPress={onPress}>
             <Text style={Styles.m_w_font}>참가 인원보기</Text>
        </TouchableOpacity>
    )
}


export const Party=()=>{
    return(
        <TouchableOpacity style={{
            backgroundColor:Color.g_color,
            borderRadius:5, 
            width:100,
            justifyContent:'center',
            alignItems:'center',
            height:35,
            margin:10}}
            onPress={()=>null}>
             <Text style={Styles.m_w_font}>참가하기</Text>
        </TouchableOpacity>
    )
}
