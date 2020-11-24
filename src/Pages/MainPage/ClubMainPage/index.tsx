// ClubMainPage index.tsx
import React, { useEffect,useState } from 'react';
import {ScrollView,View, Text, Image, TouchableOpacity} from 'react-native';
import { Color, DWidth } from '~/@types/basic_style';
import ClubTitle from '~/Components/Club/ClubTitle';
import ClubNotice from '~/Components/Club/ClubNotice';
import ClubFeed, { LikeCommentsBtn } from '~/Components/Club/ClubFeed';
import { WriteBtn } from '~/Components/Button/WriteBtn';
import { useNavigation } from '@react-navigation/native';
import {useSelector} from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons'
import{URL} from '~/@types/Gombang'
import { AlignPhotoOne } from '~/Components/FeedPhoto';
import Clubbackgroundbasic from '~/Assets/Clubbackgroundbasic.svg'



// 동아리메인1
const ClubMainPage = () => {
  const[em,setEm] = useState(true)
  const [empty,setEmpty] = useState(true)
  const [club,setClub] = useState<Array<any>>([])
  const [feed,setFeed] = useState<Array<any>>([])
  const [img,setImg] = useState('')
  const [state,setState] = useState(false)
  const clubId = useSelector((state)=>state.login.clubId)
  const userId = useSelector((state)=>state.login.userId)
  const axios = require('axios')
  useEffect(()=>{
    try{
      axios.get(`${URL}/club/${clubId}`)
      .then(async (res:any)=>{
        await setClub(res.data)
        await setImg(res.data.image)
        setEm(false)

      })
      axios.get(`${URL}/post/${clubId}/${userId}`)
      .then(async (res:any)=>{
        await setFeed(res.data)
        setEmpty(false)
      })
    }catch(e){
      console.log('err')
    }
  },[state])
  const navigation = useNavigation()
  // 좋아요
  return (
    <View  style={{flex: 1,backgroundColor:Color.l_color}}>
       <Icon name = "home-outline" size={25} onPress={()=>navigation.navigate('MainPage')} style={{zIndex:2,position:'absolute',top:10,left:10}} />
      <ScrollView>
        {em?(
          <Text>...</Text>
        ):(
           <View>
            {club.backgroundImage!==''?(
              <Image 
              source = {{uri: `${URL}/image/${club.backgroundImage}`,}}
              style={{width:'100%', aspectRatio:5/3}}
            />
            ):(
              <Clubbackgroundbasic style={{width:'100%', aspectRatio:5/3}}/>
            )}
            <ClubTitle clubName={club.name} clubUserNum={club.memberCount} clubImg={img}/>
          </View>
        )}
       
        <View style={{marginTop:8}}>
          <ClubNotice />
        </View>
        {/* 피드들 */}
        {empty?(
          null
        ):(
          feed.map((feed)=>{
          return(
          <View style={{marginTop:8}} key = {feed.id.toString()}> 
            <ClubFeed 
              text = {feed.text} 
              writerName={feed.name}
              writerImg={feed.image}
              createdAt={feed.createdAt}
              />
              {feed.Files!==null?(
                <View>
                  {feed.Files.map((img)=>{
                    return(
                      <View key = {img.name}>
                        {img.type==='image'?(
                          <AlignPhotoOne image={img.name}/>
                        ):(null)}
                    </View>
                    )
                  })}
                </View>
              ):(
                null
              )}
            <LikeCommentsBtn likeCount={feed.like_count} commentCount={feed.comment_count} like ={feed.like} 
              onPressLike={()=>{
                 axios.patch(`${URL}/post/${feed.id}/like`,{
                      'userId':userId
                  })
                  .then((res:any)=>{
                      console.log(res.status)
                      setState(!state)
                  })
              }}
              onPressComment={()=>navigation.navigate('ClubFeedPage',{
                postId:feed.id,
                userId:userId,
                text:feed.text,
                writerName:feed.name,
                writerImg:feed.image,
                createdAt:feed.createdAt,
              })}/>
          </View>  
          )
        })
      )}
      {/* <Text>{img.name}</Text> */}
      </ScrollView>
      <TouchableOpacity 
          style={{position:'absolute', bottom:0,left:DWidth/2-50}}
          onPress={()=>navigation.navigate('ClubWritePage')}>
        <WriteBtn text={'글쓰기'} />
      </TouchableOpacity>
    </View>
  );
};

export default ClubMainPage;
