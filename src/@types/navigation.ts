import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {StackNavigationProp} from '@react-navigation/stack';

// 로그인/ 인증 스택
export interface AuthStackProps {
  navigation: StackNavigationProp<AuthStackParamList, 'LoginPage'>;
}

export type AuthStackParamList = {
  LoginPage: undefined;
  DrawerNavi: undefined;
};

// 메인탭
export interface MainTabProps {
  navigation: BottomTabNavigationProp<MainTabParamList, 'MainPage'>;
}
export type MainTabParamList = {
  MainPage: undefined;
  SearchPage: undefined;
  CalendarPage: undefined;
  AlarmsPage: undefined;
  PortfolioPage: undefined;
};

// ClubMainTab
export interface ClubMainTabProps {
  navigation: BottomTabNavigationProp<ClubMainTabParamList, 'ClubMainPage'>;
}
export type ClubMainTabParamList = {
  ClubMainPage: undefined;
  ChattingPage: undefined;
  MemberListPage: undefined;
  ClubSettingPage: undefined;
};

// main1
export interface MainProps {
  navigation: StackNavigationProp<MainPageParamList, 'MainPage'>;
}
export type MainPageParamList = {
  LoginPage: undefined;
  MainPage: undefined;
  EventPage: undefined;
  ClubMainTabNavi: undefined;
  CalendarPage: undefined;
  FavoritesPage: undefined;
};
// main2
export interface SearchProps {
  navigation: StackNavigationProp<SearchPageParamList, 'MainPage'>;
}
export type SearchPageParamList = {
  SearchPage: undefined;
  SearchClubPage: undefined;
  MainPage: undefined;
  SearchPopupPage: undefined;
};
export type SearchClubPageParamList = {
  SearchClubPage: undefined;
  SearchPopupPage: undefined;
  MainPage: undefined;
};
export type SearchPopupPageParamList = {
  SearchPopupPage: undefined;
  MainPage: undefined;
};

// main3
export interface CalendarProps {
  navigation: StackNavigationProp<CalendarPageParamList, 'MainPage'>;
}
export type CalendarPageParamList = {
  CalendarPage: undefined;
  MainPage: undefined;
};

// main4
export interface AlarmsProps {
  navigation: StackNavigationProp<AlarmsPageParamList, 'MainPage'>;
}
export type AlarmsPageParamList = {
  AlarmsPage: undefined;
  MainPage: undefined;
};

// main5
export interface PortfolioProps {
  navigation: StackNavigationProp<PortfolioPageParamList, 'MainPage'>;
}
export type PortfolioPageParamList = {
  MainPage: undefined;
  PortfolioPage: undefined;
  PortfolioInPage: undefined;
};
export type PortfolioInPageParamList = {
  PortfolioPage: undefined;
  PortfolioInPage: undefined;
};

// drawer
type DrawerParamList = {
  MainTapStack: undefined;
  DrawerNavi: undefined;
};

// clubmain1
type ClubMainPageParamList = {
  ClubMainList: undefined;
  MainPage: undefined;
};
// Clubmain2
type ChattingPageParamList = {
  ChattingPage: undefined;
  MainPage: undefined;
};
// Clubmain3
type MemberListPageParamList = {
  MemberListPage: undefined;
  MainPage: undefined;
};

// Clubmain4
type ClubSettingPageParamList = {
  ClubSettingPage: undefined;
  MainPage: undefined;
};
