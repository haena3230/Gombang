// 댓글쓰기 눌렀을때 나오는 ClubFeedPage
import React, { useEffect,useState } from 'react'
import { ScrollView,View, Text } from 'react-native';
import ClubFeed from '~/Components/Club/ClubFeed';
import { Comments, CommentList } from '~/Components/Club/ClubFeed/Comments';
import{URL} from '~/@types/Gombang'
import { AlignPhotoOne } from '~/Components/FeedPhoto';

const ClubFeedPage=({route}:any)=>{
    const{postId,userId,text,writerName,writerImg,createdAt} = route.params
    const[feedImg,setFeedImg] = useState<Array<any>>([])
    const[comments,setComments] = useState<Array<any>>([])
    const[empty,setEmpty] = useState(true)
    const axios = require('axios')
    useEffect(()=>{
        axios.get(`${URL}/post/${postId}/detail`)
        .then(async (res:any)=>{
            await setFeedImg(res.data.Files)
            await setComments(res.data.comments)
            console.log(res.data.Files)
            setEmpty(false)
        })
    },[])

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
                        <CommentList userImg={res.image} userName={res.name} text={res.comment}/>
                    )
                })}
                <View style={{height:70}}></View>
            </ScrollView>
            )}
            
            <Comments holder={'댓글을 입력하세요.'} img={''}/>
        </View>
    )
}

export default ClubFeedPage;