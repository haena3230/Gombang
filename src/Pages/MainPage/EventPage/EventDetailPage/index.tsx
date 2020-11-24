// 이벤트 자세히 화면
import React,{useEffect,useState} from 'react'
import {View,Text, ScrollView, Image} from 'react-native'
import {Color, Styles} from '~/@types/basic_style'
import {URL} from '~/@types/Gombang'

const EventDetailPage =({route}:any)=>{
    const {postId} = route.params
    const axios=require('axios')
    const [event,setEvent] = useState<Array<any>>([])
    const [file,setFile] = useState<Array<any>>([])
    useEffect(()=>{
        axios.get(`${URL}/post/${postId}/detail`)
        .then(async (res)=>{
             await setEvent(res.data)
             await setFile(res.data.Files)
             console.log(res.data)
             console.log(res.data.Files)
        })
    },[])
    return(
        <ScrollView style={{flex:1, backgroundColor:Color.w_color}}>
            <View style={{padding:10}}>
                <Text style={Styles.m_b_font}>{event.text}</Text>
            </View>
            {file.map((image)=>{
                return(
                <View style={{marginVertical:10}} key = {image.name}>
                    {image.type==='image'?(
                        <Image source={{uri:`${URL}/image/${image.name}`}} style={{width:'100%',aspectRatio:1}}/>
                    ):(
                        null
                    )}
                </View>
             )
            })}
            
            
        </ScrollView>
    )
}

export default EventDetailPage