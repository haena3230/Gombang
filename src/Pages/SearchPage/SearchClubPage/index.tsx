// SearchCirclePage index.tsx
import React from 'react';
import {Text, View, Button} from 'react-native';

// stack navi를 위한 prop
import {StackNavigationProp} from '@react-navigation/stack';
type NavigationProp = StackNavigationProp<
  SearchCirclePageParamList,
  'SearchCirclePage'
>;
interface Props {
  navigation: NavigationProp;
}

const SearchCirclePage = ({navigation}: Props) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>SearchCirclePage( 카테고리 선택 후)</Text>
      <Button
        title="동아리 선택"
        onPress={() => navigation.navigate('SearchPopupPage')}
      />
      <Button
        title="Go to Main"
        onPress={() => navigation.navigate('MainPage')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default SearchCirclePage;
