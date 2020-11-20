// CircleSettingPage index.tsx
import React,{useState} from 'react';
import {View, Text, Button, TouchableOpacity ,StyleSheet} from 'react-native';
import { Page,Styles,Color } from '~/@types/basic_style';
import { ONButton ,OFFButton} from '~/Components/Button/OnOffButton';
import Icon from 'react-native-vector-icons/Ionicons'
import useNavigaion, { useNavigation } from '@react-navigation/native'


// 동아리 설정 페이지 동아리메인4
const ClubSettingPage = () => {
  const navigation =useNavigation()
  const[alram,setAlram ]=useState(false)
    const onPress=()=>{
        setAlram(!alram)
    }
    return(
        <View style={Page.page_container}>
          
            <TouchableOpacity style={styles.container}>
              <View style={{justifyContent:'center'}}>
                <Text style={Styles.m_b_font}>닉네임 수정</Text>
                <Text style={Styles.s_g_font}>단국17</Text>
              </View>
              <View style={{justifyContent:'center'}}>
                <Icon name="chevron-forward-outline"  size={20}/>
              </View>
            </TouchableOpacity>
            <View style={styles.container}>
              <View style={{justifyContent:'center'}}>
                <Text style={Styles.m_b_font}> 동아리 알림</Text>
              </View>
              <View style={{justifyContent:'center'}}>
                {alram?(
                    <ONButton onPress={onPress}/>
                ):(
                    <OFFButton onPress={onPress}/>
                )}
              </View>
            </View>
              <TouchableOpacity style={styles.container}>
              <View style={{justifyContent:'center'}}>
                <Text style={Styles.m_b_font}>내 게시글 보기</Text>
              </View>
              <View style={{justifyContent:'center'}}>
              <Icon name="chevron-forward-outline"  size={20}/>
              </View>
            </TouchableOpacity>
            <TouchableOpacity 
              style={{height:60,marginHorizontal:10, justifyContent:'center'}}
              onPress={()=>navigation.navigate('ClubManagementPage')}>
                <Text style={Styles.m_b_font}>관리자 설정</Text>
            </TouchableOpacity>

        </View>
    )
};

const styles=StyleSheet.create({
  container:{
    height:60, 
    borderBottomWidth:1, 
    borderColor:Color.l_color,
    flexDirection:'row', 
    justifyContent:'space-between',
    paddingHorizontal:10,

  }
})

export default ClubSettingPage;
