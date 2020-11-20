// 관리자 설정 페이지
import React from 'react'
import {View, Text,StyleSheet,ScrollView } from 'react-native'
import { Color, Styles } from '~/@types/basic_style'
import Icon from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ClubManagementPage=()=>{
    return(
        <ScrollView style={{backgroundColor:Color.w_color,flex:1}}>
            <Title title={'동아리 기본 관리'} />
                <List text ={'동아리 프로필 설정'} />
                <List text ={'공식 인증 마크 신청'} />
                <RList />
                <List text ={'모집 글 설정'} />
            <View  style={{backgroundColor:Color.l_color,height:5}}/>
                <List text={'문의 답변하기'}/>
            <Title title={'회원 관리'} />
                <List text ={'가입 승인'} />
                <List text ={'회원 초대하기'} />
                <List text ={'회원 조직 설정'} />
                <List text ={'강퇴하기'} />
            <Title title={'메뉴 관리'} />
                <List text ={'공개 설정'} />
            <View  style={{backgroundColor:Color.l_color,height:5}}/>
                <Del text={'동아리 삭제하기'}/>
        </ScrollView>
            
    )
}
// 제목 
interface TitleProps{
    title:string;
}
const Title=({title}:TitleProps)=>{
    return(
        <View style={{height:40, backgroundColor:Color.l_color,paddingHorizontal:10,justifyContent:'center'}}>
            <Text style={Styles.s_g_font}>{title}</Text>
        </View>
    )
}

// 선택 
interface ListProps{
    text:string;
}
const List = ({text}:ListProps)=>{
    return(
         <TouchableOpacity style={styles.container}>
            <View style={styles.item}>
                <Text style={Styles.m_b_font}>
                {text}
                </Text>
            </View>
            <View style={styles.item}>
                <Icon name="chevron-forward-outline"  size={20}/>
            </View>
        </TouchableOpacity>
    )
}

// 동아리 모집
const RList = ()=>{
    return(
         <TouchableOpacity style={styles.container}>
            <View style={styles.item}>
                <Text style={Styles.m_b_font}>
                동아리 모집 신청
                </Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={styles.item}>
                    <Text style={Styles.s_g_font}>모집중</Text>
                </View>
                <View style={styles.item}>
                    <Icon name="chevron-forward-outline"  size={20}/>
                </View>
            </View>
        </TouchableOpacity>
    )
}
// 삭제
interface DelProps{
    text:string;
}
const Del = ({text}:DelProps)=>{
    return(
         <TouchableOpacity style={styles.container}>
            <View style={styles.item}>
                <Text style={Styles.m_r_font}>
                {text}
                </Text>
            </View>
            <View style={styles.item}>
                <Icon name="chevron-forward-outline"  size={20}/>
            </View>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    container:{
        height:40, 
        borderBottomWidth:1, 
        borderColor:Color.l_color,
        flexDirection:'row', 
        justifyContent:'space-between',
        paddingHorizontal:10,
    },
    item:{
        justifyContent:'center'
    }
})

export default ClubManagementPage