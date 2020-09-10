// 메일 인증 페이지
import React, {useState, useEffect} from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

// 메일 인증 페이지
const MailPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>학교 메일로 인증하기</Text>
      <MailComponent />
    </View>
  );
};

// 메일 입력
const BtnText = '메일 전송';
const MailComponent = () => {
  const [msg, setMsg] = useState<string>(BtnText);

  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder={'ex) 학번@dankook.ac.kr'}
      />
      <TouchableOpacity
        onPress={() => setMsg('인증 메일 다시 받기')}
        style={styles.button}>
        <Text style={styles.font}>{msg}</Text>
      </TouchableOpacity>
      <AuthNumberComponent />
    </View>
  );
};

// 인증번호 입력
const AuthNumberComponent = ({navigation}: any) => {
  return (
    <View>
      {/* <Countdown /> */}
      <TextInput style={styles.textInput} placeholder={'인증번호 입력'} />
      <TouchableOpacity
        onPress={() => navigation.navigate('ProfileSettingPage')}
        style={styles.button}>
        <Text style={styles.font}>시작하기</Text>
      </TouchableOpacity>
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
