// SearchPopupPage index.tsx

import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import {Styles, Color} from '~/@types/basic_style';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons';
import {URL} from '~/@types/Gombang'

interface SearchPopupPageProps {
  BackPress: () => void;
  visible: boolean;
  onPressQA: () => void;
  onPressForm: () => void;
  clubName:string;
  clubPostImg:string;
  clubText:string;
}
const SearchPopupPage = ({
  BackPress,
  visible,
  onPressQA,
  onPressForm,
  clubName,
  clubPostImg,
  clubText,
  
}: SearchPopupPageProps) => {
  return (
    <Modal
      onBackdropPress={BackPress}
      isVisible={visible}
      backdropOpacity={1}
      animationIn={'slideInUp'}
      hasBackdrop={true}
      backdropColor={Color.w_color}
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
            <Text style={Styles.b_b_font}>{clubName}</Text>
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
            <Text style={Styles.m_b_font}>{clubText}</Text>
          </View>
          {/* 동아리 홍보사진 */}
          <View>
            <Image
              style={{width: '100%', height: undefined, aspectRatio: 1 / 1}}
              source={{
                uri: `${URL}/image/${clubPostImg}`,
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
