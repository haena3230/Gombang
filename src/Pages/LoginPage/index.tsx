//LoginPage index.tsx
import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Button} from 'react-native';
import KakaoLogins from '@react-native-seoul/kakao-login';
import {URL} from '~/@types/Gombang';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage'
import {useDispatch} from 'react-redux'
import Logoimage from '~/Assets/Logoimage.svg';
import Logotext from '~/Assets/Logotext.svg';
// 토큰 얻기
import {loginStateAction } from '~/Store/actions';
import { Color,Styles } from '~/@types/basic_style';




// 로그인 페이지
const LoginPage = () => {
  const dispatch=useDispatch()
  let data;
  let pdata: { id: string; };
  let kakaoId: string;
  
  const navigation=useNavigation();
  
  const storeKakaoId=(inputId:string)=>{
    dispatch(loginStateAction(inputId))
  }
  // 아이디 체크
  const checkId=()=>{
    const axios = require('axios')
    try {
      (async () => {
        await axios.get(`${URL}/user/${kakaoId}`)
        .then((res:any)=>{
           // id존재안함
            if(res.status===204){
            navigation.navigate('MailPage')
            }
            // id존재함
            else if(res.status===200){
              AsyncStorage.setItem('UserId', JSON.stringify(res.data.id))
              navigation.navigate('MainPage')
              
          }
        })  
      })();
    } catch (e) {
      console.log('Failed to fetch the data from storage');
    }
  }

  return (
    <View style={styles.LoginContainer}>
      
        <Logoimage width={100} height={100}/>
        <Logotext width={130} height={80}/>
        <Text style={Styles.s_b_font}>환영합니다! 로그인해주세요</Text>
      
      <TouchableOpacity
        onPress={() =>
          // 로그인, 카카오아이디얻기
            KakaoLogins.login()
            .then(async (result) => {
              await KakaoLogins.getProfile().then((profile) => {
                data = JSON.stringify(profile)
                pdata = JSON.parse(data)
                kakaoId=pdata.id;
                storeKakaoId(kakaoId)
                AsyncStorage.setItem('kakaoId', kakaoId)
                console.log("kakao id : " + pdata.id);
              });
              console.log(`Login Finished:${JSON.stringify(result)}`);
              checkId()
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
    backgroundColor:Color.w_color,
    justifyContent:'center',
    alignItems:'center', 
    
  },

  LoginButton: {
    margin: 20,
    alignItems: 'center',
    backgroundColor: '#FEE500',
    padding: 15,
    borderRadius: 12,
    width:300,
    
  },
  text: {
    color: 'rgba(0,0,0,0.85)',
    fontWeight: 'bold',
  },
});

