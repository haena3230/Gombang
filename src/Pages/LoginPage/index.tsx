//LoginPage index.tsx
import React, {useState,useEffect} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Button} from 'react-native';
import KakaoLogins from '@react-native-seoul/kakao-login';
import {StackActions} from '@react-navigation/native';
import {URL} from '~/@types/Gombang';
// 로그인 페이지
const LoginPage = ({navigation}: any) => {
  // id 존재 유무 확인
  const [idExist,setIdExist] = useState(false);
  const checkId=()=>{
    try {
      (async () => {
        console.log(kakaoId)
        const response = await fetch(`${URL}/user/${kakaoId}`, {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
          },
        });

        const idRes = await JSON.stringify(response)
        const idP = JSON.parse(idRes)
        console.log(idP.status)
        // 여기서 status보고 처리
      })();
    } catch (e) {
      console.log('Failed to fetch the data from storage');
    }
  }

  let data;
  let pdata: { id: string; };
  const[kakaoId,setKakaoId] = useState('')
  return (
    <View style={styles.LoginContainer}>
      <TouchableOpacity
        onPress={() =>
          KakaoLogins.login()
            .then((result) => {
              KakaoLogins.getProfile().then((profile) => {
                data = JSON.stringify(profile)
                pdata = JSON.parse(data)
                console.log("kakao id : " + pdata.id);
                setKakaoId (pdata.id)
              });
              console.log(`Login Finished:${JSON.stringify(result)}`);
              // navigation.dispatch(StackActions.replace('MailPage'));
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
        <Button onPress={()=>checkId()} title="rr"></Button>
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
