// 채팅 말풍선
import React from 'react'
import {View,Text, Image} from 'react-native'
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace'
import {Color,Styles} from '~/@types/basic_style'



// 유저 말풍성
interface UserChattingBoxProps{
    text:string;
    hour:string;
    minute:string;
    user:string;
    image:string;
}
export const UserChattingBox=({text,hour,minute,user,image}:UserChattingBoxProps)=>{
    return(
        <View style={{flexDirection:'row', padding:10}}>
            <Image 
             style={{width:40,height:40,borderRadius:20}}
             source={{
                uri: image,
              }}/>
            <View style={{margin:10}}>
                <Text style={Styles.m_b_font}>
                    {user}
                </Text>
                <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                    <View style={{
                        backgroundColor:Color.l_color,
                        width:200,
                        borderRadius:5,
                        borderTopLeftRadius:0,
                        padding:5
                        }}>
                        <Text style={Styles.s_b_font}>{text}</Text>
                    </View>
                    <Text style={Styles.ss_b_font}>{hour}:{minute}</Text>
                </View>
            </View>
        </View>
    )
}

// 내 말풍선
interface MyChattingBoxProps{
    text:string;
    hour:string;
    minute:string;
    user:string;
    image:string;
}
export const MyChattingBox=({text,hour,minute,user,image}:MyChattingBoxProps)=>{
    return(
        <View style={{flexDirection:'row',justifyContent:'flex-end', padding:10}}>
            
            <View style={{alignItems:'flex-end', margin:10}}>
                <Text style={Styles.m_b_font}>
                    {user}
                </Text>
                <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                    <Text style={Styles.ss_b_font}>{hour}:{minute}</Text>
                    <View style={{
                        backgroundColor:Color.p_color,
                        width:200,
                        borderRadius:5,
                        borderTopRightRadius:0,
                        padding:5
                        }}>
                        <Text style={Styles.s_b_font}>{text}</Text>
                    </View>
                </View>
            </View>
            <Image 
             style={{width:40,height:40,borderRadius:20}}
             source={{
                uri: image,
              }}/>
        </View>
    )
}

// 회원딱지
export const UserClassOne=()=>{
    return(
        <View style={{backgroundColor:Color.p_color, borderRadius:5,width:40,height:15,alignItems:'center'}}>
            <Text style={Styles.ss_b_font}>회장</Text>
        </View>
    )
}
export const UserClassTwo=()=>{
    return(
        <View style={{backgroundColor:'pink', borderRadius:5,width:40,height:15,alignItems:'center'}}>
            <Text style={Styles.ss_b_font}>부회장</Text>
        </View>
    )
}
export const UserClassThree=()=>{
    return(
        <View style={{backgroundColor:'yellow', borderRadius:5,width:40,height:15,alignItems:'center'}}>
            <Text style={Styles.ss_b_font}>관리자</Text>
        </View>
    )
}
export const UserClassFour=()=>{
    return(
        <View style={{backgroundColor:Color.l_color, borderRadius:5,width:40,height:15,alignItems:'center'}}>
            <Text style={Styles.ss_b_font}>회원</Text>
        </View>
    )
}

