// CircleSettingPage index.tsx
import React from 'react';
import {View, Text, Button} from 'react-native';

// 동아리 설정 페이지 동아리메인5
function CircleSettingPage({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>동아리 설정 페이지 동아리메인5</Text>
      <Button
        title="Go to Main"
        onPress={() => navigation.navigate('MainPage')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default CircleSettingPage;
