// CalendarPage index.tsx
import React from 'react';
import {View, Text, Button} from 'react-native';

// stack navi를 위한 prop
import {StackNavigationProp} from '@react-navigation/stack';
type NavigationProp = StackNavigationProp<
  CalendarPageParamList,
  'CalendarPage'
>;
interface Props {
  navigation: NavigationProp;
}

// 일정(달력)
const CalendarPage = ({navigation}: Props) => {
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
