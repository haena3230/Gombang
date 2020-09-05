// AlarmsPage index.tsx
// 메인4
import React from 'react';
import {Text, View, Button} from 'react-native';
import {AlarmsProps} from '~/@types/navigation';

const AlarmsPage = ({navigation}: AlarmsProps) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>AlarmsPage 메인4</Text>
      <Button
        title="Go to Main"
        onPress={() => navigation.navigate('MainPage')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default AlarmsPage;
