// 기본 프로필 설정

import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
} from 'react-native';
import {StackActions, useNavigation} from '@react-navigation/native';
import {Picker} from '@react-native-community/picker';
import Icon from 'react-native-vector-icons/Ionicons';
// 컴포넌트
import Styles, {Color} from '~/Components/InputText';
import {LongButton} from '~/Components/Button';

const ProfileSettingPage = () => {
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
  const navigation = useNavigation();
  const onPress = () => {
    navigation.dispatch(StackActions.replace('DrawerNavi'));
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
      <Photo />
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
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}>
            <View style={styles.pickContainer}>
              <DropMenuCampus />
            </View>
            <View style={styles.pickContainer}>
              <DropMenuCol />
            </View>
          </View>
          <View style={styles.pickContainer}>
            <DropMenuMajor />
          </View>
        </View>
        <View style={styles.InputContainer}>
          <TextInput
            placeholder={'휴대전화'}
            onChangeText={(text) => setPhone(text)}
            value={phone}
            style={styles.txtInput}
            keyboardType={'number-pad'}
          />
        </View>
        <View style={styles.InputContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={styles.pickContainer}>
              <DropMenuBirthY />
            </View>
            <View style={styles.pickContainer}>
              <DropMenuBirthD />
            </View>
            <View style={styles.pickContainer}>
              <DropMenuBirthDD />
            </View>
          </View>
        </View>
      </View>

      <LongButton onPress={onPress} buttonTitle={'설정완료'}></LongButton>
    </ScrollView>
  );
};
// 사진 업로드 메뉴
const Photo = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.imgContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('UploadPhoto')}>
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: Color.l_color,
            borderRadius: 50,
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
  );
};
// 대학선택메뉴
export const DropMenuCampus = () => {
  const [selectedValue, setSelectedValue] = useState<string | number>('java');
  return (
    <Picker
      selectedValue={selectedValue}
      onValueChange={(itemValue: React.SetStateAction<string | number>) =>
        setSelectedValue(itemValue)
      }
      mode={'dropdown'}
      style={{width: 150, height: 40}}>
      <Picker.Item color="#808B96" label="캠퍼스" value="캠퍼스" />
      <Picker.Item color="#808B96" label="죽전" value="죽전" />
      <Picker.Item color="#808B96" label="천안" value="천안" />
    </Picker>
  );
};
// 대학선택메뉴
export const DropMenuCol = () => {
  const [selectedValue, setSelectedValue] = useState<string | number>('java');
  return (
    <Picker
      selectedValue={selectedValue}
      onValueChange={(itemValue: React.SetStateAction<string | number>) =>
        setSelectedValue(itemValue)
      }
      mode={'dropdown'}
      style={{width: 150, height: 40, fontSize: 16}}>
      <Picker.Item color="#808B96" label="대학" value="대학" />
      <Picker.Item
        color="#808B96"
        label="소프트웨어대학"
        value="소프트웨어대학"
      />
      <Picker.Item color="#808B96" label="공과대학" value="공과대학" />
    </Picker>
  );
};
// 학과 선택메뉴
export const DropMenuMajor = () => {
  const [selectedValue, setSelectedValue] = useState<string | number>('java');
  return (
    <Picker
      selectedValue={selectedValue}
      onValueChange={(itemValue: React.SetStateAction<string | number>) =>
        setSelectedValue(itemValue)
      }
      mode={'dropdown'}
      style={{width: '100%', height: 40, fontSize: 16}}>
      <Picker.Item color="#808B96" label="학과" value="학과" />
      <Picker.Item
        color="#808B96"
        label="소프트웨어학과"
        value="소프트웨어학과"
      />
      <Picker.Item color="#808B96" label="경영학과" value="경영학과" />
    </Picker>
  );
};
// 생일 선택 메뉴
export const DropMenuBirthY = () => {
  const [selectedValue, setSelectedValue] = useState<string | number>('java');
  return (
    <Picker
      selectedValue={selectedValue}
      onValueChange={(itemValue: React.SetStateAction<string | number>) =>
        setSelectedValue(itemValue)
      }
      mode={'dropdown'}
      style={{width: 100, height: 40, fontSize: 16}}>
      <Picker.Item color="#808B96" label="연도" value="연도" />
      <Picker.Item color="#808B96" label="1990" value="1990" />
    </Picker>
  );
};
export const DropMenuBirthD = () => {
  const [selectedValue, setSelectedValue] = useState<string | number>('java');
  return (
    <Picker
      selectedValue={selectedValue}
      onValueChange={(itemValue: React.SetStateAction<string | number>) =>
        setSelectedValue(itemValue)
      }
      mode={'dropdown'}
      style={{width: 80, height: 40, fontSize: 16}}>
      <Picker.Item color="#808B96" label="월" value="월" />
      <Picker.Item color="#808B96" label="1" value="1" />
    </Picker>
  );
};
export const DropMenuBirthDD = () => {
  const [selectedValue, setSelectedValue] = useState<string | number>('java');
  return (
    <Picker
      selectedValue={selectedValue}
      onValueChange={(itemValue: React.SetStateAction<string | number>) =>
        setSelectedValue(itemValue)
      }
      mode={'dropdown'}
      style={{width: 80, height: 40, fontSize: 16}}>
      <Picker.Item color="#808B96" label="일" value="일" />
      <Picker.Item color="#808B96" label="1" value="1" />
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
