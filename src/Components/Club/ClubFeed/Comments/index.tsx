// 댓글 컴포넌트
import React, {useState} from 'react'
import {View,TouchableOpacity,Text,TextInput, Image} from 'react-native'
import { Color, DWidth, Styles } from '~/@types/basic_style'
import Icon from 'react-native-vector-icons/Ionicons'

// 댓글 작성
interface CommentsProps{
    holder:string
}
export const Comments=({holder}:CommentsProps)=>{
    const [text, setText] = useState('')
    return(
        <View style={{width:'100%', flexDirection:'row', alignItems:'center', padding:10, backgroundColor:Color.w_color,borderColor:Color.l_color,borderWidth:1,position:'absolute', bottom:0}}>
           <Image
            style={{borderRadius:50, width:'12%',aspectRatio:1}}
            source={{
              uri: 'https://via.placeholder.com/100/F169B4/F169B4.png',
            }}
          />
          <View style={{width:'75%', marginHorizontal:10, flexDirection:'row',alignItems:'center'}}>
            <TextInput
                style={{ height: 40, width:'100%', backgroundColor: Color.l_color ,borderRadius:15, fontSize:13}}
                placeholder={holder}
                onChangeText={text => setText(text)}
                value={text}
                maxLength={100}
                />
            < CommentBtn onPressBtn={()=>null}/>
          </View>
        </View>
    )
}

interface CommentBtnProps{
    onPressBtn:()=>void;
}
export const CommentBtn=({onPressBtn}:CommentBtnProps)=>{
    return(
        <TouchableOpacity onPress={onPressBtn}>
            <View style={{width:35, height:35,borderRadius:20,backgroundColor:Color.p_color, justifyContent:'center', alignItems:'center'}}>
                <Icon name="chatbubbles" size={25} color={Color.w_color}/>
            </View>
        </TouchableOpacity>
    )
}

// 댓글 리스트
export const CommentList=()=>{
    return(
        <View style={{flexDirection:'row', alignItems:'center', width:DWidth, backgroundColor:Color.w_color, borderWidth:1,borderColor:Color.l_color}}>
            <View style={{padding:10,width:'15%'}}>
                <Image
                    style={{borderRadius:50, width:'100%',aspectRatio:1}}
                    source={{
                    uri: 'https://via.placeholder.com/100/F169B4/F169B4.png',
                    }}
                />
            </View>
            <View>
                <Text style={Styles.s_b_font}>댓글</Text>
            </View>
        </View>
    )
}