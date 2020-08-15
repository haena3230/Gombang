// MyCirclePage
import React from 'react';
import {View, Text, Button} from 'react-native';

// 내 동아리
function MyCirclePage({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>MyCircles</Text>
      <Button
        title="Go to Main"
        onPress={() => navigation.navigate('MainPage')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default MyCirclePage;
