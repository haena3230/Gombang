// NotificationPage index.tsx
// 메인3
import React from 'react';
import {Text, View, Button} from 'react-native';

function NotificationPage({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>NotificationPage 메인3</Text>
      <Button
        title="Go to Main"
        onPress={() => navigation.navigate('MainPage')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default NotificationPage;
