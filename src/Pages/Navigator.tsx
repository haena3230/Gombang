

// Navigator.tsx 내비게이션 모음
import React, {useEffect, useState} from 'react';
import {Alert, View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import {URL} from '~/@types/Gombang';
import Profilebasic from '~/Assets/Profilebasic.svg'

// 컴포넌트
import {Styles,Color} from '~/@types/basic_style';
import Plusbutton from '~/Assets/Plusbutton.svg';
import {KakaoLogout} from '~/Components/Login';
import Logotext from '~/Assets/Logotext.svg';

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
import {DrawerActions, useNavigation} from '@react-navigation/native';


// import Login pages
import LoginPage from './LoginPage';
import MailPage from './LoginPage/MailPage';
import ProfileSettingPage from './LoginPage/ProfileSettingPage';

// import Main pages
import MainPage from './MainPage';
import EventPage from './MainPage/EventPage';
import EventDetailPage from './MainPage/EventPage/EventDetailPage'
import FavoritesPage from './MainPage/FavoritesPage';
import FavEditPage from './MainPage/FavoritesPage/FavEditPage';
import { TwoOpModal } from '../Components/Modal';
import GenerateClubPage from './MainPage/GenerateClubPage';
import CertifiedPage from './MainPage/GenerateClubPage/CertifiedPage';

// search
import SearchPage from './SearchPage';
import SearchPopupPage from './SearchPage/SearchClubPage/SearchPopupPage'
import SearchQAPage from './SearchPage/SearchClubPage/SearchPopupPage/SearchQAPage'
import {ApplicationForm} from './SearchPage/SearchClubPage/SearchPopupPage/ApplicationForm'
import SearchQPage from './SearchPage/SearchClubPage/SearchPopupPage/SearchQAPage/SearchQPage'
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
import ClubMainPage from './MainPage/ClubMainPage';
import MemberListPage from './MainPage/ClubMainPage/MemberListPage';
import ChattingPage from './MainPage/ClubMainPage/ChattingPage';
import ClubSettingPage from './MainPage/ClubMainPage/ClubSettingPage';
import ClubManagementPage from './MainPage/ClubMainPage/ClubSettingPage/ClubManagementPage'
import ClubNoticePage from './MainPage/ClubMainPage/Stack/ClubNoticePage';
import NoticeParty from './MainPage/ClubMainPage/Stack/ClubNoticePage/NoticeParty'
import ClubFeedPage from './MainPage/ClubMainPage/Stack/ClubFeedPage';
import ClubWritePage from './MainPage/ClubMainPage/Stack/ClubWritePage';
import ClubAddSchedulePage from './MainPage/ClubMainPage/Stack/ClubAddSchedulePage';
import ChattingRoomPage from './MainPage/ClubMainPage/ChattingPage/ChattingRoomPage';
import ChattingInvitePage from './MainPage/ClubMainPage/ChattingPage/ChattingRoomPage/ChattingInvitePage'
import ChattingUserPage from './MainPage/ClubMainPage/ChattingPage/ChattingRoomPage/ChattingUserPage'
import ChattingImagePage from './MainPage/ClubMainPage/ChattingPage/ChattingRoomPage/ChattingImagePage'
import ChattingSettingPage from './MainPage/ClubMainPage/ChattingPage/ChattingRoomPage/ChattingSettingPage';

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
    <Tab.Navigator 
      tabBarOptions={{
        showLabel: false,
        activeBackgroundColor: '#D5D8DC',
      }}>
      {/* 동아리메인1 */}
      <Tab.Screen
        name="ClubMainPage"
        component={ClubMainPage}
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
        component={ChattingStack}
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
        name="ClubSettingStack"
        component={ClubSettingStack}
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
  const Navigation = useNavigation()
  const onPressFavM=()=>{
    Alert.alert('준비중입니다.')
  }
  const onPressFavD=()=>{
    navigation.navigate('FavEditPage')
  }

  
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
        headerLeft: () => (
          <Logotext 
            style={{width:100,height:25}} 
            onPress={()=>Navigation.reset({
              index: 0,
              routes: [{ name: 'MainStackNavi' }],
            })
            }
            />),        
      }}>
      <Stack.Screen 
        options={{headerShown:false}}
        name="ClubStackNavi" component={ClubStackNavi} />
      <Stack.Screen
        name="MainTabNavi"
        component={MainTabNavi}
        options={{title: ' '}}
      />
      <Stack.Screen
      options={{
        headerShown:false,
      }}
        name="SearchStackNavi"
        component={SearchStackNavi}
      />
      <Stack.Screen 
        options={{
          title: ' ',
        }}
        name="EventDetailPage" component={EventDetailPage} />
      
      
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
              <TwoOpModal fst_op={'정렬편집'} snd_op={'삭제하기'} onPressMenuM={onPressFavM} onPressMenuD={onPressFavD} />
          ),
          headerLeft: () => (
              <Icon
              name="arrow-back-outline"
              onPress={()=>navigation.goBack()}
              size={25}
              color={Color.b_color} 
              style={{margin:10}}/>
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
            null
          ),
          headerLeft: () => (
              <Icon
              name="arrow-back-outline"
              onPress={()=>navigation.goBack()}
              size={25}
              color={Color.b_color} 
              style={{margin:10}}/>
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
          headerLeft: () => (
              <Icon
              name="arrow-back-outline"
              onPress={()=>navigation.goBack()}
              size={25}
              color={Color.b_color} 
              style={{margin:10}}/>
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
  const navigation=useNavigation()
  // Searchstack검색바
  const [isBarVisible, setBarVisible] = useState(false);
  const toggleBar = () => {
    setBarVisible(!isBarVisible);
  };
  return (
    <Stack.Navigator initialRouteName="SearchTopTabNavi">
      <Stack.Screen 
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
      name="SearchTopTabNavi" component={SearchTopTabNavi} />
      <Stack.Screen 
        options={{
          headerShown:false,
        }}
        name="SearchPopupPage" component={SearchPopupPage} />
      <Stack.Screen 
        options={{
          title: 'Q&A',
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}
        name="SearchQAPage" component={SearchQAPage} />
        <Stack.Screen 
        options={{
          title: '질문하기',
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}
        name="SearchQPage" component={SearchQPage} />
      <Stack.Screen 
        options={{
           title: '가입신청서',
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
        }}
        name="ApplicationForm" component={ApplicationForm} />
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
              backgroundColor:Color.l_color
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

// 동아리 메인 내부 stack

function ClubStackNavi(){
  const navigation=useNavigation()
  const [isBarVisible,setIsBarVisible] = useState(false)
  const onPress=()=>{
    setIsBarVisible(!isBarVisible);
  }
  return(
   <Stack.Navigator>
      <Stack.Screen 
        options={{headerShown:false}}
        name="ClubMainTabNavi" component={ClubMainTabNavi} />
      <Stack.Screen 
       options={{
            title:'공지사항',
            headerTitleAlign: 'left',
              headerTitleStyle: {
              fontSize: 18,
              fontWeight: 'bold',
            },
          }}
        name="ClubNoticePage" component={ClubNoticePage} />
        <Stack.Screen 
       options={{
            title:'참가명단',
            headerTitleAlign: 'center',
              headerTitleStyle: {
              fontSize: 18,
              fontWeight: 'bold',
            },
          }}
        name="NoticeParty" component={NoticeParty} />
      <Stack.Screen 
        options={{title:'',}}
        name="ClubFeedPage" component={ClubFeedPage} />
      <Stack.Screen 
        options={{
            title:'글쓰기',
            headerTitleAlign: 'center',
              headerTitleStyle: {
              fontSize: 18,
              fontWeight: 'bold',
            },
            headerRight: () => (
              <Icon
              name="checkmark-outline"
              onPress={()=>navigation.goBack()}
              size={25}
              color={Color.b_color} 
              style={{margin:10}}/>
            ),
          }}
        
        name="ClubWritePage" component={ClubWritePage} />
         <Stack.Screen 
        options={{
            title:'일정추가',
            headerTitleAlign: 'center',
              headerTitleStyle: {
              fontSize: 18,
              fontWeight: 'bold',
            },
            headerRight: () => (
              <Icon
              name="checkmark-outline"
              onPress={()=>navigation.goBack()}
              size={25}
              color={Color.b_color} 
              style={{margin:10}}/>
            ),
          }}
        
        name="ClubAddSchedulePage" component={ClubAddSchedulePage} />
         <Stack.Screen name="SchedulePopupPage" component={SchedulePopupPage} />
        <Stack.Screen name="ScrapPage" component={ScrapPage} />
        <Stack.Screen 
           options={{
            title:'xx일정톡',
            headerTitleAlign: 'center',
              headerTitleStyle: {
              fontSize: 18,
              fontWeight: 'bold',
            },
            headerRight: () => (
              <View>
                <Icon
                name="search-outline"
                onPress={onPress}
                size={25}
                color={Color.b_color} 
                style={{margin:10}}/>
                <SearchBarModal
                  onPress={onPress}
                  visible={isBarVisible}
                />
              </View>
            ),
          }}
        
          name="ChattingRoomPage" component={ChattingDrawerNavi} />
          <Stack.Screen 
           options={{
            title:'대화상대 초대',
            headerTitleAlign: 'center',
              headerTitleStyle: {
              fontSize: 18,
              fontWeight: 'bold',
            },
            headerRight: () => (
              <TouchableOpacity onPress={()=>navigation.goBack()}> 
                <Text style={Styles.m_g_font}>완료</Text>
              </TouchableOpacity>
            ),
          }}
        
          name="ChattingInvitePage" component={ChattingInvitePage} />
           <Stack.Screen 
           options={{
            title:'회원',
            headerTitleAlign: 'left',
              headerTitleStyle: {
              fontSize: 18,
              fontWeight: 'bold',
            },
          }}
        
          name="ChattingUserPage" component={ChattingUserPage} />
          <Stack.Screen 
           options={{
            title:'회원',
            headerTitleAlign: 'left',
              headerTitleStyle: {
              fontSize: 18,
              fontWeight: 'bold',
            },
          }}
        
          name="ChattingImagePage" component={ChattingImagePage} />
           <Stack.Screen 
           options={{
            title:'채팅방 설정',
            headerTitleAlign: 'center',
              headerTitleStyle: {
              fontSize: 18,
              fontWeight: 'bold',
            },
          }}
        
          name="ChattingSettingPage" component={ChattingSettingPage} />
          
          
          
         <Stack.Screen name="ChattingStack" component={ChattingStack} />
    </Stack.Navigator>
  )
}

// 채팅방 stack
function ChattingStack(){
  const navigation=useNavigation()
  
  return(
   <Stack.Navigator>
      <Stack.Screen 
      options={{
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: 'bold',
          },
          title: '채팅',
          headerTitleAlign: 'left',
          headerRight: () => (
            <TwoOpModal fst_op="채팅생성" snd_op="목록편집" onPressMenuM={()=>null} onPressMenuD={()=>null}/>
          ),
           headerLeft: () => (
             <TouchableOpacity style={{margin:10}} onPress={()=>navigation.navigate('ClubMainPage')}>
              <Icon name="home-outline" size={25}/>
            </TouchableOpacity>
          ),
        }}
        name="ChattingPage" component={ChattingPage} />
    </Stack.Navigator>
  )
}

// 동아리 설정 stack
function ClubSettingStack(){
  const navigation=useNavigation()
  return(
   <Stack.Navigator>
      <Stack.Screen 
      options={{
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: 'bold',
          },
          title: '내 설정',
          headerTitleAlign: 'left',
           headerLeft: () => (
             <TouchableOpacity style={{margin:10}} onPress={()=>navigation.navigate('ClubMainPage')}>
              <Icon name="home-outline" size={25}/>
            </TouchableOpacity>
          ),
        }}
        name="ClubSettingPage" component={ClubSettingPage} />
        <Stack.Screen 
          options={{
              headerTitleStyle: {
                fontSize: 18,
                fontWeight: 'bold',
              },
              title: '관리자 설정',
              headerTitleAlign: 'left',
            }}
            name="ClubManagementPage" component={ClubManagementPage} />
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
  const nickname=useSelector((state)=>state.login.nickname)
  const image = useSelector((state)=>state.login.image)
  return (
    <DrawerContentScrollView {...props}>
          <TouchableOpacity style = {{alignItems:'center', margin:30}}>
            {image===''?(
              <Profilebasic style= {{width:80, height:80,borderRadius:50, margin:5}} />
            ):(
              <Image source={{uri:`${URL}/image/${image}`}} style={{width:80, height:80,borderRadius:50}}/>
            )}
            <Text style={Styles.m_b_font}>{nickname}님</Text>
          </TouchableOpacity>
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


// 채팅방 드로워 메뉴
function ChattingDrawerNavi() {
  return (
    <Drawer.Navigator
      initialRouteName="ChattingRoomPage"
      drawerPosition={'right'}
      drawerStyle={{width: 300}}
      drawerContentOptions={{
        activeTintColor: Color.w_color,
        itemStyle: {marginVertical: 5},
      }}
     drawerContent={props => <ChattingDrawerContent {...props} />}>
       <Drawer.Screen name="ChattingRoomPage" component={ChattingRoomPage} />

    </Drawer.Navigator>
  );
}

// 채팅 Drawer 컨텐츠

const  ChattingDrawerContent=(props) => {  
  const navigation=useNavigation()
  return (
    <DrawerContentScrollView {...props}>
        {/* 첫번째 */}
          <DrawerItem
            label="사진첩(모두보기)>"
            onPress={() =>navigation.navigate('ChattingImagePage')}
          />
          <View style ={{
            borderBottomWidth:1,
            borderColor:Color.l_color, 
            padding:10,
            flexDirection:'row'}}>
            <View style={{margin:5}}>
              <Image 
                style={{width:60,height:60}}
                source={{uri:'https://via.placeholder.com/100/F169B4/F169B4.png',}}/>
            </View>
            <View style={{margin:5}}>
              <Image 
                style={{width:60,height:60}}
                source={{uri:'https://via.placeholder.com/100/F169B4/F169B4.png',}}/>
            </View>
            <View style={{margin:5}}>
              <Image 
                style={{width:60,height:60}}
                source={{uri:'https://via.placeholder.com/100/F169B4/F169B4.png',}}/>
            </View>
            <View style={{margin:5}}>
              <Image 
                style={{width:60,height:60}}
                source={{uri:'https://via.placeholder.com/100/F169B4/F169B4.png',}}/>
            </View>
          </View>
          {/* 두번째 */}
          <DrawerItem
            label="참여 회원 리스트 (모두보기) >"
            onPress={() =>navigation.navigate('ChattingUserPage')}
          />
          <View style={{flexDirection:'row', alignItems:'center',padding:10}}>
            <View style={{marginHorizontal:10}}>
              <Image 
                  style={{width:40,height:40, borderRadius:20}}
                  source={{uri:'https://via.placeholder.com/100/F169B4/F169B4.png',}}/>
            </View>
            <Text style={Styles.m_b_font}> 양해나</Text>
          </View>
          <TouchableOpacity 
            style={{flexDirection:'row', alignItems:'center',padding:20}}
            onPress={()=>navigation.navigate('ChattingInvitePage')}>
            <Icon name="add-outline" size={30} />
            <Text style={Styles.m_p_font}>초대하기</Text>
          </TouchableOpacity>
          <View style ={{
            borderBottomWidth:1,
            borderColor:Color.l_color, 
            flexDirection:'row'}}></View>
            {/* 세번째 */}
          <DrawerItem
          label="채팅방 설정"
          onPress={() =>navigation.navigate('ChattingSettingPage')}
        />
         <View style ={{
            borderBottomWidth:1,
            borderColor:Color.l_color, 
            flexDirection:'row'}}></View>
        <DrawerItem
          label="채팅방 나가기"
          onPress={() =>null}
        />
         <DrawerItemList {...props} />

    </DrawerContentScrollView>
  );
}

export function LoginStackNavi() {
  return (
    <Stack.Navigator
      initialRouteName="LoginPage"
      headerMode="none">
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="MailPage" component={MailPage} />
      <Stack.Screen name="ProfileSettingPage" component={ProfileSettingPage} />
      <Stack.Screen name="MainPage" component={DrawerNavi} />
    </Stack.Navigator>
  );
}


export default DrawerNavi;