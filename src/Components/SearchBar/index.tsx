// search bar
import React, {useState} from 'react';
import {View, TouchableOpacity, Alert, Text} from 'react-native';
import Modal from 'react-native-modal';
import Styled from 'styled-components/native';
import Styles from '~/Components/InputText';

// 검색바
export const SearchBar = () => {
  const [text, setText] = useState<string>();
  return (
    <SearchBarContainer>
      <InsideContainer>
        <View style={{justifyContent: 'center', width: '83%', marginLeft: 2}}>
          <TxtInput
            placeholder={'동아리 이름, 해시태그를 검색해 보세요!'}
            onChangeText={(value) => setText(value)}
            value={text}
          />
        </View>
        <TouchableOpacity
          onPress={() => Alert.alert('test')}
          style={{justifyContent: 'center', padding: 10}}>
          <Text style={Styles.b_b_font}>검색</Text>
        </TouchableOpacity>
      </InsideContainer>
    </SearchBarContainer>
  );
};

// 모달용
interface SearchBarModalProps {
  BackPress: () => void;
  onPress: () => void;
  visible: boolean;
}
export const SearchBarModal = ({
  BackPress,
  onPress,
  visible,
}: SearchBarModalProps) => {
  return (
    <Modal
      isVisible={visible}
      animationIn={'slideInDown'}
      animationOut={'slideOutUp'}
      backdropOpacity={0.6}
      onBackdropPress={BackPress}>
      <SearchBar />
    </Modal>
  );
};

const SearchBarContainer = Styled.View`
height:50px;
borderColor: #D5D8DC;
borderWidth:2px;
backgroundColor:#D5D8DC;
position: absolute; 
top:40px;
`;
const InsideContainer = Styled.View`
flex:1;
flexDirection:row;
`;
const TxtInput = Styled.TextInput`
  fontSize: 14px;
  height:45px;
  borderWidth: 2px;
  borderColor: #D5D8DC;
  backgroundColor:#FDFEFE;
  justify-content:center;

`;
