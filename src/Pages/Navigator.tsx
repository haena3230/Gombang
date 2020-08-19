// Navigator.tsx 내비게이션 모음
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

// for navigator
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import Main pages
import MainPage from './MainPage';
import SearchPage from './SearchPage';
import NotificationPage from './NotificationPage';
import PortfolioPage from './PortfolioPage';

// import MainPage stack page
import CircleMainPage from './MainPage/CircleMainPage';
import CalenderPage from './MainPage/CalenderPage';

// import SearchPage stack page
import SearchCirclePage from './SearchPage/SearchCirclePage';

// import CircleMainPage pages
// import CircleMainPage from './MainPage/CircleMainPage'
import ChattingPage from './MainPage/CircleMainPage/ChattingPage';
import CircleCalenderPage from './MainPage/CircleMainPage/CircleCalenderPage';
import MemberListPage from './MainPage/CircleMainPage/MemberListPage';
import CircleSettingPage from './MainPage/CircleMainPage/CircleSettingPage';

// Navigator 생성

// MainPage Stack navi 생성
const MainStack = createStackNavigator();
// SearchPage Stack navi 생성
const SearchStack = createStackNavigator();
// MainPage Bottom Tap navi 생성
const MainTab = createBottomTabNavigator();
// CircleMainPage Bottom Tab Navi 생성
const CircleMainTab = createBottomTabNavigator();

// Stack Navigator 작성

// MainPage Stack Navi
function MainPageNavigator() {
  return (
    <MainStack.Navigator initialRouteName="MainPage">
      <MainStack.Screen name="MainPage" component={MainPage} />
      <MainStack.Screen
        name="CircleMainPage"
        component={CircleMainTabNavigator}
      />
      <MainStack.Screen name="CalenderPage" component={CalenderPage} />
    </MainStack.Navigator>
  );
}

// SearchPage Stack Navi
function SearchPageNavigator() {
  return (
    <SearchStack.Navigator initialRouteName="SearchPage">
      <SearchStack.Screen name="SearchPage" component={SearchPage} />
      <SearchStack.Screen
        name="SearchCirclePage"
        component={SearchCirclePage}
      />
    </SearchStack.Navigator>
  );
}

// Tab Navigator 작성

// MainPage Bottom_tab navi
function MainTabNavigator() {
  return (
    <NavigationContainer>
      <MainTab.Navigator initialRouteName="MainPageNavigator">
        {/* 탭 메뉴 */}
        {/* MainPage 탭 메인1*/}
        <MainTab.Screen
          name=" "
          component={MainPageNavigator}
          options={{
            // 아이콘 추가 및 탭 옵션
            tabBarIcon: ({focused}) =>
              focused ? (
                <Icon name="home" size={25} color="#999" />
              ) : (
                <Icon name="home-outline" size={25} color="#999" />
              ),
          }}
        />
        {/* SearchPage 탭 메인2*/}
        <MainTab.Screen
          name="  "
          component={SearchPageNavigator}
          options={{
            tabBarIcon: ({focused}) =>
              focused ? (
                <Icon name="search" size={25} color="#999" />
              ) : (
                <Icon name="search-outline" size={25} color="#999" />
              ),
          }}
        />
        {/* NotificationPage 탭 메인3*/}
        <MainTab.Screen
          name="   "
          component={NotificationPage}
          options={{
            tabBarIcon: ({focused}) =>
              focused ? (
                <Icon name="notifications" size={25} color="#999" />
              ) : (
                <Icon name="notifications-outline" size={25} color="#999" />
              ),
          }}
        />
        {/* PortfolioPage 탭 메인4*/}
        <MainTab.Screen
          name="    "
          component={PortfolioPage}
          options={{
            tabBarIcon: ({focused}) =>
              focused ? (
                <Icon name="newspaper" size={25} color="#999" />
              ) : (
                <Icon name="newspaper-outline" size={25} color="#999" />
              ),
          }}
        />
      </MainTab.Navigator>
    </NavigationContainer>
  );
}

// CircleMainPage BottomTab navi 작성
export function CircleMainTabNavigator() {
  return (
    <CircleMainTab.Navigator>
      <CircleMainTab.Screen name="1" component={CircleMainPage} />
      <CircleMainTab.Screen name="2" component={ChattingPage} />
      <CircleMainTab.Screen name="3" component={CircleCalenderPage} />
      <CircleMainTab.Screen name="4" component={MemberListPage} />
      <CircleMainTab.Screen name="5" component={CircleSettingPage} />
    </CircleMainTab.Navigator>
  );
}
export default MainTabNavigator;
