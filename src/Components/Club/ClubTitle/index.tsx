// 동아리 사진/ 이름 보여주는 컴포넌트
import React from 'react';
import {View,Image,Text,TouchableOpacity} from 'react-native'
import { Color,Styles } from '~/@types/basic_style';

const ClubTitle=()=>{
    return(
        <View style={{width:'100%', aspectRatio:5/1, backgroundColor:Color.w_color, flexDirection:'row'}}>
            <TouchableOpacity onPress={()=>null} style={{width:'30%', bottom:20}}>
                <Image 
                    source={{  uri: 'https://via.placeholder.com/100/ABB000/ABB2B9.png',}}
                    style={{width:'70%',aspectRatio:1, borderRadius:200, marginLeft:20}}
                    />
            </TouchableOpacity>
            <View style={{margin:10}}>
                <Text style={Styles.m_b_font}>떙떙동아리</Text>
                <Text style={Styles.ss_b_font}>회원수 99명</Text>
            </View>
            
        </View>
    )
}

export default ClubTitle;