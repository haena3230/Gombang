// type 지정

// main1

// navigation
import {StackNavigationProp} from '@react-navigation/stack';
export interface MainProps {
  navigation: StackNavigationProp<MainPageParamList, 'MainPage'>;
}

export type MainPageParamList = {
  MainPage: undefined;
  MainTabNavi: undefined;
  EventPage: undefined;
  ClubMainPage: undefined;
  CalendarPage: undefined;
  FavoritesPage: undefined;
};

// 내 동아리 리스트
export interface users_club {
  my_club_name: string;
  my_club_image_path: string;
}
// 즐겨찾기
export interface users_fav_club {
  my_fav_club_name: string;
  my_fav_club_image_path: string;
}

// main2
export type SearchPageParamList = {
  SearchPage: undefined;
  SearchClubPage: undefined;
  MainPage: undefined;
  SearchPopupPage: undefined;
};
type SearchClubPageParamList = {
  SearchClubPage: undefined;
  SearchPopupPage: undefined;
  MainPage: undefined;
};
type SearchPopupPageParamList = {
  SearchPopupPage: undefined;
  MainPage: undefined;
};

// main3
type CalendarPageParamList = {
  CalendarPage: undefined;
  MainPage: undefined;
};

// main4
type AlarmsPageParamList = {
  AlarmsPage: undefined;
  MainPage: undefined;
};

// main5
export type PortfolioPageParamList = {
  MainPage: undefined;
  PortfolioPage: undefined;
  PortfolioInPage: undefined;
};
type PortfolioInPageParamList = {
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
