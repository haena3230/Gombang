// 메일 인증 페이지
// 메일 전송을 눌렀을때
import React, {useState} from 'react';
import CountDown from 'react-native-countdown-component';
import {useNavigation} from '@react-navigation/native';
import {Text, TextInput, View, StyleSheet, Alert} from 'react-native';
// 컴포넌트
import {LongButton} from '~/Components/Button';
import {Styles, Color} from '~/@types/basic_style';

const URL = 'http://133.186.159.137:3000';
// 인증메일 확인 페이지
const MailPage = () => {
  const navigation = useNavigation();
  // 메일
  const [mail, setMail] = useState<string>();
  const [isEffectiveMail, setisEffectiveMail] = useState(false);
  // 인증코드
  const [authCode, setAuthCode] = useState<string>();
  // 입력한 코드
  const [code, setCode] = useState<string>();

  const onPressMail = () => {
    console.log(mail);
    if (mail === undefined) {
      Alert.alert('메일 주소를 확인해 주세요.');
    }
    if (isEffectiveMail === true) {
      setisEffectiveMail(false);
    }
    try {
      setisEffectiveMail(true);
      (async () => {
        const response = await fetch(`${URL}/auth/mail/${mail}`, {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
          },
        });
        const receive = await response.json();
        setAuthCode(receive);
        console.log(receive);
      })();
    } catch (e) {
      setisEffectiveMail(false);
      Alert.alert('메일 주소를 확인해 주세요.');
    }
  };
  const onPressCode = () => {
    console.log(String(code));
    console.log(String(authCode));
    if (isEffectiveMail === false) {
      Alert.alert('인증번호를 확인해 주세요.');
    }
    if (isEffectiveMail === true) {
      if (code === undefined) {
        Alert.alert('인증 번호를 입력해 주세요');
      }
      if (code !== undefined) {
        {
          String(authCode) === String(code)
            ? (navigation.navigate('ProfileSettingPage'),
              setisEffectiveMail(false))
            : Alert.alert('인증번호를 확인해 주세요.');
        }
      }
    }
  };
  const onFinish = () => {
    setisEffectiveMail(false),
      Alert.alert('인증시간이 초과되었습니다. 재시도해주세요.');
  };
  return (
    <View style={styles.container}>
      <View style={{marginVertical: 15}}>
        <Text style={Styles.b_b_font}>학교 메일로 인증하기</Text>
      </View>
      <View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder={'메일(학번) 입력'}
            onChangeText={(text) => setMail(text)}
            value={mail}
            keyboardType={'number-pad'}
          />
          <View
            style={{
              justifyContent: 'center',
            }}>
            <Text style={Styles.m_b_font}>@dankook.ac.kr</Text>
          </View>
        </View>
      </View>
      <LongButton buttonTitle="인증 메일 받기" onPress={onPressMail} />
      <View style={{alignItems: 'flex-end'}}>
        {isEffectiveMail ? <Countdown onFinish={onFinish} /> : null}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder={'인증번호 입력'}
          onChangeText={(text) => setCode(text)}
          value={code}
          keyboardType={'number-pad'}
        />
      </View>
      <LongButton buttonTitle="시작하기" onPress={onPressCode} />
    </View>
  );
};

// 카운트다운 컴포넌트
interface countProps {
  onFinish: () => void;
}
const Countdown = ({onFinish}: countProps) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Text style={{color: 'red', fontSize: 12, fontWeight: 'bold'}}>
        남은시간{' '}
      </Text>
      <CountDown
        until={60 * 4}
        onFinish={onFinish}
        size={12}
        digitTxtStyle={{color: 'red'}}
        digitStyle={{backgroundColor: '#FFF'}}
        showSeparator={true}
        separatorStyle={{color: 'red'}}
        timeToShow={['M', 'S']}
        timeLabels={{m: null, s: null}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.w_color,
    padding: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#D5D8DC',
    marginVertical: 10,
    flexDirection: 'row',
  },
  textInput: {
    height: 40,
  },
  count: {
    fontSize: 12,
    color: 'red',
    margin: 2,
  },
});

export default MailPage;
