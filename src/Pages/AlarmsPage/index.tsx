// AlarmsPage index.tsx
// 메인4
import React,{useState, useRef} from 'react';
import {Text, View, Button} from 'react-native';
import {TwoOpModal} from '~/Components/Modal';
import iid from '@react-native-firebase/iid';
import { TestFirst } from '../SearchPage/SearchClubPage';


async function getFBToken() {
  const fbtoken = await iid().getToken();
  console.log(fbtoken)
}



  
const AlarmsPage = () => {
  const[array,setArray] = useState<Array<string|undefined>>([])
  const onPress = ()=>{
    console.log('test')
    setArray([...array,'123'])
  }
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>AlarmsPage 메인4</Text>
      
      <Button title="get token" onPress={()=>getFBToken()} />
      <Button title="arraytest" onPress={onPress} />
      <Text>{array}</Text>
      <TwoOpModal fst_op="수정하기" snd_op="삭제하기" onPressMenuM={()=>null} onPressMenuD={()=>null}/>
    </View>
  );
};

export default AlarmsPage;
