// 공식 동아리 인증 만들기 
import React, { useState } from 'react';
import {View, Text, StyleSheet, Alert, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LongButton } from '~/Components/Button';
import {Styles,Color} from '~/@types/basic_style';
import {useNavigation} from '@react-navigation/native';
import {URL} from '~/@types/Gombang'
import {useSelector,useDispatch} from 'react-redux'
import { imageAction } from '~/Store/actions';
import AsyncStorage from '@react-native-community/async-storage'



const CertifiedPage =({route}:any)=>{
    
    const [id,setId]=useState('')
    AsyncStorage.getItem('UserId').then((res)=>setId(res))
    const imgUri = useSelector((state)=>state.login.imageUri)
    const imgName= useSelector((state)=>state.login.imageName)
    const dispatch = useDispatch()
    const setImg=(inputUri:string,inputName:string)=>{
        dispatch(imageAction(inputUri,inputName))
    }
    const axios = require('axios')
    const{
        name,
        campus,
        type,
        classi,
        hashtags,
    } = route.params
    const navigation=useNavigation();
    const onPress=()=>{
            
            const formData = new FormData();
            if(imgUri!==''){
                formData.append('image',{
                uri:imgUri,
                type:'image/jpeg',
                name:imgName,
            })
            }
            formData.append('name',name)
            formData.append('presidentUserId',id)
            formData.append('campus',campus)
            formData.append('type',type)
            formData.append('classification',classi)
            formData.append('hashtags',hashtags)
            axios.post(`${URL}/club`,formData
            ,{
                headers: { 'content-type': 'multipart/form-data' }
            }
            )
            .then((res: any) => {
                console.log(res.data);
                setImg('','');
            })
            .catch((err: any) => {
            console.log(err);
            setImg('','');
            Alert.alert('입력란을 다시 확인해 주세요')
            });
                
           
        navigation.reset({
              index: 0,
              routes: [{ name: 'MainStackNavi' }],
            })

    }
    return(
        <View style={{backgroundColor:Color.w_color, flex:1, padding:20}}>
            <Text style={Styles.m_b_font}>공식 동아리 인증 받기</Text>
            <Text style={Styles.ss_g_font}>학교에서 공식 동아리 인증을 받은 서류를 첨부하면 공식 동아리 인증 마크를 받을 수 있습니다.</Text>
            <TouchableOpacity style={styles.long} onPress={()=>Alert.alert('준비중입니다.')}>
                <Text style={Styles.m_g_font}>  파일 추가하기</Text>
            </TouchableOpacity>
            <LongButton buttonTitle={'건너뛰고 생성하기'} onPress={onPress} />
        </View>
    )
}


const styles = StyleSheet.create({
    long:{
        justifyContent:'center',
        borderWidth:1,
        borderColor:Color.l_color,
        height:40,
        marginVertical:10,
    },
})
export default CertifiedPage;