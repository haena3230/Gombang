// CircleSettingPage index.tsx
import React,{useState} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import { Page,Styles,Color } from '~/@types/basic_style';
import { ONButton ,OFFButton} from '~/Components/Button/OnOffButton';
import Icon from 'react-native-vector-icons/Ionicons'


// 동아리 설정 페이지 동아리메인4
const ClubSettingPage = () => {
  const[alram,setAlram ]=useState(false)
    const onPress=()=>{
        setAlram(!alram)
    }
    return(
        <View style={Page.page_container}>
          
            <TouchableOpacity style={{padding:20, borderBottomWidth:1, borderColor:Color.l_color,flexDirection:'row', justifyContent:'space-between'}}>
              <View>
                <Text style={Styles.m_b_font}>닉네임 수정</Text>
                <Text style={Styles.s_g_font}>단국17</Text>
              </View>
              <Icon name="chevron-forward-outline"  size={30}/>
            </TouchableOpacity>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', borderBottomWidth:1, borderColor:Color.l_color,padding:20}}>
                <Text style={Styles.m_b_font}> 동아리 알림</Text>
                {alram?(
                    <ONButton onPress={onPress}/>
                ):(
                    <OFFButton onPress={onPress}/>
                )}
            </View>
              <TouchableOpacity style={{padding:20, borderBottomWidth:1, borderColor:Color.l_color,flexDirection:'row', justifyContent:'space-between'}}>
              <View>
                <Text style={Styles.m_b_font}>내 게시글 보기</Text>
              </View>
              <Icon name="chevron-forward-outline"  size={30}/>
            </TouchableOpacity>
            <TouchableOpacity style={{padding:20, borderBottomWidth:1, borderColor:Color.l_color}}>

                <Text style={Styles.m_p_font}>동아리 탈퇴하기</Text>
            </TouchableOpacity>

        </View>
    )
};

export default ClubSettingPage;
