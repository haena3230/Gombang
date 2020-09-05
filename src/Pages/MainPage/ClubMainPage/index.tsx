// ClubMainPage index.tsx
import React from 'react';
import {View, Text, Button} from 'react-native';

// stack navi를 위한 prop
import {StackNavigationProp} from '@react-navigation/stack';
import {ClubMainPageParamList} from '~/@types/navigation';
type NavigationProp = StackNavigationProp<
  ClubMainPageParamList,
  'ClubMainList'
>;
interface Props {
  navigation: NavigationProp;
}

// 동아리메인1
const ClubMainList = ({navigation}: Props) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>동아리 선택시 동아리메인1</Text>

      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ClubMainList;