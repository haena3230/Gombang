// App.tsx
import React,{useState,useEffect} from 'react'; 
import {MenuProvider} from 'react-native-popup-menu';
import {createStore,combineReducers,Reducer,Store} from 'redux'
import {Provider} from 'react-redux'
import {loginReducers} from '~/Store/reducer'
import {URL} from '~/@types/Gombang'

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavi from './Pages/Navigator';
import {LoginStackNavi} from './Pages/Navigator';
import AsyncStorage from '@react-native-community/async-storage';
import SplashScreen from 'react-native-splash-screen'
import iid from '@react-native-firebase/iid';
const rootReducer:Reducer = combineReducers({
  login:loginReducers,
})
const store:Store = createStore(rootReducer)


// 화면 구성
export default function App() {
  // 토큰획득
  const[token,setToken] =useState('')
  async function getFBToken() {
    const fb = await iid().getToken()
    await setToken((await fb).toString())
  }
  // splash
  setTimeout(()=>{
       SplashScreen.hide()
  },1500)
  // 화면결정
  const[isLogin,setIsLogin] = useState(false)
  const axios = require('axios')
  
  useEffect(()=>{
        (async()=>{
           await getFBToken()
          
          AsyncStorage.getItem('kakaoId').then(async (value) => {
            // 로그인 이력이 있으면 토큰갱신
            if(value!==null){
              console.log(value)
              if(token!=='')  {
                 axios.patch(`${URL}/auth/token`,{
                    'kakaoId':value,
                    'token':token,
                  })
                  .then((res:any)=>{
                    console.log(res.status)
                    AsyncStorage.setItem('fbToken', token)
                  })
              }
              setIsLogin(true)
             }
             // 로그인이력없으면 로그인페이지
             else{
                 AsyncStorage.setItem('fbToken', token)
                 console.log(token)
             }
          })
        })();
  },[])

  return (
    <Provider store ={store}>
      <MenuProvider>
      <NavigationContainer>
        {isLogin?(
          <DrawerNavi />
        ):( 
          <LoginStackNavi />
        )}
    </NavigationContainer>
      </MenuProvider>
    </Provider>
  );
  
}
