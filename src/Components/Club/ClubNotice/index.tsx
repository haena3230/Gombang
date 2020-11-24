// 동아리 메인 공지사항 컴포넌트
import React from 'react';
import {View,Text,ScrollView,StyleSheet, TouchableOpacity} from 'react-native';
import {Color, Styles,DWidth} from '~/@types/basic_style';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';


const ClubNotice =()=>{
    const navigation=useNavigation()
    return(
        <View style ={{backgroundColor:Color.w_color, width:'100%', aspectRatio:7/2, padding:5}}>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={Styles.s_b_font}>공지사항</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('ClubNoticePage')}>
                    <Icon name="chevron-forward-outline" size={18} color={Color.g_color} />
                </TouchableOpacity>
            </View>
            <ScrollView style={{width:DWidth}} horizontal={true}>
                <Box />
                <Box />
            </ScrollView>
        </View>
    )
}

const Box=()=>{
    return(
        <View style={styles.box}>
            <Text style={Styles.s_g_font}>11월 21일 저녁 7시 학교근처 회식 참여하실 분 모집합니다.</Text>
        </View>
    )
}

export const PartyView=()=>{
    return(
        <TouchableOpacity style={{
            backgroundColor:Color.g_color,
            borderRadius:5, 
            width:120,
            justifyContent:'center',
            alignItems:'center',
            height:35,
            margin:10}}
            onPress={()=>null}>
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

const styles= StyleSheet.create({
    box:{
        width:DWidth*0.9, 
        aspectRatio:9/2,
        borderWidth:1, 
        borderColor:Color.l_color,
        marginHorizontal:5,
    }
})

export default ClubNotice;