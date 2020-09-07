import React, {useState} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

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

export default function EventPage() {
  const [token, setToken] = useState(TOKEN_EMPTY);
  const [profile, setProfile] = useState<IUser>(PROFILE_EMPTY);

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

  const kakaoLogout = () => {
    console.log('Logout Start');

    KakaoLogins.logout()
      .then((result) => {
        setToken(TOKEN_EMPTY);
        setProfile(PROFILE_EMPTY);
        console.log(`Logout Finished:${result}`);
      })
      .catch((err) => {
        console.log(`Logout Failed:${err.code} ${err.message}`);
      });
  };

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
    <View style={styles.container}>
      <View style={styles.profile}>
        <Text>{`id : ${id}`}</Text>
        <Text>{`nickname : ${nickname}`}</Text>
        <Text>{`email: ${email}`}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.token}>{token}</Text>
        <TouchableOpacity
          onPress={kakaoLogin}
          activeOpacity={0.5}
          style={styles.btnKakaoLogin}>
          <Text>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={kakaoLogout}
          activeOpacity={0.5}
          style={styles.btnKakaoLogin}>
          <Text>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={getProfile}
          activeOpacity={0.5}
          style={styles.btnKakaoLogin}>
          <Text>getProfile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: Platform.OS === 'ios' ? 0 : 24,
    paddingTop: Platform.OS === 'ios' ? 24 : 0,
    backgroundColor: 'white',
  },
  profile: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  profilePhoto: {
    width: 120,
    height: 120,
    borderWidth: 1,
    borderColor: 'black',
  },
  content: {
    flex: 6,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  token: {
    width: 200,
    fontSize: 12,
    padding: 5,
    borderRadius: 8,
    marginVertical: 20,
    backgroundColor: 'grey',
    color: 'white',
    textAlign: 'center',
  },
  btnKakaoLogin: {
    height: 48,
    width: 240,
    alignSelf: 'center',
    backgroundColor: '#F8E71C',
    borderRadius: 0,
    borderWidth: 0,
    fontSize: 16,
    color: '#3d3d3d',
  },
});
