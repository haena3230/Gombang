//LoginPage index.tsx
import React from 'react';
import {View} from 'react-native';
import {KakaoLogin, GetProfile} from '~/Components/Login';

// 로그인 페이지
const LoginPage = () => {
  return (
    <View>
      <KakaoLogin />
      <GetProfile />
    </View>
  );
};

export default LoginPage;
