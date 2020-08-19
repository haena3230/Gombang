// SearchPage index.tsx
// 메인2
import React from 'react';
import {Text, View, Button} from 'react-native';

function SearchPage({navigation}) {
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
}

export default SearchPage;
