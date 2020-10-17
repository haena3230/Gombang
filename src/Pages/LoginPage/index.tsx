//LoginPage index.tsx
import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import KakaoLogins from '@react-native-seoul/kakao-login';
import {StackActions} from '@react-navigation/native';
// 로그인 페이지
const LoginPage = ({navigation}: any) => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <View style={styles.LoginContainer}>
      <TouchableOpacity
        onPress={() =>
          KakaoLogins.login()
            .then((result) => {
              KakaoLogins.getProfile().then((profile) => {
                console.log(`profile:${JSON.stringify(profile)}`);
              });
              setIsLogin(true);
              console.log(`Login Finished:${JSON.stringify(result)}`);
              navigation.dispatch(StackActions.replace('MailPage'));
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
