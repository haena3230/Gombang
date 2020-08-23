// MainPage index.tsx
// 메인1

import React from 'react';
import {View, Text, Button} from 'react-native';

// stack navi를 위한 prop
import {StackNavigationProp} from '@react-navigation/stack';
type NavigationProp = StackNavigationProp<MainPageParamList, 'MainPage'>;
interface Props {
  navigation: NavigationProp;
}

// main 페이지 구성
const MainPage = ({navigation}: Props) => {
  return (
    <View style={{flex: 1}}>
      <Text>MainPage 메인1</Text>
      <View style={{flex: 1}}>
        <Button
          title="이벤트 배너/ 이벤트페이지로"
          onPress={() => navigation.navigate('EventPage')}
        />
      </View>
      <View style={{flex: 1}}>
        <Button
          title="동아리 리스트/ 동아리메인으로"
          onPress={() => navigation.navigate('CircleMainPage')}
        />
      </View>
      <View style={{flex: 1}}>
        <Button
          title="일정 / 캘린더로"
          onPress={() => navigation.navigate('CalendarPage')}
        />
      </View>
    </View>
  );
};

export default MainPage;
