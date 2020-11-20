import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';

//FCM
messaging().setBackgroundMessageHandler(async remoteMessage => {
    //remoteMessage에 서버에서 보낸 데이터 존재
    console.log('Message handled in the background!', remoteMessage);
});

AppRegistry.registerComponent(appName, () => App);


