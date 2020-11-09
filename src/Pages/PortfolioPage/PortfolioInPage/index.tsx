// PortfolioInPage index.tsx
// 포트폴리오 폴더 선택후
import React from 'react';
import {ScrollView,Text, View,Image, StyleSheet} from 'react-native';
import styled from 'styled-components';
import {Color, Styles} from '~/@types/basic_style';
import {TwoOpModal} from '~/Components/Modal';
import AlignPhoto from '~/Components/FeedPhoto';
import { ClubFeedUser } from '~/Components/Club/ClubFeed';

const PortfolioInPage = () => {
  return (
    <ScrollView style={{flex: 1, backgroundColor:Color.g_color,padding:5}}>
      <View style = {Style.feedContainer}>
        <PWFeed />
      </View>
       <View style = {Style.feedContainer}>
        <PSFeed />
      </View>
    </ScrollView>
  );
};

// 컨텐츠 피드 컴포넌트 (작성글)
const PWFeed=()=>{
  return(
    <View>
      {/* 날짜 및 버튼 */}
      <View style={{flexDirection:'row', justifyContent:'center'}}>
        <View style = {{margin:10, }}>
          <Text style={Styles.s_g_font}>2020년 x월 x일 </Text>
        </View>
        <View style = {{position:'absolute', right:0}}>
          <TwoOpModal fst_op = '수정하기' snd_op='삭제하기' onPressMenuM={()=>null} onPressMenuD={()=>null}/>
        </View>
      </View>
      {/* 이미지 */}
      <AlignPhoto />
      {/* text zone */}
      <View style= {{margin:5}}>
        <Text style={Styles.s_b_font}>TextZone</Text>
      </View>


    </View>
  );
}

// 컨텐츠 피드 컴포넌트 (스크랩글)
const PSFeed =()=>{

  return(
    <View>
      <View style= {{margin:5}}>
        <Text style ={Styles.s_g_font}>스크랩한 글</Text>
      </View>
      {/* 스크랩 정보 */}
      <View style = {{flexDirection:'row', justifyContent:'space-between'}}>
        <ClubFeedUser />
        <TwoOpModal fst_op = '수정하기' snd_op='삭제하기' onPressMenuM={()=>null} onPressMenuD={()=>null}/>
      </View>
      {/* TextZone */}
      <View style= {{margin:5}}>
        <Text style={Styles.s_b_font}>TextZone</Text>
      </View>
      {/* 이미지 */}
      <AlignPhoto />
    </View>
  );
}


const Style = StyleSheet.create({
  feedContainer:{
    backgroundColor:Color.w_color, 
    borderRadius:5, 
    padding:5,
    margin:2,
  },
})
export default PortfolioInPage;
