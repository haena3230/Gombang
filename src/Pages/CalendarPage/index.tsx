// CalendarPage index.tsx
//main3
import React from 'react';
import {View, Text, Button} from 'react-native';
import {CalendarProps} from '~/@types/navigation';

// 일정(달력)
const CalendarPage = ({navigation}: CalendarProps) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Calendar 메인3</Text>
      <Button
        title="Go to Main"
        onPress={() => navigation.navigate('MainPage')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default CalendarPage;
