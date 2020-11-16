// 대화상대 초대 페이지
import React from 'react'
import {Image,Text,View} from 'react-native'
import{Styles,Page, Color} from '~/@types/basic_style'
import {SelectButton} from '~/Components/Button'

const ChattingInvitePage=()=>{
    return(
        <View style={Page.page_container}>
            <View style={{
                margin:10,padding:10, 
                borderBottomWidth:1, 
                borderColor:Color.l_color,
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center'}}>
                <User />
                <SelectButton />
            </View>      
        </View>
    )
}

export const User = ()=>{
    return(
        <View style={{flexDirection:'row', alignItems:'center'}}>
            <View style={{marginHorizontal:10}}>
                <Image 
                style={{width:40, height:40,borderRadius:20}}
                source={{
                uri: 'https://via.placeholder.com/100/ABB2B9/ABB2B9.png',
                 }}/>
            </View>
            <Text style={Styles.m_b_font}>양해나</Text>
        </View>
    )
}

export default ChattingInvitePage