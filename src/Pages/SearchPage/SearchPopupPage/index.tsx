// SearchPopupPage index.tsx
// 메인2 카테고리 선택 -> 검색 -> 동아리팝업
import React from 'react';
import {Text, View, Button} from 'react-native';

// stack navi를 위한 prop
import {StackNavigationProp} from '@react-navigation/stack';
type NavigationProp = StackNavigationProp<
  SearchPopupPageParamList,
  'SearchPopupPage'
>;
interface Props {
  navigation: NavigationProp;
}

const SearchPopupPage = ({navigation}: Props) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>동아리 팝업 페이지</Text>
      <Button
        title="Go to Main"
        onPress={() => navigation.navigate('MainPage')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default SearchPopupPage;
