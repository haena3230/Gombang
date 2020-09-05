// LoginPage index.tsx
import KakaoLogins from '@react-native-seoul/kakao-login';

if (!KakaoLogins) {
  console.error('module is not linked');
}

var kakaoHelper = {
  login: loginFunction,
  logout: logoutFunction,
};

function loginFunction() {
  KakaoLogins.login()
    .then((result) => {
      console.log(`###Login Result:${JSON.stringify(result)}`);
      KakaoLogins.getProfile()
        .then((result) => {
          console.log(`Profile:${JSON.stringify(result)}`);
          return result;
        })
        .catch((err) => {
          console.log(`profile err:${JSON.stringify(err)}`);
        });
    })
    .catch((err) => {
      console.log(`Login err:${JSON.stringify(err)}`);
    });
}

function logoutFunction() {
  KakaoLogins.logout()
    .then((result) => {
      console.log(`###Logout Result:${JSON.stringify(result)}`);
    })
    .catch((err) => {
      console.log(`Login err:${JSON.stringify(err)}`);
    });
}

module.exports = kakaoHelper;
