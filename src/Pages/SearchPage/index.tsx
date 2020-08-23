// SearchPage index.tsx
// 메인2
import React from 'react';
import {Text, View, Button} from 'react-native';

// stack navi를 위한 prop
import {StackNavigationProp} from '@react-navigation/stack';
type NavigationProp = StackNavigationProp<SearchPageParamList, 'SearchPage'>;
interface Props {
  navigation: NavigationProp;
}

const SearchPage = ({navigation}: Props) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>SearchPage 카테고리 선택 메인2</Text>
      <Button
        title="카테고리 선택 메뉴"
        onPress={() => navigation.navigate('SearchCirclePage')}
      />
      <Button
        title="Go to Main"
        onPress={() => navigation.navigate('MainPage')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default SearchPage;
