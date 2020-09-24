// 즐겨찾기 페이지 모달 메뉴
import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import Styled from 'styled-components/native';
import {MiddleTxtB} from '~/Components/InputText';

interface FavModalProps {
  BackPress: () => void;
  onPress: () => void;
  visible: boolean;
}
function FavModal({BackPress, onPress, visible}: FavModalProps) {
  return (
    <Modal
      isVisible={visible}
      animationIn={'slideInRight'}
      animationOut={'slideOutRight'}
      backdropOpacity={0}
      onBackdropPress={BackPress}>
      <View style={{position: 'absolute', top: 30, right: 0}}>
        <ModalContainer>
          <TouchableOpacity onPress={onPress}>
            <MiddleTxtB>정렬편집</MiddleTxtB>
          </TouchableOpacity>
        </ModalContainer>
        <ModalContainer>
          <TouchableOpacity onPress={onPress}>
            <MiddleTxtB>삭제하기</MiddleTxtB>
          </TouchableOpacity>
        </ModalContainer>
      </View>
    </Modal>
  );
}
import {l_g_color} from '~/Components/InputText';
const ModalContainer = Styled.View`
  width:100px;
  height:40px;
  borderColor:${l_g_color};
  borderWidth:1px;
  backgroundColor:white;
  alignItems:center;
  justify-content:center;
`;
export default FavModal;
