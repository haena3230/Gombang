// SearchCirclePage index.tsx
import React from 'react';
import {Text, View, Button} from 'react-native';

function SearchCirclePage({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>SearchCirclePage( 카테고리 선택 후)</Text>
      <Button
        title="Go to Main"
        onPress={() => navigation.navigate('MainPage')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default SearchCirclePage;
