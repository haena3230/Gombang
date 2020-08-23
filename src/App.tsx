// App.tsx
import * as React from 'react';

// for navigator
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

// import Naviator
import MainTabNavigator from './Pages/Navigator';

// 화면 구성
export default function App() {
  return (
    <NavigationContainer>
      <MainTabNavigator />
    </NavigationContainer>
  );
}
