// 동아리 가입 신청서
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import Modal from 'react-native-modal';
import {Styles, Color} from '~/@types/basic_style';
import Styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {LongButton} from '~/Components/Button';
import {useNavigation} from '@react-navigation/native';
import {Picker} from '@react-native-community/picker';
import {
  DropMenuBirthY,
  DropMenuBirthD,
  DropMenuBirthDD,
  DropMenuCampus,
  DropMenuCol,
  DropMenuMajor,
} from '~/Pages/LoginPage/ProfileSettingPage';

interface ApplicationFormProps {
  BackPressForm: () => void;
  Formvisible: boolean;
}
export const ApplicationForm = ({
  BackPressForm,
  Formvisible,
}: ApplicationFormProps) => {
  // 이름
  const [name, setName] = useState('');
  // 학번
  const [classof, setClassof] = useState('');
  // 전화번호
  const [phone, setPhone] = useState('');
  // 거주지역
  const [area, setArea] = useState('');
  // 활동 경험
  const [ex, setEx] = useState('');
  // 신청하기 버튼
  const navigation = useNavigation();
  const onPress = () => {
    null;
  };
  return (
    <Modal
      onBackdropPress={BackPressForm}
      isVisible={Formvisible}
      backdropOpacity={1}
      animationIn={'slideInRight'}
      animationOut={'slideOutRight'}
      hasBackdrop={true}
      backdropColor={Color.w_color}>
      {/* 헤더 */}
      <View
        style={{
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          borderBottomWidth: 1,
          borderColor: Color.l_color,
        }}>
        <View style={{justifyContent: 'center'}}>
          <Text style={Styles.b_b_font}>가입 신청서 </Text>
        </View>
        <TouchableOpacity
          style={{position: 'absolute', left: 0}}
          onPress={BackPressForm}>
          <Icon
            name="arrow-back-outline"
            size={30}
            color={Color.g_color}></Icon>
        </TouchableOpacity>
      </View>
      {/* 몸통 */}

      <ScrollView
        style={{backgroundColor: Color.w_color, flex: 1, marginVertical: 10}}>
        <KeyboardAvoidingView behavior={'padding'}>
          <View>
            <Text style={Styles.s_b_font}>기본 정보</Text>
            <RowContainer>
              <TxtInput
                placeholder="이름"
                onChangeText={(text) => setName(text)}
                value={name}
                width={'60%'}
                maxLength={10}
              />
              <PickContainer>
                <Gender />
              </PickContainer>
            </RowContainer>
            <RowContainer>
              <PickContainer>
                <DropMenuBirthY />
              </PickContainer>
              <PickContainer>
                <DropMenuBirthD />
              </PickContainer>
              <PickContainer>
                <DropMenuBirthDD />
              </PickContainer>
            </RowContainer>
            <RowContainer>
              <PickContainer>
                <DropMenuCampus />
              </PickContainer>
              <PickContainer>
                <DropMenuCol />
              </PickContainer>
            </RowContainer>
            <PickContainer>
              <DropMenuMajor />
            </PickContainer>
            <TxtInput
              placeholder="학번"
              onChangeText={(text) => setClassof(text)}
              value={classof}
              width={'100%'}
              keyboardType={'number-pad'}
              maxLength={8}
            />
            <TxtInput
              placeholder="전화번호"
              onChangeText={(text) => setPhone(text)}
              value={phone}
              width={'100%'}
              keyboardType={'number-pad'}
              maxLength={14}
            />
            <TxtInput
              placeholder="거주지역 ex) 경기도 용인시"
              onChangeText={(text) => setArea(text)}
              value={area}
              width={'100%'}
              multiline={true}
              maxLength={50}
            />
            <Text style={Styles.s_b_font}>동아리 활동 경험</Text>
            <TxtInput
              placeholder={'자유롭게 작성해주세요!\n\n\n\n\n'}
              onChangeText={(text) => setEx(text)}
              value={ex}
              width={'100%'}
              height={100}
              multiline={true}
              numberOfLines={4}
              maxLength={300}
            />
          </View>
        </KeyboardAvoidingView>

        <View style={{marginTop: 10}}>
          <LongButton buttonTitle={'신청하기'} onPress={onPress} />
        </View>
      </ScrollView>
    </Modal>
  );
};

// 성별 선택 메뉴
const Gender = () => {
  const [selectedValue, setSelectedValue] = useState<string | number>('java');
  return (
    <Picker
      selectedValue={selectedValue}
      onValueChange={(itemValue: React.SetStateAction<string | number>) =>
        setSelectedValue(itemValue)
      }
      mode={'dropdown'}
      style={{
        width: 100,
        height: 40,
      }}>
      <Picker.Item color="#808B96" label="성별" value="성별" />
      <Picker.Item color="#808B96" label="남" value="남" />
      <Picker.Item color="#808B96" label="여" value="여" />
    </Picker>
  );
};
// 연도 선택 메뉴

interface TxtInputProps {
  width: number | string;
  height?: number;
}

const TxtInput = Styled.TextInput`
    height:${(props: TxtInputProps) => (props.height ? props.height : 40)}
    marginVertical:5px;
    fontSize:14px;
    fontWeight:bold;
    borderWidth:1px;
    borderColor:${Color.l_color}
    width:${(props: TxtInputProps) => (props.width ? props.width : 100)}
`;

const RowContainer = Styled.View`
    flexDirection:row;
    alignItems:center;
    justifyContent:space-between;
    
`;
const PickContainer = Styled.View`
    borderWidth: 1px;
    borderColor: ${Color.l_color};
    height:40px;
    marginVertical:5px;
`;
