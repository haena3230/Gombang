

// Navigator.tsx 내비게이션 모음
import React, {useState} from 'react';
import {Alert, View, Text, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

// 컴포넌트
import {Styles,Color} from '~/@types/basic_style';
import Plusbutton from '~/Assets/Plusbutton.svg';
import {KakaoLogout} from '~/Components/Login';

// for navigator
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  DrawerContentComponentProps 
} from '@react-navigation/drawer';
import {DrawerActions, useNavigation} from '@react-navigation/native';


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
import ScrapPage from './PortfolioPage/PortfolioInPage/ScrapPage';

// import ClubMainPage pages
import ClubMainList from './MainPage/ClubMainPage';
import ChattingPage from './MainPage/ClubMainPage/ChattingPage';
import MemberListPage from './MainPage/ClubMainPage/MemberListPage';
import ClubSettingPage from './MainPage/ClubMainPage/ClubSettingPage';

//import Drawer Page
import TermsOfUse from './Drawer/TermsOfUse';
import SettingPage from './Drawer/SettingPage'
import ProgramInfoPage from './Drawer/SettingPage/ProgramInfoPage'
import NoticePage from './Drawer/SettingPage/NoticePage';
import HelpPage from './Drawer/HelpPage';
import MyPage from './Drawer/MyPage';


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
      <Stack.Screen 
        options={{
         headerShown:false
        }}
        name="EventPage" component={EventPage} />
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
        name="GenerateClubStackNavi"
        component={GenerateClubStackNavi}
      />
      <Stack.Screen
        options={{
          headerShown:false
        }}
        name="PortfolioStackNavi"
        component={PortfolioStackNavi}
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

// 동아리 만들기 stack 
function GenerateClubStackNavi(){
  return(
   <Stack.Navigator>
      <Stack.Screen name="GenerateClubPage" component={GenerateClubPage} />
      <Stack.Screen name="CertifiedPage" component={CertifiedPage} />
    </Stack.Navigator>
  )
}

// 포트폴리오 stack 
function PortfolioStackNavi(){
  const navigation=useNavigation()
  return(
   <Stack.Navigator>
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
        component={PortfolioInPage} />
      <Stack.Screen 
        options={{
            headerStyle:{
              backgroundColor:Color.w_color
            },
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: 'bold',
            },
            title: '글쓰기',
            headerTitleAlign: 'center',
          }}
        name="PortfolioWritePage" component={PortfolioWritePage} />
        <Stack.Screen 
        options={{
            title:'',
            headerRight: () => (
              <TouchableOpacity style = {{margin:15}} onPress = {()=>navigation.goBack()}>
                <Text style={Styles.m_g_font}>완료</Text>
              </TouchableOpacity>
            ),
          }}
        name="ScrapPage" component={ScrapPage} />
    </Stack.Navigator>
  )
}


// 어플설정 stack
function SettingStackNavi(){
  const navigation=useNavigation()
  return(
   <Stack.Navigator initialRouteName="SettingPage">
      <Stack.Screen 
        options={{
            title:'어플 설정',
            headerTitleAlign: 'center',
              headerTitleStyle: {
              fontSize: 18,
              fontWeight: 'bold',
            },
            headerLeft: () => (
              <Icon
              name="arrow-back-outline"
              onPress={()=>navigation.goBack()}
              size={25}
              color={Color.b_color} 
              style={{margin:10}}/>
            ),
          }}
        name="SettingPage" component={SettingPage} />
      <Stack.Screen 
         options={{
            title:'프로그램 정보',
            headerTitleAlign: 'center',
              headerTitleStyle: {
              fontSize: 18,
              fontWeight: 'bold',
            },
            headerLeft: () => (
              <Icon
              name="arrow-back-outline"
              onPress={()=>navigation.navigate('SettingPage')}
              size={25}
              color={Color.b_color} 
              style={{margin:10}}/>
            ),
          }}
        name="ProgramInfoPage" component={ProgramInfoPage} />
         <Stack.Screen 
         options={{
            title:'공지사항',
            headerTitleAlign: 'center',
              headerTitleStyle: {
              fontSize: 18,
              fontWeight: 'bold',
            },
            headerLeft: () => (
              <Icon
              name="arrow-back-outline"
              onPress={()=>navigation.navigate('SettingPage')}
              size={25}
              color={Color.b_color} 
              style={{margin:10}}/>
            ),
          }}
        name="NoticePage" component={NoticePage} />
    </Stack.Navigator>
  )
}

//Drawer 페이지
function DrawerNavi() {
  return (
    <Drawer.Navigator
      initialRouteName="MainStackNavi"
      drawerPosition={'right'}
      drawerStyle={{width: 300}}
      drawerContentOptions={{
        activeTintColor: Color.w_color,
        itemStyle: {marginVertical: 5},
      }}
     drawerContent={props => <CustomDrawerContent {...props} />}>
       <Drawer.Screen
        options={{
          title:'마이 페이지',
          drawerIcon: () =>
            <Icon name="person-circle-outline" size={25} color="#999" />
        }}
        name="MyPage"
        component={MyPage}
      /> 
{/*          
      <Drawer.Screen
        options={{
          title:'내 채팅방 목록',
          drawerIcon: () =>
            <Icon name="chatbox-ellipses-outline" size={25} color="#999" />
        }}
        name="EventPage"
        component={EventPage}
      />   */}
      <Drawer.Screen
        options={{
          title:'이벤트',
          drawerIcon: () =>
            <Icon name="megaphone-outline" size={25} color="#999" />
        }}
        name="EventPage"
        component={EventPage}
      /> 
      <Drawer.Screen
        options={{
          title:'어플 설정',
          drawerIcon: () =>
            <Icon name="settings-outline" size={25} color="#999" />
        }}
        name="SettingStackNavi"
        component={SettingStackNavi}
      />
       <Drawer.Screen
        options={{
          title:'문의하기/도움말',
          drawerIcon: () =>
           <Icon name="mail-outline" size={25} color="#999" />
        }}
        name="HelpPage"
        component={HelpPage}
      />
      <Drawer.Screen
        options={{
          title:'이용약관',
          drawerIcon: () =>
           <Icon name="alert-circle-outline" size={25} color="#999" />
        }}
        name="TermsOfUse"
        component={TermsOfUse}
      /> 
        <Drawer.Screen 
        options={{
            title:'',
          }}
        name="MainStackNavi" 
        component={MainStackNavi} />
    </Drawer.Navigator>
  );
}
// Drawer 컨텐츠

const  CustomDrawerContent=(props) => {  
  return (
    <DrawerContentScrollView {...props}>
          <View style = {{alignItems:'center', margin:30}}>
            <View style= {{width:80, height:80, backgroundColor:Color.l_color,borderRadius:50}} />
            <Text style={Styles.m_b_font}>XX님</Text>
          </View>
          <DrawerItem
            style ={{borderBottomWidth:1,borderColor:Color.l_color}}
            icon={()=><Icon name ="exit-outline" size={25} color="#999" />}
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
         <DrawerItemList {...props} />

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
