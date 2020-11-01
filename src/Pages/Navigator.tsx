

// Navigator.tsx 내비게이션 모음
import React, {useState} from 'react';
import {Alert, View, Text} from 'react-native';
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

// import Main pages
import MainPage from './MainPage';
import EventPage from './MainPage/EventPage';
import FavoritesPage from './MainPage/FavoritesPage';
import FavEditPage from './MainPage/FavoritesPage/FavEditPage';
import FavModal from '../Components/Modal';
import GenerateClubPage from './MainPage/GenerateClubPage';
import CertifiedPage from './MainPage/GenerateClubPage/CertifiedPage';

// search
import SearchPage from './SearchPage';
// calendar
import CalendarPage from './CalendarPage';
import AddSchedulePage from './CalendarPage/CalendarSchedule/AddSchedulePage';
import SchedulePopupPage from './CalendarPage/CalendarSchedule/AddSchedulePage/SchedulePopupPage';
// alarm
import AlarmsPage from './AlarmsPage';
// portfolio
import PortfolioPage from './PortfolioPage';
import PortfolioInPage from './PortfolioPage/PortfolioInPage';
import PortfolioWritePage from './PortfolioPage/PortfolioInPage/PortFolioWritePage';

// import ClubMainPage pages
import ClubMainList from './MainPage/ClubMainPage';
import ChattingPage from './MainPage/ClubMainPage/ChattingPage';
import MemberListPage from './MainPage/ClubMainPage/MemberListPage';
import ClubSettingPage from './MainPage/ClubMainPage/ClubSettingPage';

//import Drawer Page
import DrawerPage from '~/Pages/Drawer';
import MyPage from './Drawer/MyPage';
import AppNoticePage from './Drawer/AppNoticePage';

import {Styles,Color} from '~/@types/basic_style';
import Plusbutton from '~/Assets/Plusbutton.svg';

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
        component={SearchPage}
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
        component={PortfolioPage}
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
  // favoratepage 모달메뉴
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  // 즐겨찾기페이지 정렬편집 클릭
  const onPressEdit=()=>{
    setModalVisible(false);
    navigation.navigate('FavEditPage')}
  // Searchstack검색바
  const [isBarVisible, setBarVisible] = useState(false);
  const toggleBar = () => {
    setBarVisible(!isBarVisible);
  };
  
  return (
    <Stack.Navigator
      initialRouteName="MainTabNavi"
      screenOptions={{
        headerRight: () => (
          <Icon
            name="menu"
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            size={25}
            color="black"
            style={{marginRight: 10}}
          />
        ),
      }}>
      <Stack.Screen
        name="MainTabNavi"
        component={MainTabNavi}
        options={{title: ' '}}
      />
      <Stack.Screen
        name="SearchStackNavi"
        component={SearchStackNavi}
        options={{
          title: '중앙동아리',
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: 'bold',
          },
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
        }}
      />
      <Stack.Screen name="EventPage" component={EventPage} />
      {/* <Stack.Screen name="ClubMainTabNavi" component={ClubMainTabNavi} /> */}
      <Stack.Screen 
       options={{
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: 'bold',
          },
          title: '새로운 일정',
          headerTitleAlign: 'center',
          headerRight: () => (
            <Icon
              name="checkmark-outline"
              onPress={toggleModal}
              size={25}
              color={Color.b_color} 
              style={{margin:10}}/>
          ),
        }}
        name="AddSchedulePage" component={CalendarStackNavi} />
      <Stack.Screen
        options={{
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: 'bold',
          },
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
                visible={isModalVisible}
                onPressEdit={onPressEdit}
              />
            </Icon>
          ),
        }}
        name="FavoritesPage"
        component={FavoritesPage}
      />
       <Stack.Screen
        options={{
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: 'bold',
          },
          title: '즐겨 찾기',
          headerTitleAlign: 'center',
          headerRight: () => (
            <TouchableOpacity style={{margin:10}} onPress={()=>navigation.goBack()}>
              <Text style={Styles.m_b_font}>완료</Text>
            </TouchableOpacity>
          ),
        }}
        name="FavEditPage"
        component={FavEditPage}
      />
      <Stack.Screen
        options={{
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: 'bold',
          },
          title: '동아리 만들기',
          headerTitleAlign: 'center',
          headerRight: () => (
            null
          ),
        }}
        name="GenerateClubPage"
        component={GenerateClubPage}
      />
      <Stack.Screen
        options={{
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: 'bold',
          },
          title: '동아리 만들기',
          headerTitleAlign: 'center',
          headerRight: () => (
            null
          ),
        }}
        name="CertifiedPage"
        component={CertifiedPage}
      />
      <Stack.Screen
        options={{
          headerStyle:{
            backgroundColor:Color.g_color
          },
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: 'bold',
          },
          title: '포트폴리오',
          headerTitleAlign: 'left',
          headerRight: () => (
            <TouchableOpacity style = {{margin:15}} onPress = {()=>navigation.navigate('PortfolioWritePage')}>
              <Plusbutton width = {25} height = {25} />
            </TouchableOpacity>
          ),
        }}
        name="PortfolioInPage"
        component={PortfolioInPage}
      />
      <Stack.Screen
        options={{
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: 'bold',
          },
          title: '글쓰기',
          headerTitleAlign: 'center',
           headerRight: () => (
            null
          ),
        }}
        name="PortfolioWritePage"
        component={PortfolioWritePage}
      />
    </Stack.Navigator>
    
  );
}

// SearchPage 메인 2번 내부 Stack Navi
import {SearchBarModal} from '~/Components/SearchBar';
function SearchStackNavi() {
  return (
    <Stack.Navigator initialRouteName="SearchTopTabNavi">
      <Stack.Screen name="SearchTopTabStack" component={SearchTopTabNavi} />
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

// calendar 메인 3번 내부 stack
function CalendarStackNavi(){
  return(
   <Stack.Navigator>
     {/* <Stack.Screen name="TestPage" component={TestPage} /> */}
      <Stack.Screen name="AddSchedulePage" component={AddSchedulePage} />
      <Stack.Screen name="SchedulePopupPage" component={SchedulePopupPage} />
    </Stack.Navigator>
  )
}


//Drawer 페이지
function DrawerNavi() {
  return (
    <Drawer.Navigator
      initialRouteName="MainStackNavi"
      screenOptions={{}}
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
import { TouchableOpacity } from 'react-native-gesture-handler';
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
