// 메일 인증 페이지
import React, {useState, useEffect} from 'react';
import {LoginStackProps} from '~/@types/navigation';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

// 버튼 컴포넌트
interface ButtonProps {
  buttonTitle: string;
  onPress: () => void;
}
const Button = ({buttonTitle, onPress}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.font}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

// 인증메일 확인
const MailPage = ({navigation}: LoginStackProps) => {
  const [text, setText] = useState<string>();
  // 인증코드
  const [authCode, setAuthCode] = useState<string>();
  // 입력한 코드
  const [code, setCode] = useState<string>();

  const onPressMail = () => {
    console.log(text);
    (async () => {
      const response = await fetch(
        `http://49.50.174.166:3000/auth/mail/${text}`,
        {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
          },
        },
      );
      const receive = await response.json();
      setAuthCode(receive);
      console.log(receive);
    })();
  };
  const onPressCode = () => {
    console.log(String(code));
    console.log(String(authCode));
    {
      String(authCode) === String(code)
        ? navigation.navigate('ProfileSettingPage')
        : Alert.alert('인증번호를 확인해 주세요.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>학교 메일로 인증하기</Text>
      <View>
        <TextInput
          style={styles.textInput}
          placeholder={'ex) 학번 @dankook.ac.kr'}
          onChangeText={(text) => setText(text)}
          value={text}
        />
        <Button buttonTitle="인증 메일 받기" onPress={onPressMail} />
      </View>
      <TextInput
        style={styles.textInput}
        placeholder={'인증번호'}
        onChangeText={(text) => setCode(text)}
        value={code}
      />
      <Button buttonTitle="시작하기" onPress={onPressCode} />
    </View>
  );
};
// 카운트 다운
const Countdown = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let counter = 10;
    const interval = setInterval(() => {
      console.log(counter);
      (counter: React.SetStateAction<number>) => setCount(counter);
      counter--;

      if (counter < 0) {
        clearInterval(interval);
        console.log('Ding!');
      }
    }, 1000);
  }, []);
  return (
    <View>
      <Text>남은시간 : {() => setCount}</Text>
    </View>
  );
};

{
  /* <button Onpress={this.startTimer}> Play </button>

<Text style={{fontSize: 18, color: '#000'}}>
 {this.state.timer === 0 ? 'Times Up!' : {this.state.timer} }
</Text> */
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    padding: 10,
    backgroundColor: '#ABB2B9',
    borderRadius: 5,
    alignItems: 'center',
  },
  font: {
    color: '#FDFEFE',
    fontWeight: 'bold',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
  },
  count: {
    fontSize: 12,
    color: 'red',
    margin: 2,
  },
});

export default MailPage;
