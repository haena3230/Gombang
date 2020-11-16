// 피드 컴포넌트
import React, { useState } from 'react'
import {View, Text,TouchableOpacity, Image, Alert} from'react-native'
import { DWidth, Color,Styles } from '~/@types/basic_style'
import Icon from 'react-native-vector-icons/Ionicons'
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import AlignPhoto from '~/Components/FeedPhoto'
import { useNavigation } from '@react-navigation/native';

const ClubFeed=()=>{
    return(
        <View style={{width:DWidth, backgroundColor:Color.w_color}}>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                <ClubFeedUser />
                <ClubFeedMenu />
            </View>
            {/* textzone */}
            <View style={{padding:20}}>
                <Text style={Styles.m_b_font}>test입니다</Text>
            </View>
            <AlignPhoto />
            <LikeCommentsBtn />
            

        </View>
    )
}


// 작성자 정보
export const ClubFeedUser=()=>{
    return(
        <View style={{flexDirection:'row', alignItems:'center', margin:10}}>
          <Image
            style={{borderRadius:50, width:'20%',aspectRatio:1}}
            source={{
              uri: 'https://via.placeholder.com/100/F169B4/F169B4.png',
            }}
          />
          <View style={{marginLeft:10}}>
            <Text style = {Styles.m_b_font}>oo 동아리 회장</Text>  
            <Text style ={Styles.ss_b_font}>2020년 0월 0일</Text>
          </View>  
        </View>
    )
}

//피드 메뉴
export const ClubFeedMenu=()=>{
    const navigation = useNavigation();
    return(
        <Menu>
            <MenuTrigger>
                <Icon name="ellipsis-vertical-outline" size ={25} />
            </MenuTrigger>
            <MenuOptions>
                <MenuOption onSelect={() => navigation.navigate('ScrapPage')} >
                    <Text style={Styles.m_g_font}>스크랩하기</Text>
                </MenuOption>
                <MenuOption onSelect={() => Alert.alert(`공유test`)} >
                    <Text style={Styles.m_g_font}>공유하기</Text>
                </MenuOption>
                 <MenuOption onSelect={() => Alert.alert(`일정추가test`)} >
                    <Text style={Styles.m_g_font}>일정에 추가</Text>
                </MenuOption>
                {/* 자신이 쓴 글이라면 */}
                <View style={{width:'100%', borderWidth:1, height:1,borderColor:Color.l_color}}></View>
                <MenuOption onSelect={() => Alert.alert(`수정test`)} >
                    <Text style={Styles.m_g_font}>수정</Text>
                </MenuOption>
                 <MenuOption onSelect={() => Alert.alert(`삭제test`)} >
                    <Text style={Styles.m_g_font}>삭제</Text>
                </MenuOption>
            </MenuOptions>
        </Menu>  
    )
}

// 좋아요
const LikeCommentsBtn =()=>{
    const navigation = useNavigation();
    const[like,setLike] = useState(false);
    const onPressLike=()=>{setLike(!like)}
    return(
        <View >
            <View style={{flexDirection:'row', padding:20}}>
                <Text style={Styles.s_b_font}>좋아요 44개     댓글 43개</Text>
            </View>
            <View style={{flexDirection:'row', width:DWidth, marginBottom:20}}>
                <TouchableOpacity style={{width:DWidth/2, alignItems:'center'}} onPress={onPressLike}>
                    {like?(<Text style={Styles.m_p_font}>좋아요 취소</Text>):(
                        <Text style={Styles.m_b_font}>좋아요</Text>
                    )}
                    
                </TouchableOpacity>
                <TouchableOpacity style={{width:DWidth/2, alignItems:'center'}} onPress= {()=>navigation.navigate('ClubFeedPage')}>
                    <Text style={Styles.m_b_font}>댓글쓰기</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

// 일정 작성

interface FeedScheduleProps{
    onPressSD:()=>void;
}
export const FeedSchedule = ({onPressSD}:FeedScheduleProps)=>{
    return(
        <View style={{borderWidth:1,borderColor:Color.l_color, padding:10, margin:10}}>
            <TouchableOpacity style={{position:'absolute', right:10,top:10}}
                onPress={onPressSD}>
                <Icon name="close-circle-outline" size={15}/>
            </TouchableOpacity>
            <View style={{flexDirection:'row'}}>
                <View>
                    <Text style={Styles.s_g_font}>일정 제목    </Text>
                    <Text style={Styles.s_g_font}>시작 날짜</Text>
                    <Text style={Styles.s_g_font}>종료 날짜</Text>
                    <Text style={Styles.s_g_font}>장소</Text>
                    <Text style={Styles.s_g_font}>메모</Text>
                </View>
                <View style={{borderWidth:1,borderColor:Color.l_color}}/>
                <View style={{marginHorizontal:10}}>
                     <Text style={Styles.s_g_font}>oo동아리 OT</Text>
                    <Text style={Styles.s_g_font}>2020년 1월1일 19:00</Text>
                    <Text style={Styles.s_g_font}>2020년 1월1일 19:00</Text>
                    <Text style={Styles.s_g_font}>소프트웨어ICT관</Text>
                    <Text style={Styles.s_g_font}>-</Text>
                </View>
            </View>
            
        </View>
    )
}
export default ClubFeed
