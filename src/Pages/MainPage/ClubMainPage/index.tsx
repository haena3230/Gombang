// ClubMainPage index.tsx
import React, { useEffect,useState } from 'react';
import {ScrollView,View, Text, Image, TouchableOpacity,StyleSheet, Button} from 'react-native';
import { Color, DWidth,Styles } from '~/@types/basic_style';
import ClubTitle from '~/Components/Club/ClubTitle';
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
  const [club,setClub] = useState<any>('')
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
          <View style={{width:'100%',aspectRatio:5/3,justifyContent:'center', alignItems:'center'}}>
            <Text>....</Text>
          </View>
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
       
        {empty?(
          null
        ):(
           <View style ={{backgroundColor:Color.w_color, width:'100%', aspectRatio:7/2, padding:5,marginTop:8}}>
              
              <Text style={Styles.s_b_font}>공지사항</Text>
              <ScrollView style={{width:DWidth}} horizontal={true}> 
              {feed.map((notice)=>{
                return(
                  <TouchableOpacity  key = {notice.id.toString()} onPress={()=>navigation.navigate('ClubNoticePage',{
                    postId:notice.id,
                    userId:notice.userId,
                    userName:notice.name,
                    userImg:notice.image,
                    createdAt:notice.createdAt

                  })}>
                  {notice.isNotice===1?(
                    <View style={styles.box}>
                      <Text style={Styles.s_g_font}>{notice.text}</Text>
                    </View>
                  ):(
                    null
                  )}
                  </TouchableOpacity>
                )
              })}
              </ScrollView>
          </View>
        )}
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
  )
}



const styles= StyleSheet.create({
    box:{
        width:DWidth*0.9, 
        aspectRatio:9/2,
        borderWidth:1, 
        borderColor:Color.l_color,
        marginHorizontal:5,
    },
})

export default ClubMainPage;
