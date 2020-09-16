// 카카오 로그아웃
import KakaoLogins from '@react-native-seoul/kakao-login';
// import iid from '@react-native-firebase/iid';
import firebase from '@react-native-firebase/app';

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
