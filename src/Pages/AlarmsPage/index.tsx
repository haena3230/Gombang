// AlarmsPage index.tsx
// 메인3
import React from 'react';
import {Text, View, Button} from 'react-native';

// stack navi를 위한 prop
import {StackNavigationProp} from '@react-navigation/stack';
type NavigationProp = StackNavigationProp<AlarmsPageParamList, 'AlarmsPage'>;
interface Props {
  navigation: NavigationProp;
}

const AlarmsPage = ({navigation}: Props) => {
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
