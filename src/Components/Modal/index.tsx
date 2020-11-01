// 모달 컴포넌트
import React from 'react';
import {View, TouchableOpacity, Text, Alert} from 'react-native';
import Modal from 'react-native-modal';
import Styled from 'styled-components/native';
import {Styles, Color} from '~/@types/basic_style';

// 즐겨찾기 페이지 모달 
interface FavModalProps {
  BackPress: () => void;
  visible: boolean;
  onPressEdit:()=>void;
}
function FavModal({BackPress, visible, onPressEdit}: FavModalProps) {

  return (
    <Modal
      isVisible={visible}
      animationIn={'slideInRight'}
      animationOut={'slideOutRight'}
      backdropOpacity={0}
      onBackdropPress={BackPress}>
      <View style={{position: 'absolute', top: 30, right: 0}}>
        <ModalContainer>
          <TouchableOpacity onPress={onPressEdit}>
            <Text style={Styles.m_b_font}>정렬편집</Text>
          </TouchableOpacity>
        </ModalContainer>
        <ModalContainer>
          <TouchableOpacity onPress={onPressEdit}>
            <Text style={Styles.m_b_font}>삭제하기</Text>
          </TouchableOpacity>
        </ModalContainer>
      </View>
    </Modal>
  );
}

const ModalContainer = Styled.View`
  width:100px;
  height:40px;
  borderColor:${Color.l_color};
  borderWidth:1px;
  backgroundColor:white;
  alignItems:center;
  justify-content:center;
`;
export default FavModal;

// 메뉴 두개 모달 
import {Menu,MenuOptions,MenuOption,MenuTrigger} from 'react-native-popup-menu';
import Icon from 'react-native-vector-icons/Ionicons';
interface TwoOpModalProps{
  fst_op?:string;
  snd_op?:string;
  onPressMenuM:()=>void;
  onPressMenuD:()=>void;
}
export const TwoOpModal=({fst_op,snd_op,onPressMenuM, onPressMenuD}:TwoOpModalProps)=>{
  return(
    <View  style={{padding:10}}>
      <Menu>
        <MenuTrigger>
          <Icon name="ellipsis-vertical-outline" size={20}/>
        </MenuTrigger>
      <MenuOptions>
        <MenuOption onSelect={onPressMenuM}>
          <Text style={Styles.m_b_font}>{fst_op}</Text>
        </MenuOption>
        <MenuOption onSelect={onPressMenuD} >
          <Text style={Styles.m_b_font}>{snd_op}</Text>
        </MenuOption>
      </MenuOptions>
      </Menu>
    </View>
  )
}