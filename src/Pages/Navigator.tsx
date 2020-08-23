// Navigator.tsx 내비게이션 모음
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

// for navigator
import {
  createStackNavigator,
  StackHeaderLeftButtonProps,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerNavigationProp,
} from '@react-navigation/drawer';

// import Main pages
import MainPage from './MainPage';
import EventPage from './MainPage/EventPage';
// search
import SearchPage from './SearchPage';
import SearchCirclePage from './SearchPage/SearchCirclePage';
import SearchPopupPage from './SearchPage/SearchPopupPage';
// calendar
import CalendarPage from './CalendarPage';
// notification
import NotificationPage from './NotificationPage';
// portfolio
import PortfolioPage from './PortfolioPage';
import PortfolioInPage from './PortfolioPage/PortfolioInPage';

// import CircleMainPage pages
import CircleMainList from './MainPage/CircleMainPage';
import ChattingPage from './MainPage/CircleMainPage/ChattingPage';
import MemberListPage from './MainPage/CircleMainPage/MemberListPage';
import CircleSettingPage from './MainPage/CircleMainPage/CircleSettingPage';

//import Drawer Page
import MyPage from './Drawer/MyPage';
import AppNoticePage from './Drawer/AppNoticePage';

// Navigator 생성
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

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
      {/* NotificationPage 탭 메인4*/}
      <Tab.Screen
        name="    "
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

// CircleMainPage BottomTab navi 작성
function CircleMainTabNavi() {
  return (
    <Tab.Navigator initialRouteName="CircleMainPage">
      {/* 동아리메인1 */}
      <Tab.Screen
        name=" "
        component={CircleMainList}
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
        component={CircleSettingPage}
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
const MainTapStack = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: () => (
          <Icon
            name="menu"
            onPress={() => navigation.openDrawer()}
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
    <Stack.Navigator>
      <Stack.Screen name="MainPage" component={MainPage} />
      <Stack.Screen name="EventPage" component={EventPage} />
      <Stack.Screen name="CalendarPage" component={CalendarPage} />
      <Stack.Screen name="CircleMainPage" component={CircleMainTabNavi} />
    </Stack.Navigator>
  );
}

// SearchPage 메인 2번 내부 Stack Navi
function SearchStackNavi() {
  return (
    <Stack.Navigator initialRouteName="SearchPage">
      <Stack.Screen name="SearchPage" component={SearchPage} />
      <Stack.Screen name="SearchCirclePage" component={SearchCirclePage} />
      <Stack.Screen name="SearchPopupPage" component={SearchPopupPage} />
    </Stack.Navigator>
  );
}

// PortfolioPage 메인 5번 내부 Stack
function PortfolioStackNavi() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PortfolioPage" component={PortfolioPage} />
      <Stack.Screen name="PortfolioInPage" component={PortfolioInPage} />
    </Stack.Navigator>
  );
}

//drawer navi
function DrawerNavi() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="ExExExEx" component={MainTapStack} />
      <Drawer.Screen name="MyPage" component={MyPage} />
      <Drawer.Screen name="AppNoticePage" component={AppNoticePage} />
    </Drawer.Navigator>
  );
}
export default DrawerNavi;
