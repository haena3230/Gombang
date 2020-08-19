// MemberListPage index.tsx
import React from 'react';
import {View, Text, Button} from 'react-native';

// 동아리 멤버 리스트 페이지 동아리메인4
function MemberListPage({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>동아리 멤버 리스트 페이지 동아리메인4</Text>
      <Button
        title="Go to Main"
        onPress={() => navigation.navigate('MainPage')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default MemberListPage;
