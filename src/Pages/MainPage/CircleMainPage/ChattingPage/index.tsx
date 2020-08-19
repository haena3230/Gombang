// ChattingPage index.tsx
import React from 'react';
import {View, Text, Button} from 'react-native';

// 동아리 채팅 동아리메인2
function ChattingPage({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Chatting 동아리메인2</Text>
      <Button
        title="Go to Main"
        onPress={() => navigation.navigate('MainPage')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default ChattingPage;
