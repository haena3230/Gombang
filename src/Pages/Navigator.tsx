// Navigator.tsx 내비게이션 모음
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

// for navigator
import {DrawerActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
// interface
import {
  MainPageParamList,
  SearchPageParamList,
  PortfolioPageParamList,
} from '~/@types';

// import Main pages
import MainPage from './MainPage';
import EventPage from './MainPage/EventPage';
import FavoritesPage from './MainPage/FavoritesPage';
// search
import SearchPage from './SearchPage';
import SearchClubPage from './SearchPage/SearchClubPage';
import SearchPopupPage from './SearchPage/SearchPopupPage';
// calendar
import CalendarPage from './CalendarPage';
// alarm
import AlarmsPage from './AlarmsPage';
// portfolio
import PortfolioPage from './PortfolioPage';
import PortfolioInPage from './PortfolioPage/PortfolioInPage';

// import ClubMainPage pages
import ClubMainList from './MainPage/ClubMainPage';
import ChattingPage from './MainPage/ClubMainPage/ChattingPage';
import MemberListPage from './MainPage/ClubMainPage/MemberListPage';
import ClubSettingPage from './MainPage/ClubMainPage/ClubSettingPage';

//import Drawer Page
import MyPage from './Drawer/MyPage';
import AppNoticePage from './Drawer/AppNoticePage';

// Navigator 생성
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator<MainPageParamList>();
const SearchStack = createStackNavigator<SearchPageParamList>();
const PortStack = createStackNavigator<PortfolioPageParamList>();
// Tab Navigator 작성

// MainPage Bottom_tab navi
function MainTabNavi() {
  return (
    <Tab.Navigator>
      {/* 탭 메뉴 */}
      {/* MainPage 탭 메인1*/}
      <Tab.Screen
        name=" "
        component={MainStackNavi}
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
      <Tab.Screen
        name="  "
        component={SearchStackNavi}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Icon name="search" size={25} color="#999" />
            ) : (
              <Icon name="search-outline" size={25} color="#999" />
            ),
        }}
      />
      {/* CalenderPage 탭 메인3*/}
      <Tab.Screen
        name="   "
        component={CalendarPage}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Icon name="calendar" size={25} color="#999" />
            ) : (
              <Icon name="calendar-outline" size={25} color="#999" />
            ),
        }}
      />
      {/* AlarmsPage 탭 메인4*/}
      <Tab.Screen
        name="    "
        component={AlarmsPage}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Icon name="notifications" size={25} color="#999" />
            ) : (
              <Icon name="notifications-outline" size={25} color="#999" />
            ),
        }}
      />
      {/* PortfolioPage 탭 메인5*/}
      <Tab.Screen
        name="     "
        component={PortfolioStackNavi}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Icon name="newspaper" size={25} color="#999" />
            ) : (
              <Icon name="newspaper-outline" size={25} color="#999" />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

// ClubMainPage BottomTab navi 작성
function ClubMainTabNavi() {
  return (
    <Tab.Navigator initialRouteName="ClubMainPage">
      {/* 동아리메인1 */}
      <Tab.Screen
        name=" "
        component={ClubMainList}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Icon name="home" size={25} color="#999" />
            ) : (
              <Icon name="home-outline" size={25} color="#999" />
            ),
        }}
      />
      {/* 동아리메인2 */}
      <Tab.Screen
        name="  "
        component={ChattingPage}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Icon name="chatbox-ellipses" size={25} color="#999" />
            ) : (
              <Icon name="chatbox-ellipses-outline" size={25} color="#999" />
            ),
        }}
      />
      {/* 동아리메인3 */}
      <Tab.Screen
        name="   "
        component={MemberListPage}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Icon name="person" size={25} color="#999" />
            ) : (
              <Icon name="person-outline" size={25} color="#999" />
            ),
        }}
      />
      {/* 동아리메인4 */}
      <Tab.Screen
        name="    "
        component={ClubSettingPage}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Icon name="settings" size={25} color="#999" />
            ) : (
              <Icon name="settings-outline" size={25} color="#999" />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

// Stack Navigator 작성

// MainTab Stack으로 감싸서 topbar제공
const MainTapStack = ({navigation}: any) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: () => (
          <Icon
            name="menu"
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            size={25}
            color="black"
          />
        ),
      }}>
      <Stack.Screen name="MainTabNavi" component={MainTabNavi} />
    </Stack.Navigator>
  );
};

// MainPage 메인 1번 내부 Stack Navi
function MainStackNavi() {
  return (
    <Stack.Navigator initialRouteName="MainPage">
      <Stack.Screen name="MainPage" component={MainPage} />
      <Stack.Screen name="EventPage" component={EventPage} />
      <Stack.Screen name="ClubMainPage" component={ClubMainTabNavi} />
      <Stack.Screen name="CalendarPage" component={CalendarPage} />
      <Stack.Screen name="FavoritesPage" component={FavoritesPage} />
    </Stack.Navigator>
  );
}

// SearchPage 메인 2번 내부 Stack Navi
function SearchStackNavi() {
  return (
    <SearchStack.Navigator initialRouteName="SearchPage">
      <SearchStack.Screen name="SearchPage" component={SearchPage} />
      <SearchStack.Screen name="SearchClubPage" component={SearchClubPage} />
      <SearchStack.Screen name="SearchPopupPage" component={SearchPopupPage} />
    </SearchStack.Navigator>
  );
}

// PortfolioPage 메인 5번 내부 Stack
function PortfolioStackNavi() {
  return (
    <PortStack.Navigator>
      <PortStack.Screen name="PortfolioPage" component={PortfolioPage} />
      <PortStack.Screen name="PortfolioInPage" component={PortfolioInPage} />
    </PortStack.Navigator>
  );
}

//drawer navi
function DrawerNavi() {
  return (
    <Drawer.Navigator drawerPosition={'right'} drawerStyle={{width: 300}}>
      <Drawer.Screen name="ExExExEx" component={MainTapStack} />
      <Drawer.Screen name="MyPage" component={MyPage} />
      <Drawer.Screen name="AppNoticePage" component={AppNoticePage} />
    </Drawer.Navigator>
  );
}
export default DrawerNavi;
