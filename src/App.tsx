// App.tsx
import * as React from 'react'; 
import {MenuProvider} from 'react-native-popup-menu';

// for navigator
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

// import Naviator
import DrawerNavi from './Pages/Navigator';
import {LoginStackNavi} from './Pages/Navigator';

// 화면 구성
export default function App() {
  return (
    <MenuProvider>
    <NavigationContainer>
      {/* <LoginStackNavi /> */}
      {/* <StartStack /> */}
      <DrawerNavi />
    </NavigationContainer>
    </MenuProvider>
  );
}
