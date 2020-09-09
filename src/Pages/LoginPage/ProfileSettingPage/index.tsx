// 기본 프로필 설정
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Styled from 'styled-components/native';

const ProfileSettingPage = ({navigation}) => {
  return (
    <View style={{margin: 15}}>
      {/* 헤더 */}
      <View>
        <Text style={styles.title}>기본 프로필 설정 </Text>
      </View>
      {/* 사진 */}
      <View style={styles.imgContainer}>
        <Image
          style={styles.proflieImg}
          source={{
            uri: 'https://via.placeholder.com/100/F169B4/F169B4.png',
          }}
        />
      </View>
      {/* 정보입력 */}
      <View style={{marginVertical: 20}}>
        <InputContainer>
          <TxtInput autoFocus={true} placeholder={'이름'} />
        </InputContainer>
        <InputContainer>
          <TxtInput placeholder={'휴대전화'} />
        </InputContainer>
        <InputContainer>
          <TxtInput placeholder={'생년월일'} />
        </InputContainer>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('MainPage')}
        style={styles.button}>
        <Text style={styles.font}>설정 완료</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imgContainer: {
    padding: 20,
    alignItems: 'center',
  },
  proflieImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  textInput: {
    fontSize: 14,
    borderWidth: 2,
    borderColor: '#D5D8DC',
  },
  button: {
    padding: 10,
    backgroundColor: '#808B96',
    borderRadius: 5,
    alignItems: 'center',
  },
  font: {
    color: '#FDFEFE',
    fontWeight: 'bold',
  },
});

const TxtInput = Styled.TextInput`
  fontSize: 14px;
  height:40px;
  borderWidth: 2px;
  borderColor: #D5D8DC;
`;

const InputContainer = Styled.View`
  marginVertical:5px;
`;

export default ProfileSettingPage;
