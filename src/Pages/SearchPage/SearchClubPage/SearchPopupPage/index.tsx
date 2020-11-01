// SearchPopupPage index.tsx

import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import Styles, {Color} from '~/Components/InputText';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons';

interface SearchPopupPageProps {
  BackPress: () => void;
  visible: boolean;
  onPressQA: () => void;
  onPressForm: () => void;
}
const SearchPopupPage = ({
  BackPress,
  visible,
  onPressQA,
  onPressForm,
}: SearchPopupPageProps) => {
  return (
    <Modal
      onBackdropPress={BackPress}
      isVisible={visible}
      backdropOpacity={1}
      animationIn={'slideInUp'}
      hasBackdrop={true}
      backdropColor={Color.w_color}
      // 안드로이드 백버튼
      // onBackButtonPress={() => null}
    >
      <View style={{flex: 1, backgroundColor: Color.w_color}}>
        {/* 헤더 */}
        <View
          style={{
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <View style={{justifyContent: 'center'}}>
            <Text style={Styles.b_b_font}>OO동아리</Text>
          </View>
          <TouchableOpacity
            onPress={BackPress}
            style={{position: 'absolute', right: 0}}>
            <Icon name="close" size={30} color={Color.g_color}></Icon>
          </TouchableOpacity>
        </View>
        <ScrollView>
          {/* 인사말 */}
          <View style={{marginVertical: 30}}>
            <Text style={Styles.m_b_font}>안녕하세요 OO동아리 입니다.</Text>
          </View>
          {/* 동아리 홍보사진 */}
          <View>
            <Image
              style={{width: '100%', height: undefined, aspectRatio: 1 / 1}}
              source={{
                uri: 'https://via.placeholder.com/100/ABB2B9/ABB2B9.png',
              }}></Image>
          </View>
        </ScrollView>
        <View>
          <BoardButton
            onPressClub={() => null}
            onPressQA={onPressQA}
            onPressForm={onPressForm}
          />
        </View>
      </View>
    </Modal>
  );
};

// 하단 이동버튼
interface BoardButtonProps {
  onPressQA: () => void;
  onPressClub: () => void;
  onPressForm: () => void;
}
const BoardButton = ({
  onPressQA,
  onPressClub,
  onPressForm,
}: BoardButtonProps) => {
  return (
    <View
      style={{
        backgroundColor: Color.l_color,
        borderRadius: 30,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={onPressQA}>
        <Icon name="chatbox-outline" size={30} color={Color.g_color}></Icon>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressClub}>
        <View
          style={{
            backgroundColor: Color.w_color,
            borderRadius: 20,
            height: 40,
            width: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name="home-outline" size={30} color={Color.g_color}></Icon>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressForm}>
        <Icon name="pencil-outline" size={30} color={Color.g_color}></Icon>
      </TouchableOpacity>
    </View>
  );
};

export default SearchPopupPage;
