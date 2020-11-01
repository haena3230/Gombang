// AlarmsPage index.tsx
// 메인4
import React from 'react';
import {Text, View, Button} from 'react-native';
import {TwoOpModal} from '~/Components/Modal';

const AlarmsPage = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>AlarmsPage 메인4</Text>
      <Button
        title="Go to Main"
        onPress={() => navigation.navigate('MainPage')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <TwoOpModal fst_op="수정하기" snd_op="삭제하기" onPressMenuM={()=>null} onPressMenuD={()=>null}/>
    </View>
  );
};

export default AlarmsPage;
