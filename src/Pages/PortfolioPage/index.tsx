// PortfolioPage index.tsx
// 메인4
import React from 'react';
import {Text, View, Button} from 'react-native';
import {PortfolioProps} from '~/@types/navigation';

const PortfolioPage = ({navigation}: PortfolioProps) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>PortfolioPage 메인5</Text>
      <Button
        title="폴더선택"
        onPress={() => navigation.navigate('PortfolioInPage')}
      />
      <Button
        title="Go to Main"
        onPress={() => navigation.navigate('MainPage')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default PortfolioPage;
