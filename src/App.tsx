// App.tsx
import * as React from 'react'; 
import {MenuProvider} from 'react-native-popup-menu';

// for navigator
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {useState,useEffect} from 'react'
// import Naviator
import DrawerNavi from './Pages/Navigator';
import {LoginStackNavi} from './Pages/Navigator';
import AsyncStorage from '@react-native-community/async-storage';
import { Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';


// 화면 구성
export default function App() {
  const[status,setStatus] = useState<null|string>('');
  const[isLogged,setIsLogged] = useState(false);
  useEffect(()=>{
    //  AsyncStorage.setItem('isLogin', JSON.stringify(false))

    //FCM
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      //remoteMessage에 서버에서 보낸 데이터 존재
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    console.log('e')
    AsyncStorage.getItem('isLogin').then((value) => {
        setStatus(value);
    });
    if(status=='true'){
      setIsLogged(true)
    }
    else setIsLogged(false)
  },[isLogged])
  
  return (
    <MenuProvider>
    <NavigationContainer>
      {isLogged?(
        <DrawerNavi />
      ):(
        <LoginStackNavi />
      )}
    </NavigationContainer>
    </MenuProvider>
  );
}
