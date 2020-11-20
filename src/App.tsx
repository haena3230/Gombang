// App.tsx
import React,{useState,useEffect} from 'react'; 
import {MenuProvider} from 'react-native-popup-menu';
import {createStore,combineReducers,Reducer,Store} from 'redux'
import {Provider} from 'react-redux'
import {loginReducers} from '~/Store/reducer'

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavi from './Pages/Navigator';
import {LoginStackNavi} from './Pages/Navigator';
import AsyncStorage from '@react-native-community/async-storage';
import SplashScreen from 'react-native-splash-screen'

const rootReducer:Reducer = combineReducers({
  login:loginReducers,
})
const store:Store = createStore(rootReducer)

import { Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';


// 화면 구성
export default function App() {
  setTimeout(()=>{
       SplashScreen.hide()
  },1000)
  const [isToken,setIsToken] = useState(false)
  useEffect(()=>{
        AsyncStorage.getItem('fbToken').then((value) => {
        if(value==null) setIsToken(false)
        else setIsToken(true)
        })
  },[])

    //FCM
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      //remoteMessage에 서버에서 보낸 데이터 존재
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    console.log('e')
  },[])
  

 
  return (
    <Provider store ={store}>
      <MenuProvider>
      <NavigationContainer>
        {isToken?(
          <DrawerNavi />
        ):( 
          <LoginStackNavi />
        )}
    </NavigationContainer>
      </MenuProvider>
    </Provider>
  );
  
}
