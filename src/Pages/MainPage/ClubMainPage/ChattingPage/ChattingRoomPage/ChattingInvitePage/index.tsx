// 대화상대 초대 페이지
import React from 'react'
import {Image,Text,View} from 'react-native'
import{Styles,Page, Color} from '~/@types/basic_style'
import {SelectButton} from '~/Components/Button'
import {URL} from '~/@types/Gombang'

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
                <User name={'김길동'} image={''}/>
                <SelectButton />
            </View>      
        </View>
    )
}
interface UserProps{
    name:string;
    image:string;
}
export const User = ({name,image}:UserProps)=>{


    return(
        <View style={{flexDirection:'row', alignItems:'center'}}>
            <View style={{marginHorizontal:10}}>
                {image===''?(
                    <View  style={{width:40, height:40,borderRadius:20, backgroundColor:Color.l_color}}/>
                ):(
                    <Image 
                    style={{width:40, height:40,borderRadius:20}}
                    source={{
                    uri: `${URL}/image/${image}`,
                 }}/>
                )}
            </View>
                <Text style={Styles.m_b_font}>{name}</Text>
        </View>
    )
}

export default ChattingInvitePage