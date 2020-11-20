// 질문작성페이지
import React,{useState} from 'react'
import {TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Page,Styles} from '~/@types/basic_style'

import {useNavigation} from '@react-navigation/native'
import {URL} from '~/@types/Gombang'
import { LongButton } from '~/Components/Button';
const SearchQPage=({route}:any)=>{
    const[text,setText] = useState('')
    const navigation = useNavigation()
    const axios = require('axios')
    const {clubId,userId} = route.params
    return(
        <View style={Page.page_container}>
            <TextInput
                placeholder={'내용을 입력하세요~'}
                onChangeText={(text) => setText(text)}
                value={text}
                multiline
                maxLength={1000}
                style={Styles.m_g_font}
            />
            <LongButton  buttonTitle={'등록하기'} onPress={async ()=>{
                await axios.post(`${URL}/qna/question`,{
                    'userId':userId,
                    'clubId':clubId,
                    'question':text,
                }).then((res:any)=>{
                    console.log(res.status)
                })
                
                navigation.goBack()
            }} />
        </View>
    )
}

export default SearchQPage