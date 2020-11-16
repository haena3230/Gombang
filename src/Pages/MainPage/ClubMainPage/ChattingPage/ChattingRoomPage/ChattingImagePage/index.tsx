// 채팅방 사진 모음
import React from 'react'
import {Image,View,Text} from 'react-native'
import { Page,Styles } from '~/@types/basic_style'

const ChattingImagePage =()=>{
    return(
        <View style={Page.page_container}>
            <View style={{padding:20}}>
                <Text style={Styles.s_b_font}>
                    2020.10.01
                </Text>
            </View>
            <View style={{flexDirection:'row',flexWrap:'wrap', padding:20}}>
                <Image 
                    style={{width:100,height:100}}
                    source={{
                        uri:'https://via.placeholder.com/100/F169B4/F169B4.png',
                    }}/>
            </View>
        </View>
    )
}

export default ChattingImagePage;