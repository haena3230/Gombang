// 댓글쓰기 눌렀을때 나오는 ClubFeedPage
import React, { useEffect,useState } from 'react'
import { ScrollView,View, Text } from 'react-native';
import ClubFeed from '~/Components/Club/ClubFeed';
import { Comments, CommentList } from '~/Components/Club/ClubFeed/Comments';
import{URL} from '~/@types/Gombang'
import { AlignPhotoOne } from '~/Components/FeedPhoto';
import {useSelector} from 'react-redux'

const ClubFeedPage=({route}:any)=>{
    const{postId,userId,text,writerName,writerImg,createdAt} = route.params
    const userImg = useSelector((state)=>state.login.image)
    const[feedImg,setFeedImg] = useState<Array<any>>([])
    const[comments,setComments] = useState<Array<any>>([])
    const[empty,setEmpty] = useState(true)
    const[state,setState]=useState(false)
    const axios = require('axios')
    useEffect(()=>{
        axios.get(`${URL}/post/${postId}/detail`)
        .then(async (res:any)=>{
            await setFeedImg(res.data.Files)
            await setComments(res.data.comments)
            console.log(res.data.Files)
            setEmpty(false)
        })
    },[state])
    const onPressCB=()=>{
        axios.post(`${URL}/post/${postId}/comment`,{
            'userId':userId,
            'comment' : text
        })
        .then((res:any)=>{
            console.log(res.data)
            setState(!state)
        })
    
    }
    return(
        <View>
            {empty?(
                <Text>...</Text>
            ):(
                <ScrollView>
                <ClubFeed text={text} writerImg={writerImg} writerName={writerName} createdAt={createdAt}/>
                {feedImg.map((img)=>{
                    return(
                        <View key={img.name.toString()}>
                            {img.type==='image'?(
                                <AlignPhotoOne image={img.name}/>
                            ):(null)}
                        </View>
                    )
                })}
                {comments.map((res)=>{
                    return(
                        <CommentList key ={res.id} userImg={res.image} userName={res.name} text={res.comment}/>
                    )
                })}
                <View style={{height:60}}></View>
            </ScrollView>
            )}
            
            <Comments holder={'댓글을 입력하세요.'} img={userImg}  onPressCB={onPressCB}/>
        </View>
    )
}

export default ClubFeedPage;