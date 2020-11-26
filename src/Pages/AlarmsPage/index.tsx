// AlarmsPage index.tsx
// 메인4
import React,{useEffect, useState} from 'react';
import {Text, View, Button} from 'react-native';
import {TwoOpModal} from '~/Components/Modal';
import {URL} from '~/@types/Gombang';





  
const AlarmsPage = () => {
  useEffect(()=>{
    axios.get(`${URL}/alarm/12`)
    .then((res:any)=>{
      console.log(res.data)
    })
  },)
  const axios = require('axios')
  const[array,setArray] = useState<Array<string|undefined>>([])
  const onPress = ()=>{
    console.log('test')
    setArray([...array,'123'])
  }
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>AlarmsPage 메인4</Text>
      
      <Button title="arraytest" onPress={onPress} />
      <Text>{array}</Text>
      <TwoOpModal fst_op="수정하기" snd_op="삭제하기" onPressMenuM={()=>null} onPressMenuD={()=>null}/>
    </View>
  );
};

export default AlarmsPage;
