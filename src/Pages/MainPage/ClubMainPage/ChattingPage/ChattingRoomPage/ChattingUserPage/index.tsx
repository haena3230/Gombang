// 채팅방 참가자 리스트
// 대화상대 초대 페이지
import React from 'react'
import {Image,Text,View} from 'react-native'
import{Styles,Page, Color} from '~/@types/basic_style'
import {SelectButton} from '~/Components/Button'
import {User} from '../ChattingInvitePage'

const ChattingUserPage=()=>{
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


export default ChattingUserPage