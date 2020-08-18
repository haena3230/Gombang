// MainPage index.tsx
import React from 'react';
import {View, Text, Button} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// for navigator
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//import pages
import SearchPage from '../SearchPage';
import NotificationPage from '../NotificationPage';
import FeedPage from '../FeedPage';
import MyCirclePage from './MyCirclePage';

// main 페이지 구성
function MainPage({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>MainPage</Text>
      <Button
        title="Go to My Circles"
        onPress={() => navigation.navigate('MyCirclePage')}></Button>
    </View>
  );
}

//  MyCirclesStack navi 생성
const MyCirclesStack = createStackNavigator();
// Tap navi 생성
const Tab = createBottomTabNavigator();

// MyCirclesStack Navi
function MainPageNavigator() {
  return (
    <MyCirclesStack.Navigator initialRouteName="Main">
      <MyCirclesStack.Screen name="MainPage" component={MainPage} />
      <MyCirclesStack.Screen name="MyCirclePage" component={MyCirclePage} />
    </MyCirclesStack.Navigator>
  );
}

// 하단바 tap 메뉴
function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="MainPageNavigator">
        {/* 탭 메뉴 */}
        <Tab.Screen name="MainPageNavigator" component={MainPageNavigator} />
        <Tab.Screen name="SearchPage" component={SearchPage} />
        <Tab.Screen name="NotificationPage" component={NotificationPage} />
        <Tab.Screen name="FeedPage" component={FeedPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default TabNavigator;
