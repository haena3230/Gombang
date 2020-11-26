// 참가 인원보기
import React from 'react'
import { Text, View,StyleSheet, ScrollView } from 'react-native'
import {Color,Styles} from '~/@types/basic_style'


const NoticeParty=({route}:any)=>{
    const{postId,title} = route.params
    return(
        <ScrollView>
            <Title text1={'리스트이름'} text2={'설정 금액(원)'} />
            <View style={{
                backgroundColor:Color.w_color,
                flexDirection:'row',
                justifyContent:'space-between',
                padding:10
                }}>
                <Text style={Styles.m_b_font}>{title}</Text>
                <Text>ee</Text>
            </View>
            <Title text1={'참가 회원 리스트'} text2={'입금 확인'} />
            <Title text1={'합계(명)'} text2={'합계(원)'} />
        </ScrollView>
    )
}

interface TitleProps{
    text1:string,
    text2:string
}
const Title=({text1,text2}:TitleProps)=>{
    return(
        <View style={styles.title}>
                <Text style={Styles.s_g_font}>{text1}</Text>
                <Text style={Styles.s_g_font}>{text2}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    title:{
        backgroundColor:Color.l_color,
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10
    },
})
export default NoticeParty