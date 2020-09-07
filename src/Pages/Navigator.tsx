// Navigator.tsx 내비게이션 모음
import React from 'react';
import {Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// for navigator
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
// interface
import {
  MainPageParamList,
  SearchPageParamList,
  PortfolioPageParamList,
  MainTabParamList,
  ClubMainTabParamList,
  AuthStackParamList,
} from '~/@types/navigation';

// import Main pages
import LoginPage from './LoginPage';
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
import DrawerPage from '~/Pages/Drawer';
import MyPage from './Drawer/MyPage';
import AppNoticePage from './Drawer/AppNoticePage';

// Navigator 생성
const AuthStack = createStackNavigator<AuthStackParamList>();
const MainTab = createBottomTabNavigator<MainTabParamList>();
const ClubMainTab = createBottomTabNavigator<ClubMainTabParamList>();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator<MainPageParamList>();
const SearchStack = createStackNavigator<SearchPageParamList>();
const PortStack = createStackNavigator<PortfolioPageParamList>();

// 로그인 네비게이터

// Tab Navigator 작성

// MainPage Bottom_tab navi
function MainTabNavi() {
  return (
    <MainTab.Navigator>
      {/* 탭 메뉴 */}
      {/* MainPage 탭 메인1*/}
      <MainTab.Screen
        name="MainPage"
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
      <MainTab.Screen
        name="SearchPage"
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
      <MainTab.Screen
        name="CalendarPage"
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
      <MainTab.Screen
        name="AlarmsPage"
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
      <MainTab.Screen
        name="PortfolioPage"
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
    </MainTab.Navigator>
  );
}

// ClubMainPage BottomTab navi 작성
function ClubMainTabNavi() {
  return (
    <ClubMainTab.Navigator initialRouteName="ClubMainPage">
      {/* 동아리메인1 */}
      <ClubMainTab.Screen
        name="ClubMainPage"
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
      <ClubMainTab.Screen
        name="ChattingPage"
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
      <ClubMainTab.Screen
        name="MemberListPage"
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
      <ClubMainTab.Screen
        name="ClubSettingPage"
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
    </ClubMainTab.Navigator>
  );
}

// Stack Navigator 작성

// MainTab Stack으로 감싸서 topbar제공
// const MainTabStack = ({navigation}: any) => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerRight: () => (
//           <Icon
//             name="menu"
//             onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
//             size={25}
//             color="black"
//           />
//         ),
//       }}>
//       <Stack.Screen name="MainTabNavi" component={MainTabNavi} options={{}} />
//     </Stack.Navigator>
//   );
// };

// MainPage 메인 1번 내부 Stack Navi
function MainStackNavi() {
  return (
    <Stack.Navigator initialRouteName="MainPage">
      <Stack.Screen name="MainPage" component={MainPage} />
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="EventPage" component={EventPage} />
      <Stack.Screen name="ClubMainTabNavi" component={ClubMainTabNavi} />
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

//Drawer 페이지
function DrawerNavi() {
  return (
    <Drawer.Navigator
      initialRouteName="MainTabNavi"
      drawerPosition={'right'}
      drawerStyle={{width: 300}}
      drawerContentOptions={{
        activeTintColor: '#e91e63',
        itemStyle: {marginVertical: 20},
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="MainTabNavi" component={MainTabNavi} />
      <Drawer.Screen name="Drawer" component={DrawerPage} />
      <Drawer.Screen
        name="MyPage"
        component={MyPage}
        options={{
          drawerIcon: ({focused}) =>
            focused ? (
              <Icon name="settings" size={25} color="#999" />
            ) : (
              <Icon name="settings-outline" size={25} color="#999" />
            ),
        }}
      />
      <Drawer.Screen name="AppNoticePage" component={AppNoticePage} />
    </Drawer.Navigator>
  );
}
// Drawer 컨텐츠
import {KakaoLogout} from '~/Components/Login';
function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="로그아웃"
        onPress={() =>
          Alert.alert('', '로그아웃 하시겠습니까?', [
            {
              text: '취소',
              onPress: () => {
                return null;
              },
            },
            {
              text: '확인',
              onPress: () => {
                KakaoLogout();
              },
            },
          ])
        }
      />
    </DrawerContentScrollView>
  );
}

// Login Stack Navi
function LoginStackNavi() {
  // const isLoggedIn = props.isLoggedIn;

  // if (isLoggedIn) {
  //   return (
  //     <AuthStack.Navigator
  //       screenOptions={{
  //         headerShown: false,
  //       }}>
  //       <AuthStack.Screen name="LoginPage" component={LoginPage} />
  //     </AuthStack.Navigator>
  //   );
  // }
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="DrawerNavi" component={DrawerNavi} />
    </AuthStack.Navigator>
  );
}
export default LoginStackNavi;

// screenOptions = {{
//   headerRight: () => (
//     <Icon
//       name="ellipsis-vertical-outline"
//       onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
//       size={25}
//       color="black"></Icon>
//   ),
// }}
