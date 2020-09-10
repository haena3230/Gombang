// 기본 프로필 설정

import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Styled from 'styled-components/native';
import {Picker} from '@react-native-community/picker';

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
          <TxtInput placeholder={'이름'} />
        </InputContainer>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.pickContainer}>
            <DropMenuCampus />
          </View>
          <View style={styles.pickContainer}>
            <DropMenuMajor />
          </View>
        </View>
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
        <Text style={styles.buttonFont}>설정 완료</Text>
      </TouchableOpacity>
    </View>
  );
};

const DropMenuCampus = () => {
  const [selectedValue, setSelectedValue] = useState<string | number>('java');
  return (
    <Picker
      selectedValue={selectedValue}
      onValueChange={(itemValue) => setSelectedValue(itemValue)}
      mode={'dropdown'}
      style={{width: 150, height: 40}}>
      <Picker.Item color="#808B96" label="대학" value="대학" />
      <Picker.Item color="#808B96" label="죽전" value="죽전" />
      <Picker.Item color="#808B96" label="천안" value="천안" />
    </Picker>
  );
};

const DropMenuMajor = () => {
  const [selectedValue, setSelectedValue] = useState<string | number>('java');
  return (
    <Picker
      selectedValue={selectedValue}
      onValueChange={(itemValue) => setSelectedValue(itemValue)}
      mode={'dropdown'}
      style={{width: 150, height: 40}}>
      <Picker.Item color="#808B96" label="학과" value="학과" />
      <Picker.Item
        color="#808B96"
        label="소프트웨어학과"
        value="소프트웨어학과"
      />
      <Picker.Item color="#808B96" label="컴퓨터공학과" value="컴퓨터공학과" />
    </Picker>
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
  pickContainer: {
    borderWidth: 2,
    borderColor: '#D5D8DC',
    height: 40,
  },
  button: {
    padding: 10,
    backgroundColor: '#808B96',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonFont: {
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
  marginVertical:8px;
`;

export default ProfileSettingPagee;
