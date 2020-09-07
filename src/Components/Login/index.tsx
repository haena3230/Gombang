// 카카오 로그인/ 로그아웃 / 프로필정보 가져오기
import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import KakaoLogins from '@react-native-seoul/kakao-login';

if (!KakaoLogins) {
  console.error('Module is Not Linked');
}

interface IUser {
  id?: string | null;
  nickname?: string | null;
  email?: string | null;
}

const TOKEN_EMPTY = 'token has not fetched';
const PROFILE_EMPTY = {
  id: 'profile has not fetched',
  nickname: 'profile has not fetched',
  email: 'profile has not fetched',
};

// 로그인 컴포넌트
export function KakaoLogin() {
  const [token, setToken] = useState(TOKEN_EMPTY);

  const kakaoLogin = () => {
    console.log('Login Start');

    KakaoLogins.login()
      .then((result) => {
        setToken(result.accessToken);
        console.log(`Login Finished:${JSON.stringify(result)}`);
      })
      .catch((err) => {
        if (err.code === 'E_CANCELLED_OPERATION') {
          console.log(`Login Cancelled:${err.message}`);
        } else {
          console.log(`Login Failed:${err.code} ${err.message}`);
        }
      });
  };
  return (
    <TouchableOpacity
      onPress={kakaoLogin}
      activeOpacity={0.5}
      style={styles.LoginButton}>
      <Text style={styles.text}>카카오 계정으로 로그인</Text>
    </TouchableOpacity>
  );
}
// 로그아웃 모듈
export function KakaoLogout() {
  console.log('Logout Start');

  KakaoLogins.logout()
    .then((result) => {
      console.log(`Logout Finished:${result}`);
    })
    .catch((err) => {
      console.log(`Logout Failed:${err.code} ${err.message}`);
    });
}

// 프로필 get 컴포넌트
export function GetProfile() {
  const [profile, setProfile] = useState<IUser>(PROFILE_EMPTY);
  const getProfile = () => {
    console.log('Get Profile Start');

    KakaoLogins.getProfile()
      .then((result) => {
        setProfile(result);
        console.log(`Get Profile Finished:${JSON.stringify(result)}`);
      })
      .catch((err) => {
        console.log(`Get Profile Failed:${err.code} ${err.message}`);
      });
  };
  const {id, nickname, email} = profile;
  return (
    <View>
      <View style={styles.profile}>
        <Text>{`id : ${id}`}</Text>
        <Text>{`nickname : ${nickname}`}</Text>
        <Text>{`email: ${email}`}</Text>
      </View>

      <TouchableOpacity
        onPress={getProfile}
        activeOpacity={0.5}
        style={styles.LoginButton}>
        <Text style={styles.text}>getProfile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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

  profile: {
    alignItems: 'center',
    padding: 5,
  },
  profilePhoto: {
    width: 120,
    height: 120,
    borderWidth: 1,
    borderColor: 'black',
  },
});
