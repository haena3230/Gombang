// PortfolioInPage index.tsx
// 포트폴리오 폴더 선택후
import React, { useEffect,useState } from 'react';
import {ScrollView,Text, View,Image, StyleSheet, Button} from 'react-native';
import {Color, Styles} from '~/@types/basic_style';
import {TwoOpModal} from '~/Components/Modal';
import {AlignPhotoOne} from '~/Components/FeedPhoto';
import { ClubFeedUser } from '~/Components/Club/ClubFeed';
import {useSelector} from 'react-redux'
import {URL} from '~/@types/Gombang'

const PortfolioInPage = () => {
  const folderId =  useSelector((state)=>state.login.folderId)
  const userId = useSelector((state)=>state.login.userId)
  const axios = require('axios')
  const [feed,setFeed] = useState<Array<any>>([])
  
  // postId 
  useEffect(()=>{
    axios.get(`${URL}/portfolio/folder/${folderId}`)
    .then((res:any)=>{
      console.log(res.data.portfolio)
      setFeed(res.data.portfolio)
    })
  },[])
  const formData = new FormData()
  formData.append('userId',userId)
  formData.append('portfolioFolderId',folderId)
  formData.append('text', '한아름도서관 봉사활동 참여 3시간')

  // 작성하기
  const onPress=()=>{
    try{
       axios.post(`${URL}/portfolio`,formData)
      .then((res:any)=>{
        console.log(res.status)
        console.log(res.data)
    })
    }catch(e){
      console.log('err')
    }
  }

  return (
    <ScrollView style={{flex: 1, backgroundColor:Color.l_color,padding:5}}>
      {/* <Button title='test' onPress={onPress} /> */}
      {feed.map((feed)=>{
        return(
          <View style = {Style.feedContainer} key ={feed.id}>
            <PWFeed text ={feed.text} image={feed.name} postId={feed.postId}/>
          </View>
        )
      })}
       <View style = {Style.feedContainer}>
        {/* <PSFeed /> */}
      </View>
    </ScrollView>
  );
};

// 컨텐츠 피드 컴포넌트 (작성글)
interface PWFeedProps{
  text:string;
  image:string;
  postId:string;
}
const PWFeed=({text,image,postId}:PWFeedProps)=>{
  const axios=require('axios')
  const onPressMenuD=()=>{
    axios.delete(`${URL}/post/${postId}`)
    .then((res:any)=>{
      console.log(res.status)
    })
  }
  return(
    <View>
      {/* 날짜 및 버튼 */}
      <View style={{flexDirection:'row', justifyContent:'center'}}>
        <View style = {{margin:10, }}>
          <Text style={Styles.s_g_font}>2020년 11월 19일 </Text>
        </View>
        <View style = {{position:'absolute', right:0}}>
          <TwoOpModal fst_op = '수정하기' snd_op='삭제하기' onPressMenuM={()=>null} onPressMenuD={onPressMenuD}/>
        </View>
      </View>
      {/* 이미지 */}
      {image!==null?(
        <AlignPhotoOne image={image}/>
      ):(
        null
      )}
      {/* text zone */}
      <View style= {{margin:5}}>
        <Text style={Styles.s_b_font}>{text}</Text>
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
        <ClubFeedUser writerName={'tt'} writerImg={'tt'} createdAt={'tt'}/>
        <TwoOpModal fst_op = '수정하기' snd_op='삭제하기' onPressMenuM={()=>null} onPressMenuD={()=>null}/>
      </View>
      {/* TextZone */}
      <View style= {{margin:5}}>
        <Text style={Styles.s_b_font}>TextZone</Text>
      </View>
      {/* 이미지 */}
      {/* <AlignPhotoOne /> */}
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
