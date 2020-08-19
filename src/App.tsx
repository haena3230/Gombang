// App.tsx
import * as React from 'react';
import {StyleSheet} from 'react-native';

// for navigator
import 'react-native-gesture-handler';

// import Naviator
import MainPageNavigator from './Pages/Navigator';

// 화면 구성
export default function App() {
  return <MainPageNavigator />;
}
