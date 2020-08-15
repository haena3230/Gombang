// App.tsx
import * as React from 'react';
import {StyleSheet} from 'react-native';

// for navigator
import 'react-native-gesture-handler';

// import pages
import MainPageNavigator from '~/Pages/MainPage';

// 화면 구성
export default function App() {
  return <MainPageNavigator />;
}

// 스타일 지정
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
