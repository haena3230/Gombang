// 큐앤에이 페이지

import React, {useState} from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {SearchQA} from './SearchQA';
import Styles, {Color} from '~/Components/InputText';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons';
interface SearchQAPageProps {
  BackPressQA: () => void;
  QAvisible: boolean;
}
const SearchQAPage = ({BackPressQA, QAvisible}: SearchQAPageProps) => {
  const [isListFirst, setIsListFirst] = useState(true);
  const [isListSecond, setIsListSecond] = useState(false);
  const [isListThird, setIsListThird] = useState(false);
  const onPressF = () => {
    setIsListFirst(true);
    setIsListSecond(false);
    setIsListThird(false);
  };
  const onPressS = () => {
    setIsListFirst(false);
    setIsListSecond(true);
    setIsListThird(false);
  };
  const onPressT = () => {
    setIsListFirst(false);
    setIsListSecond(false);
    setIsListThird(true);
  };

  return (
    <Modal
      onBackdropPress={BackPressQA}
      isVisible={QAvisible}
      backdropOpacity={1}
      animationIn={'slideInLeft'}
      animationOut={'slideOutLeft'}
      hasBackdrop={true}
      backdropColor={Color.w_color}
      // 안드로이드 백버튼
      // onBackButtonPress={() => null}
    >
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
          <Text style={Styles.b_b_font}>Q&A</Text>
        </View>
        <TouchableOpacity
          style={{position: 'absolute', left: 0}}
          onPress={BackPressQA}>
          <Icon
            name="arrow-back-outline"
            size={30}
            color={Color.g_color}></Icon>
        </TouchableOpacity>
      </View>
      {/* 정렬 */}
      <Listalign
        onPressF={onPressF}
        isPickedF={isListFirst}
        onPressS={onPressS}
        isPickedS={isListSecond}
        onPressT={onPressT}
        isPickedT={isListThird}
      />
      {/* 몸통 */}
      <View style={{flex: 1, backgroundColor: Color.w_color}}>
        <ScrollView>
          <View>
            <SearchQA />
            <SearchQA />
            <SearchQA />
            <SearchQA />
            <SearchQA />
          </View>
        </ScrollView>
        {/* 질문하기 */}
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <QButton />
        </View>
      </View>
    </Modal>
  );
};
// List정렬
interface ListalignProps {
  onPressF: () => void;
  onPressS: () => void;
  onPressT: () => void;
  isPickedF: boolean;
  isPickedS: boolean;
  isPickedT: boolean;
}
const Listalign = ({
  onPressF,
  onPressS,
  onPressT,
  isPickedF,
  isPickedS,
  isPickedT,
}: ListalignProps) => {
  // 내 질문 보기
  const [myQ, setMyQ] = useState(true);
  const isMyQ = myQ;
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingVertical: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 40,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon name="checkmark-outline" size={15}></Icon>
        <TouchableOpacity onPress={onPressF} style={{margin: 3}}>
          {isPickedF ? (
            <Text style={Styles.s_b_font}>전체</Text>
          ) : (
            <Text style={Styles.s_g_font}>전체</Text>
          )}
        </TouchableOpacity>
        <Text style={Styles.m_g_font}>|</Text>
        <TouchableOpacity onPress={onPressS} style={{margin: 3}}>
          {isPickedS ? (
            <Text style={Styles.s_b_font}>답변완료</Text>
          ) : (
            <Text style={Styles.s_g_font}>답변완료</Text>
          )}
        </TouchableOpacity>
        <Text style={Styles.m_g_font}>|</Text>
        <TouchableOpacity onPress={onPressT} style={{margin: 3}}>
          {isPickedT ? (
            <Text style={Styles.s_b_font}>답변대기중</Text>
          ) : (
            <Text style={Styles.s_g_font}>답변대기중</Text>
          )}
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={Styles.s_b_font}>내 질문 보기</Text>
        {isMyQ ? (
          <ONButton onPress={() => setMyQ(false)} />
        ) : (
          <OFFButton onPress={() => setMyQ(true)} />
        )}
      </View>
    </View>
  );
};

// off버튼
interface OFFButtonProps {
  onPress: () => void;
}
const OFFButton = ({onPress}: OFFButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          height: 18,
          width: 40,
          padding: 3,
          backgroundColor: Color.l_color,
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: 10,
          marginLeft: 5,
        }}>
        <View
          style={{
            height: 12,
            width: 12,
            borderRadius: 10,
            backgroundColor: Color.w_color,
            marginRight: 2,
          }}></View>
        <Text style={Styles.ss_w_font}>OFF</Text>
      </View>
    </TouchableOpacity>
  );
};
// onbutton
interface ONButtonProps {
  onPress: () => void;
}
const ONButton = ({onPress}: ONButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          height: 18,
          width: 40,
          backgroundColor: '#15FC30',
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: 10,
          justifyContent: 'space-between',
          marginLeft: 5,
          padding: 3,
          paddingLeft: 5,
        }}>
        <Text style={Styles.ss_w_font}>ON</Text>
        <View
          style={{
            height: 12,
            width: 12,
            borderRadius: 10,
            backgroundColor: Color.w_color,
          }}></View>
      </View>
    </TouchableOpacity>
  );
};

// 하단 질문하기 버튼
const QButton = () => {
  return (
    <TouchableOpacity onPress={() => null}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: Color.l_color,
          height: 30,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 15,
          borderRadius: 30,
          borderWidth: 2,
          borderColor: Color.b_color,
        }}>
        <Icon name="pencil-outline" size={20} color={Color.g_color}></Icon>
        <Text style={Styles.m_b_font}>질문하기</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SearchQAPage;
