// ChattingPage index.tsx
import React from 'react';
import {View, Text, Button} from 'react-native';

// stack navi를 위한 prop
import {StackNavigationProp} from '@react-navigation/stack';
type NavigationProp = StackNavigationProp<
  ChattingPageParamList,
  'ChattingPage'
>;
interface Props {
  navigation: NavigationProp;
}

// 동아리 채팅 동아리메인2
const ChattingPage = ({navigation}: Props) => {
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
};

export default ChattingPage;
