// 동아리 사진/ 이름 보여주는 컴포넌트
import React from 'react';
import {View,Image,Text,TouchableOpacity} from 'react-native'
import { Color,Styles } from '~/@types/basic_style';
import {URL} from '~/@types/Gombang'
import Clubbasic from '~/Assets/Clubbasic.svg'
interface ClubTitleProps{
    clubName:(name:any)=>void;
    clubUserNum:(memberCount: any)=>void;
    clubImg:string
}
const ClubTitle=({clubName,clubUserNum,clubImg}:ClubTitleProps)=>{
    return(
        <View style={{width:'100%', aspectRatio:5/1, backgroundColor:Color.w_color, flexDirection:'row'}}>
            <TouchableOpacity onPress={()=>null} style={{width:'30%', bottom:20}}>
                {clubImg!==''?(
                    <Image 
                    source={{  uri: `${URL}/image/${clubImg}`,}}
                    style={{width:'70%',aspectRatio:1, borderRadius:200, marginLeft:20}}
                    />
                ):(
                    <Clubbasic style={{width:'70%',aspectRatio:1,marginLeft:20}}/>
                )}
                
            </TouchableOpacity>
            <View style={{margin:10}}>
                <Text style={Styles.b_b_font}>{clubName}</Text>
                <Text style={Styles.s_b_font}>회원수 {clubUserNum}명</Text>
            </View>
            
        </View>
    )
}

export default ClubTitle;