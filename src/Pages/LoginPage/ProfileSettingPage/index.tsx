// 기본 프로필 설정

import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {useSelector,useDispatch} from 'react-redux'
// 컴포넌트
import {Styles, Color} from '~/@types/basic_style';
import {LongButton} from '~/Components/Button';
import AddPhoto from '~/Components/AddPhoto';
import AsyncStorage from '@react-native-community/async-storage';
import {URL} from '~/@types/Gombang'
import {useNavigation} from '@react-navigation/native';
import { imageAction } from '~/Store/actions';


let campus: string | number;
let college: string | number;
let department: string | number;
let year: string | number ;
let month: string | number;
let date: string | number;

const ProfileSettingPage = () => {
  const dispatch = useDispatch()
  const setImg=(inputUri:string,inputName:string)=>{
      dispatch(imageAction(inputUri,inputName))
  }
  const navigation = useNavigation()
  const axios = require('axios')
  useEffect(()=>{
    set()
    setBirth(year+'.'+month+'.'+date)
  },[date])
    
  
  const set =()=>{
    AsyncStorage.getItem('fbToken').then((value) => {
     setFbToken(value);})
    AsyncStorage.getItem('email').then((value) => {
      setMail(value+'@dankook.ac.kr');
    });    
  }
  // 보낼 데이터
  const imageUri = useSelector((state)=>state.login.imageUri)
  const imageName = useSelector((state)=>state.login.imageName)
  const [fbToken,setFbToken] = useState<null|string>('');
  const [mail,setMail] = useState<string|null>('');
  const [name, setName] = useState<string>();
  const [studentNum, setStudentNum] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const [birth, setBirth] = useState<string>();
  const kakaoId =useSelector((state)=>state.login.kakaoId)

  const onPress = () => {
    // post 
    (async () => {
      const formData = new FormData();
      formData.append('image',{
          uri:imageUri,
          type:'image/jpeg',
          name:imageName,
      })
      formData.append('kakaoId',kakaoId)
      formData.append('token',fbToken)
      formData.append('name',name)
      formData.append('email',mail)
      formData.append('phone',phone)
      formData.append('birth',birth)
      formData.append('campus',campus)
      formData.append('college',college)
      formData.append('departmen',department)
      formData.append('studentNumber',studentNum)

      await axios.post(`${URL}/user`,formData,{
         headers: { 'content-type': 'multipart/form-data' }
      })
       .then((response: any) => {
           AsyncStorage.setItem('UserId', JSON.stringify(response.data.id))
           setImg('','')
       })
        .catch((err: any) => {
          console.log(err);
          setImg('','')
        });
        navigation.navigate('MainPage')
    })();    
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
      <AddPhoto />
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
            placeholder={'학번'}
            onChangeText={(text) => setStudentNum(text)}
            value={studentNum}
            style={styles.txtInput}
            keyboardType={'number-pad'}
          />
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

// 대학선택메뉴
export const DropMenuCampus = () => {
  const [selectedValue, setSelectedValue] = useState<string | number>('java');
  campus = selectedValue;
  return (
    <Picker
      selectedValue={selectedValue}
      onValueChange={(itemValue: React.SetStateAction<string | number>) =>
        setSelectedValue(itemValue)
      }
      mode={'dropdown'}
      style={{width: 170, height: 40}}>
      <Picker.Item color="#808B96" label="캠퍼스" value="캠퍼스" />
      <Picker.Item color="#808B96" label="죽전" value="죽전" />
      <Picker.Item color="#808B96" label="천안" value="천안" />
    </Picker>
  );
};
// 대학선택메뉴
export const DropMenuCol = () => {
  const [selectedValue, setSelectedValue] = useState<string | number>('java');
  college = selectedValue
  return (
    <Picker
      selectedValue={selectedValue}
      onValueChange={(itemValue: React.SetStateAction<string | number>) =>
        setSelectedValue(itemValue)
      }
      mode={'dropdown'}
      style={{width: 170, height: 40, fontSize: 16}}>
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
  department = selectedValue
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
  year = selectedValue
  return (
    <Picker
      selectedValue={selectedValue}
      onValueChange={(itemValue: React.SetStateAction<string | number>) =>
        setSelectedValue(itemValue)
      }
      mode={'dropdown'}
      style={{width: 120, height: 40, fontSize: 16}}>
      <Picker.Item color="#808B96" label="연도" value="연도" />
      <Picker.Item color="#808B96" label="1990" value="1990" />
      <Picker.Item color="#808B96" label="1991" value="1991" />
      <Picker.Item color="#808B96" label="1992" value="1992" />
      <Picker.Item color="#808B96" label="1993" value="1993" />
      <Picker.Item color="#808B96" label="1994" value="1994" />
      <Picker.Item color="#808B96" label="1995" value="1995" />
      <Picker.Item color="#808B96" label="1996" value="1996" />
      <Picker.Item color="#808B96" label="1997" value="1997" />
      <Picker.Item color="#808B96" label="1998" value="1998" />
      <Picker.Item color="#808B96" label="1998" value="1999" />
      <Picker.Item color="#808B96" label="2000" value="2000" />
    </Picker>
  );
};
export const DropMenuBirthD = () => {
  const [selectedValue, setSelectedValue] = useState<string | number>('java');
  month = selectedValue
  return (
    <Picker
      selectedValue={selectedValue}
      onValueChange={(itemValue: React.SetStateAction<string | number>) =>
        setSelectedValue(itemValue)
      }
      mode={'dropdown'}
      style={{width: 100, height: 40, fontSize: 16}}>
      <Picker.Item color="#808B96" label="월" value="월" />
      <Picker.Item color="#808B96" label="1" value="1" />
      <Picker.Item color="#808B96" label="2" value="2" />
      <Picker.Item color="#808B96" label="3" value="3" />
      <Picker.Item color="#808B96" label="4" value="4" />
      <Picker.Item color="#808B96" label="5" value="5" />
      <Picker.Item color="#808B96" label="6" value="6" />
      <Picker.Item color="#808B96" label="7" value="7" />
      <Picker.Item color="#808B96" label="8" value="8" />
      <Picker.Item color="#808B96" label="9" value="9" />
      <Picker.Item color="#808B96" label="10" value="10" />
      <Picker.Item color="#808B96" label="11" value="11" />
      <Picker.Item color="#808B96" label="12" value="12" />
    </Picker>
  );
};
export const DropMenuBirthDD = () => {
  const [selectedValue, setSelectedValue] = useState<string | number>('java');
  date = selectedValue
  return (
    <Picker
      selectedValue={selectedValue}
      onValueChange={(itemValue: React.SetStateAction<string | number>) =>
        setSelectedValue(itemValue)
      }
      mode={'dropdown'}
      style={{width: 100, height: 40, fontSize: 16}}>
      <Picker.Item color="#808B96" label="일" value="일" />
      <Picker.Item color="#808B96" label="1" value="1" />
      <Picker.Item color="#808B96" label="2" value="2" />
      <Picker.Item color="#808B96" label="3" value="3" />
      <Picker.Item color="#808B96" label="4" value="4" />
      <Picker.Item color="#808B96" label="5" value="5" />
      <Picker.Item color="#808B96" label="6" value="6" />
      <Picker.Item color="#808B96" label="7" value="7" />
      <Picker.Item color="#808B96" label="8" value="8" />
      <Picker.Item color="#808B96" label="9" value="9" />
      <Picker.Item color="#808B96" label="10" value="10" />
      <Picker.Item color="#808B96" label="11" value="11" />
      <Picker.Item color="#808B96" label="12" value="12" />
      <Picker.Item color="#808B96" label="13" value="13" />
      <Picker.Item color="#808B96" label="14" value="14" />
      <Picker.Item color="#808B96" label="15" value="15" />
      <Picker.Item color="#808B96" label="16" value="16" />
      <Picker.Item color="#808B96" label="17" value="17" />
      <Picker.Item color="#808B96" label="18" value="18" />
      <Picker.Item color="#808B96" label="19" value="19" />
      <Picker.Item color="#808B96" label="20" value="20" />
      <Picker.Item color="#808B96" label="21" value="21" />
      <Picker.Item color="#808B96" label="22" value="22" />
      <Picker.Item color="#808B96" label="23" value="23" />
      <Picker.Item color="#808B96" label="24" value="24" />
      <Picker.Item color="#808B96" label="25" value="25" />
      <Picker.Item color="#808B96" label="26" value="26" />
      <Picker.Item color="#808B96" label="27" value="27" />
      <Picker.Item color="#808B96" label="28" value="28" />
      <Picker.Item color="#808B96" label="29" value="29" />
      <Picker.Item color="#808B96" label="30" value="30" />
      <Picker.Item color="#808B96" label="31" value="31" />
    </Picker>
  );
};

const styles = StyleSheet.create({
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
