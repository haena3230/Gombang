// MainPage index.tsx
// 메인1
import React from 'react';
import {View, Text, Button} from 'react-native';

// main 페이지 구성
function MainPage({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>MainPage 메인1</Text>
      <Button
        title="Go to My Circle"
        onPress={() => navigation.navigate('CircleMainPage')}></Button>
      <Button
        title="Go to My Calender"
        onPress={() => navigation.navigate('CalenderPage')}></Button>
    </View>
  );
}

export default MainPage;
