// type 지정

// main1
type MainPageParamList = {
  MainPage: undefined;
  CircleMainPage: undefined;
  EventPage: undefined;
  CalendarPage: undefined;
};

// main2
type SearchPageParamList = {
  SearchPage: undefined;
  SearchCirclePage: undefined;
  MainPage: undefined;
};
type SearchCirclePageParamList = {
  SearchCirclePage: undefined;
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
type NotificationPageParamList = {
  NotificationPage: undefined;
  MainPage: undefined;
};

// main5
type PortfolioPageParamList = {
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

// circlemain1
type CircleMainPageParamList = {
  CircleMainList: undefined;
  MainPage: undefined;
};
// circlemain2
type ChattingPageParamList = {
  ChattingPage: undefined;
  MainPage: undefined;
};
// circlemain3
type MemberListPageParamList = {
  MemberListPage: undefined;
  MainPage: undefined;
};

// circlemain4
type CircleSettingPageParamList = {
  CircleSettingPage: undefined;
  MainPage: undefined;
};
