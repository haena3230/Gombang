// 카카오 로그아웃
import KakaoLogins from '@react-native-seoul/kakao-login';
import {Alert} from 'react-native';
if (!KakaoLogins) {
  console.error('Module is Not Linked');
}

const PROFILE_EMPTY = {
  id: 'profile has not fetched',
  nickname: 'profile has not fetched',
  email: 'profile has not fetched',
};

// // 파이어베이스 토큰 함수
// async function getFBToken() {
//   const fbtoken = await firebase.iid().getToken();
//   console.log(fbtoken);
// }

// 로그아웃 함수
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

export const Logout=()=>{
    Alert.alert('', '로그아웃 하시겠습니까?', [
        {
          text: '취소',
          onPress: () => {
            return null;
          },
        },
        {
          text: '확인',
          onPress: () => {
            KakaoLogout();
          },
        },
      ])
}
 