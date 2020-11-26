// 동아리 공지사항 detail 페이지
import React, { useEffect, useState } from 'react';
import {View,Text,ScrollView,StyleSheet, Image} from 'react-native';
import {Color, Styles,DWidth, Page} from '~/@types/basic_style';
import {ClubFeedUser,ClubFeedMenu,FeedSchedule} from '~/Components/Club/ClubFeed';
import {PartyView,Party} from '~/Components/Club/ClubNotice';
import {URL} from '~/@types/Gombang'
import { useNavigation } from '@react-navigation/native';

const ClubNoticePage =({route}:any)=>{
    const{postId ,userName,userImg,createdAt} = route.params
    const navigation=useNavigation()
    const [data,setData] = useState<Array<any>>([])
    const [img,setImg] =useState<Array<any>>([])
    const axios = require('axios')
    const[empty,setEmpty] = useState(false)
    useEffect(()=>{
        axios.get(`${URL}/post/${postId}/detail`)
        .then(async (res:any)=>{
            await setData(res.data)
            await setImg(res.data.Files)
            setEmpty(false)
        })
    },[])
    return(
        <View style={Page.page_container}>
            {empty?(
                null
            ):(
                <ScrollView>
                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                        <ClubFeedUser createdAt={createdAt} writerImg={userImg} writerName={userName}/>
                        <ClubFeedMenu />
                    </View>
                    {/* Textzone */}
                    <View style={{margin:5}}>
                        <Text style={Styles.m_b_font}>{data.text}</Text>
                    </View>
                    {data.title===null?(
                        null
                    ):(<FeedSchedule title={data.title} startDate={data.startDate} endDate={data.endDate} place={data.place} memo={data.memo}/>)}
                    
                    <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
                        <PartyView onPress={()=>navigation.navigate('NoticeParty',{
                            title:data.title,
                            postId:postId
                        })}/>
                        <Party />    
                    </View>
                    {img.map((img)=>{
                        return(
                            <View style={{marginVertical:10}} key = {img.name}>
                                {img.type==='image'?(
                                    <Image style={{width:'100%',aspectRatio:1}} source={{uri:`${URL}/image/${img.name}`}}/>
                                ):(
                                    null
                                )}

                            </View>
                        )
                    })}
                    
                </ScrollView>
            )}
             
            

        </View>
    )
}

const Box=()=>{
    return(
        <View style={styles.box}>
            <Text style={Styles.s_g_font}>공지사항test</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    box:{
        width:DWidth*0.8, 
        aspectRatio:9/2,
        borderWidth:1, 
        borderColor:Color.l_color,
        marginHorizontal:5,
    }
})

export default ClubNoticePage;