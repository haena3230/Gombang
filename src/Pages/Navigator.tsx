// Navigator.tsx 내비게이션 모음
import React, {useState} from 'react';
import {Alert, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// for navigator
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

// import Login pages
import LoginPage from './LoginPage';
import MailPage from './LoginPage/MailPage';
import ProfileSettingPage from './LoginPage/ProfileSettingPage';
import UploadPhoto from '~/Components/UploadPhoto';

// import Main pages
import MainPage from './MainPage';
import EventPage from './MainPage/EventPage';
import FavoritesPage from './MainPage/FavoritesPage';
import FavModal from '../Components/FavModal';

// search
import SearchPage from './SearchPage';
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
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const TopTab = createMaterialTopTabNavigator();

// 로그인 네비게이터

// Tab Navigator 작성

// MainPage Bottom_tab navi

function MainTabNavi() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeBackgroundColor: '#D5D8DC',
      }}>
      {/* 탭 메뉴 */}
      {/* MainPage 탭 메인1*/}
      <Tab.Screen
        name="MainPage"
        component={MainPage}
        options={{
          // 아이콘 추가 및 탭 옵션
          tabBarIcon: () => <Icon name="home-outline" size={25} color="#999" />,
        }}
      />
      {/* SearchPage 탭 메인2*/}
      <Tab.Screen
        name="SearchPage"
        component={SearchStackNavi}
        options={{
          tabBarIcon: () => (
            <Icon name="search-outline" size={25} color="#999" />
          ),
        }}
      />
      {/* CalenderPage 탭 메인3*/}
      <Tab.Screen
        name="CalendarPage"
        component={CalendarPage}
        options={{
          tabBarIcon: () => (
            <Icon name="calendar-outline" size={25} color="#999" />
          ),
        }}
      />
      {/* AlarmsPage 탭 메인4*/}
      <Tab.Screen
        name="AlarmsPage"
        component={AlarmsPage}
        options={{
          tabBarIcon: () => (
            <Icon name="notifications-outline" size={25} color="#999" />
          ),
        }}
      />
      {/* PortfolioPage 탭 메인5*/}
      <Tab.Screen
        name="PortfolioPage"
        component={PortfolioStackNavi}
        options={{
          tabBarIcon: () => <Icon name="grid-outline" size={25} color="#999" />,
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
      <Tab.Screen
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
      <Tab.Screen
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
      <Tab.Screen
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
    </Tab.Navigator>
  );
}

// Stack Navigator 작성

// MainPage 메인 1번 내부 Stack Navi
function MainStackNavi({navigation}: any) {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <Stack.Navigator
      initialRouteName="MainPage"
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
      <Stack.Screen
        name="MainPage"
        component={MainTabNavi}
        options={{title: ' '}}
      />
      <Stack.Screen name="EventPage" component={EventPage} />
      <Stack.Screen name="ClubMainTabNavi" component={ClubMainTabNavi} />
      <Stack.Screen name="CalendarPage" component={CalendarPage} />
      <Stack.Screen
        options={{
          headerTitleStyle: {fontSize: 18, fontWeight: 'bold'},
          title: '즐겨 찾기',
          headerTitleAlign: 'center',
          headerRight: () => (
            <Icon
              name="ellipsis-vertical"
              onPress={toggleModal}
              size={25}
              color="black">
              <FavModal
                BackPress={toggleModal}
                onPress={toggleModal}
                visible={isModalVisible}
              />
            </Icon>
          ),
        }}
        name="FavoritesPage"
        component={FavoritesPage}
      />
    </Stack.Navigator>
  );
}

// SearchPage 메인 2번 내부 Stack Navi
import {SearchBarModal} from '~/Components/SearchBar';
function SearchStackNavi({navigation}: any) {
  const [isBarVisible, setBarVisible] = useState(false);

  const toggleBar = () => {
    setBarVisible(!isBarVisible);
  };
  return (
    <Stack.Navigator
      initialRouteName="SearchPage"
      screenOptions={{
        headerRight: () => (
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              padding: 10,
              alignItems: 'center',
            }}>
            <Icon
              name="search"
              onPress={toggleBar}
              size={25}
              color="black"
              style={{margin: 10}}>
              <SearchBarModal
                BackPress={toggleBar}
                onPress={toggleBar}
                visible={isBarVisible}
              />
            </Icon>
            <Icon
              name="menu"
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              size={25}
              color="black"
            />
          </View>
        ),
      }}>
      <Stack.Screen name="SearchPage" component={SearchPage} />
      <Stack.Screen
        name="SearchTopTabStack"
        component={SearchTopTabNavi}
        options={{title: '중앙동아리'}}
      />
      <Stack.Screen name="SearchPopupPage" component={SearchPopupPage} />
    </Stack.Navigator>
  );
}

// search (main 2번 ) 내부 toptab
import {
  TestFirst,
  TestSecond,
  TestThird,
  TestFourth,
  TestFifth,
  TestSixth,
} from '~/Pages/SearchPage/SearchClubPage';
const SearchTopTabNavi = () => {
  return (
    <TopTab.Navigator
      tabBarOptions={{
        style: {backgroundColor: 'white'},
        labelStyle: {fontSize: 15, fontWeight: 'bold'},
        tabStyle: {width: 85, height: 50},
        indicatorStyle: {
          backgroundColor: '#808B96',
          width: 45,
          left: 21,
        },
        scrollEnabled: true,
        pressColor: 'black',
      }}>
      <TopTab.Screen
        name="TestFirst"
        component={TestFirst}
        options={{tabBarLabel: '교양'}}
      />
      <TopTab.Screen
        name="TestSecond"
        component={TestSecond}
        options={{tabBarLabel: '학술'}}
      />
      <TopTab.Screen
        name="TestThird"
        component={TestThird}
        options={{tabBarLabel: '봉사'}}
      />
      <TopTab.Screen
        name="TestFourth"
        component={TestFourth}
        options={{tabBarLabel: '문예창작'}}
      />
      <TopTab.Screen
        name="TestFifth"
        component={TestFifth}
        options={{tabBarLabel: '종교'}}
      />
      <TopTab.Screen
        name="TestSixth"
        component={TestSixth}
        options={{tabBarLabel: '체육'}}
      />
    </TopTab.Navigator>
  );
};

// PortfolioPage 메인 5번 내부 Stack
function PortfolioStackNavi({navigation}: any) {
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
      <Stack.Screen name="PortfolioPage" component={PortfolioPage} />
      <Stack.Screen name="PortfolioInPage" component={PortfolioInPage} />
    </Stack.Navigator>
  );
}

//Drawer 페이지
function DrawerNavi() {
  return (
    <Drawer.Navigator
      initialRouteName="MainStackNavi"
      drawerPosition={'right'}
      drawerStyle={{width: 300}}
      drawerContentOptions={{
        activeTintColor: '#e91e63',
        itemStyle: {marginVertical: 20},
      }}
      drawerContent={(props: any) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="MainStackNavi" component={MainStackNavi} />
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
import {DrawerActions} from '@react-navigation/native';
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

export function LoginStackNavi() {
  return (
    <Stack.Navigator
      initialRouteName="LoginPage"
      screenOptions={{
        animationEnabled: false,
      }}
      headerMode="none">
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="MailPage" component={MailPage} />

      <Stack.Screen name="ProfileSettingPage" component={ProfileSettingPage} />
      <Stack.Screen name="UploadPhoto" component={UploadPhoto} />
      <Stack.Screen name="DrawerNavi" component={DrawerNavi} />
    </Stack.Navigator>
  );
}

// dra

export default DrawerNavi;

// screenOptions = {{
//   headerRight: () => (
//     <Icon
//       name="ellipsis-vertical-outline"
//       onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
//       size={25}
//       color="black"></Icon>
//   ),
// }}
