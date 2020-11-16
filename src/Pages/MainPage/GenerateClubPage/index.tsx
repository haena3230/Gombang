// 동아리 생성 페이지ㅣㅏ런이ㅏ러나ㅣ런이

import { Picker } from '@react-native-community/picker';
import React, { useEffect, useState } from 'react';
import {View,Text, StyleSheet, Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import AddPhoto from '~/Components/AddPhoto';
import { LongButton } from '~/Components/Button';
import { HashTagIcon, AddHashTagButton } from '~/Components/HashTag';
import {Styles, Color } from '~/@types/basic_style';
import {useNavigation} from '@react-navigation/native';
import {URL} from '~/@types/Gombang';
import AsyncStorage from '@react-native-community/async-storage'
import Modal from 'react-native-modal';
const GenerateClubPage=()=>{
    const navigation =useNavigation();
    const [img,setImg] = useState<string|null>('');
    const [imgName,setImgName] = useState<string|null>('');
    const [name,setName] = useState('');
    const [campus,setCampus] = useState<string | number>('');
    const [type,setType] = useState<string | number>('');
    const [classi,setClassi] = useState<string | number>('');
    const [id,setId] = useState<string|null>('')
    const[tagArr,setTagArr] = useState<Array<string>>([]);
    const axios = require('axios')
    // 유저 아이디 
    useEffect(()=>{
        AsyncStorage.getItem('UserId').then((value) => {setId(value)})
    },[])
    // 해시태그 추가
    const[isVisible,setIsVisible] = useState(false);
    const toggle=()=>{
        setIsVisible(!isVisible);
    }
    const [tag,setTag] = useState('')
     const onPressAddTag=()=>{
        toggle()
    }
    const onPressSaveTag=async ()=>{
        await setTagArr([...tagArr,String(tag)])
        console.log(JSON.stringify(tagArr))
        toggle()
    }
    // 등록
   
    const onPress=()=>{
         (async () => {
            await AsyncStorage.getItem('userImgUri').then(async (value) => {await setImg(value)});
            await AsyncStorage.getItem('userImgName').then(async (value) => {await setImgName(value)});
            
            const formData = new FormData();
            formData.append('name',name)
            formData.append('presidentUserId',id)
            formData.append('campus',campus)
            formData.append('type',type)
            formData.append('classification',classi)
            formData.append('hashtags',tagArr.toString())
            await axios.post(`${URL}/club`,formData
            // ,{
            //     headers: { 'content-type': 'multipart/form-data' }
            // }
            )
            .then((res: any) => {
                console.log(res.data);
            })
                .catch((err: any) => {
                console.log(err);
                });
                
            })();
        navigation.navigate('CertifiedPage')
         

    }
    return(
        <View style={{backgroundColor:Color.w_color, flex:1,padding:20}}>
            <AddPhoto />
            <View style={styles.long}>
                <TextInput
                    placeholder={'동아리 이름'}
                    onChangeText={(text) => setName(text)}
                    value={name}
                    />
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <View style={styles.short}>
                 <Picker
                    selectedValue={campus}
                    onValueChange={(itemValue: React.SetStateAction<string | number>) => {
                        setCampus(itemValue);
                    }}
                    mode={'dropdown'}
                    style={{
                        width:150,
                        height: 40,
                        color: Color.g_color,
                    
                    }}>
                    <Picker.Item label="캠퍼스" value="캠퍼스" />
                    <Picker.Item label="죽전" value="죽전" />
                    <Picker.Item label="천안" value="천안" />
                    
                </Picker>
            </View>
            <View style={styles.short}>
                 <Picker
                    selectedValue={type}
                    onValueChange={(itemValue: React.SetStateAction<string | number>) => {
                        setType(itemValue);
                    }}
                    mode={'dropdown'}
                    style={{
                        width: 150,
                        height: 40,
                        color: Color.g_color,
                    }}>
                    <Picker.Item label="구분" value="구분" />
                    <Picker.Item label="중앙동아리" value="중앙동아리" />
                    <Picker.Item label="일반동아리" value="일반동아리" />
                    <Picker.Item label="연합동아리" value="연합동아리" />

                    
                </Picker>
            </View>
            </View>
            <View style={styles.long}>
                 <Picker
                    selectedValue={classi}
                    onValueChange={(itemValue: React.SetStateAction<string | number>) => {
                        setClassi(itemValue);
                    }}
                    mode={'dropdown'}
                    style={{
                        height: 40,
                        color: Color.g_color,
                    }}>
                    <Picker.Item label="세부 카테고리" value="세부 카테고리" />
                    <Picker.Item label="교양" value="교양" />
                    <Picker.Item label="학술" value="학술" />
                    <Picker.Item label="봉사" value="봉사" />
                    <Picker.Item label="문예창작" value="문예창작" />
                    <Picker.Item label="종교" value="체육" />
                </Picker>
            </View>
            <Text style={Styles.ss_g_font}>#을 이용해 동아리를 소개해보세요.</Text>
            <View style={{flexDirection:'row', padding:5, flexWrap:'wrap', marginVertical:10}}>
                {tagArr.map((tag,index)=>{
                    return(
                        <HashTagIcon key = {index} text={tag}/>
                    )
                })}
                
                <AddHashTagButton onPress={onPressAddTag}/>
                {/* 해시태그 추가 모달 */}
                <Modal isVisible={isVisible} onBackdropPress={toggle}>
                    <View style={{backgroundColor:Color.w_color}}>
                        <TextInput
                            placeholder={'해시태그 입력'}
                            onChangeText={(text) => setTag(text)}
                            value={tag}
                            maxLength={10}
                        />
                        <Button title={'추가'} onPress={onPressSaveTag}/>
                    </View>
                </Modal>
            </View>
            <LongButton buttonTitle={'다음'} onPress={onPress}/>
        </View>
    )
}


const styles=StyleSheet.create({
    long:{
        justifyContent:'center',
        borderWidth:1,
        borderColor:Color.l_color,
        height:40,
        marginVertical:10,
    },
    short:{
        justifyContent:'center',
        borderWidth:1,
        borderColor:Color.l_color,
        height:40,
        marginVertical:10,
        
    },

})

export default GenerateClubPage;