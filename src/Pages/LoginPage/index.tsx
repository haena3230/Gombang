//LoginPage index.tsx
import React, {useState,useEffect,useContext,createContext} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Button} from 'react-native';
import KakaoLogins from '@react-native-seoul/kakao-login';
import {URL} from '~/@types/Gombang';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage'
// 토큰 얻기
import iid from '@react-native-firebase/iid';



// 로그인 페이지
const LoginPage = () => {

  let data;
  let pdata: { id: string; };
  let kakaoId: string;
  
  const navigation=useNavigation();
  

  // 아이디 체크
  const checkId=()=>{
    const axios = require('axios')
    try {
      (async () => {
        await axios.get(`${URL}/user/${kakaoId}`)
        .then((res:any)=>{
           // id존재안함
            if(res.status===204){
            AsyncStorage.setItem('isLogin', JSON.stringify(false))
            AsyncStorage.setItem('UserId', JSON.stringify(res.data.id))
            navigation.navigate('MailPage')
            }
            // id존재함
            else if(res.status===200){
            AsyncStorage.setItem('isLogin', JSON.stringify(true))
            AsyncStorage.setItem('UserId', JSON.stringify(res.data.id))
          }
        })  
      })();
    } catch (e) {
      console.log('Failed to fetch the data from storage');
    }
  }

  // 토큰획득
  async function getFBToken() {
    const fbtoken = await iid().getToken();
    AsyncStorage.setItem('fbToken', fbtoken)
    console.log(fbtoken)
  }
  return (
    <View style={styles.LoginContainer}>
      <TouchableOpacity
        onPress={() =>
          // 로그인, 카카오아이디얻기
            KakaoLogins.login()
            .then(async (result) => {
              await KakaoLogins.getProfile().then((profile) => {
                data = JSON.stringify(profile)
                pdata = JSON.parse(data)
                kakaoId=pdata.id;
                AsyncStorage.setItem('kakaoId', kakaoId)
                console.log("kakao id : " + pdata.id);
              });
              console.log(`Login Finished:${JSON.stringify(result)}`);
              checkId()
              getFBToken()
            })
            .catch((err) => {
              if (err.code === 'E_CANCELLED_OPERATION') {
                console.log(`Login Cancelled:${err.message}`);
              } else {
                console.log(`Login Failed:${err.code} ${err.message}`);
              }
            })
           
        }
        activeOpacity={0.5}
        style={styles.LoginButton}>
        <Text style={styles.text}>카카오 계정으로 로그인</Text>
      
      </TouchableOpacity>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  LoginContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  LoginButton: {
    margin: 20,
    alignItems: 'center',
    backgroundColor: '#FEE500',
    padding: 15,
    borderRadius: 12,
  },
  text: {
    color: 'rgba(0,0,0,0.85)',
    fontWeight: 'bold',
  },
});
