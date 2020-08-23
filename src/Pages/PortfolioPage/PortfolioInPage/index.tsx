// PortfolioInPage index.tsx
// 포트폴리오 폴더 선택후
import React from 'react';
import {Text, View, Button} from 'react-native';

// stack navi를 위한 prop
import {StackNavigationProp} from '@react-navigation/stack';
type NavigationProp = StackNavigationProp<
  PortfolioInPageParamList,
  'PortfolioInPage'
>;
interface Props {
  navigation: NavigationProp;
}

const PortfolioInPage = ({navigation}: Props) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Portfolio 내부 Page</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default PortfolioInPage;
