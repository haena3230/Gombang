// 기본 프로필 설정

import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Styled from 'styled-components/native';
import {Picker} from '@react-native-community/picker';
import Icon from 'react-native-vector-icons/Ionicons';
// 컴포넌트
import Styles, {Color} from '~/Components/InputText';
import {LongButton} from '~/Components/Button';

const ProfileSettingPage = () => {
  const navigation = useNavigation();
  const [name, setName] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const [birth, setBirth] = useState<string>();

  // let photo = {uri: source.uri};
  // let formdata = new FormData();

  // formdata.append('product[name]', 'test');
  // formdata.append('product[price]', 10);
  // formdata.append('product[category_ids][]', 2);
  // formdata.append('product[description]', '12dsadadsa');
  // formdata.append('product[images_attributes[0][file]]', {
  //   uri: photo.uri,
  //   name: 'image.jpg',
  //   type: 'image/jpeg',
  // });
  // const onPress = () => {
  //   (async () => {
  //     const request = await fetch(`http://49.50.174.166:3000/user`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-type': 'multipart/form-data',
  //       },
  //       body: formdata,
  //     })
  //       .then((response) => {
  //         console.log('image uploaded');
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   })();
  // };
  const onPress = () => {
    navigation.navigate('DrawerNavi');
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: Color.w_color,
        padding: 20,
      }}>
      {/* 헤더 */}
      <View>
        <Text style={Styles.b_b_font}>기본 프로필 설정 </Text>
      </View>
      {/* 사진 */}
      <View style={styles.imgContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('UploadPhoto')}>
          <Image
            style={styles.proflieImg}
            source={{
              uri: 'https://via.placeholder.com/100/F169B4/F169B4.png',
            }}
          />
          <Icon
            name="camera"
            size={25}
            color="#808B96"
            style={{
              position: 'absolute',
              right: 5,
              bottom: 5,
            }}></Icon>
        </TouchableOpacity>
      </View>
      {/* 정보입력 */}

      <View style={{marginVertical: 20}}>
        <View style={styles.InputContainer}>
          <TextInput
            placeholder={'이름'}
            onChangeText={(text) => setName(text)}
            value={name}
            style={styles.txtInput}
          />
        </View>
        <View style={styles.InputContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={styles.pickContainer}>
              <DropMenuCampus />
            </View>
            <View style={styles.pickContainer}>
              <DropMenuMajor />
            </View>
          </View>
        </View>
        <View style={styles.InputContainer}>
          <TextInput
            placeholder={'휴대전화'}
            onChangeText={(text) => setPhone(text)}
            value={phone}
            style={styles.txtInput}
          />
        </View>
        <KeyboardAvoidingView behavior="height">
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.InputContainer}>
              <TextInput
                placeholder={'생년월일'}
                onChangeText={(text) => setBirth(text)}
                value={birth}
                style={styles.txtInput}
              />
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </View>

      <LongButton onPress={onPress} buttonTitle={'설정완료'}></LongButton>
    </ScrollView>
  );
};
// 대학선택메뉴
const DropMenuCampus = () => {
  const [selectedValue, setSelectedValue] = useState<string | number>('java');
  return (
    <Picker
      selectedValue={selectedValue}
      onValueChange={(itemValue: React.SetStateAction<string | number>) =>
        setSelectedValue(itemValue)
      }
      mode={'dropdown'}
      style={{width: 150, height: 40}}>
      <Picker.Item color="#808B96" label="대학" value="대학" />
      <Picker.Item color="#808B96" label="죽전" value="죽전" />
      <Picker.Item color="#808B96" label="천안" value="천안" />
    </Picker>
  );
};
// 학과선택메뉴
const DropMenuMajor = () => {
  const [selectedValue, setSelectedValue] = useState<string | number>('java');
  return (
    <Picker
      selectedValue={selectedValue}
      onValueChange={(itemValue: React.SetStateAction<string | number>) =>
        setSelectedValue(itemValue)
      }
      mode={'dropdown'}
      style={{width: 150, height: 40, fontSize: 16}}>
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
    borderWidth: 1,
    borderColor: Color.l_color,
    height: 40,
  },
  txtInput: {
    height: 40,
    marginLeft: 2,
    fontSize: 14,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: Color.l_color,
  },
  InputContainer: {
    marginBottom: 10,
  },
});

export default ProfileSettingPage;
