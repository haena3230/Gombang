// EventPage index.tsx
import React from 'react';
import {View, Text, Button} from 'react-native';

// 메인 -> eventPage
const EventPage = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text>이벤트 페이지</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default EventPage;
