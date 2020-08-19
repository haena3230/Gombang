// CalenderPage index.tsx
import React from 'react';
import {View, Text, Button} from 'react-native';

// 일정(달력)
function CalenderPage({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Calender</Text>
      <Button
        title="Go to Main"
        onPress={() => navigation.navigate('MainPage')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default CalenderPage;
