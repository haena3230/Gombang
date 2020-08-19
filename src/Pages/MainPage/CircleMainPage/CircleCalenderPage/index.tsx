// CircleCalenderPage index.tsx
import React from 'react';
import {View, Text, Button} from 'react-native';

// 동아리 캘린더 메뉴 동아리메인3
function CircleCalenderPage({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>동아리 선택시 캘린더 메뉴 동아리메인3</Text>
      <Button
        title="Go to Main"
        onPress={() => navigation.navigate('MainPage')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default CircleCalenderPage;
