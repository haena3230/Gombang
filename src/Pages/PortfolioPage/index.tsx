// PortfolioPage index.tsx
// 메인4
import React from 'react';
import {Text, View, Button} from 'react-native';

function PortfolioPage({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>PortfolioPage 메인4</Text>
      <Button
        title="Go to Main"
        onPress={() => navigation.navigate('MainPage')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default PortfolioPage;
