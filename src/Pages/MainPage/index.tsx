// MainPage.tsx
import React from 'react';
import {View, Text, Button} from 'react-native';

// for navigator
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//import pages
import MyCirclePage from './MyCirclePage';

// main 페이지 구성
function MainPage({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>MainPage</Text>
      <Button
        title="Go to My Circles"
        onPress={() => navigation.navigate('MyCirclePage')}></Button>
    </View>
  );
}

// stack navi 생성
const Stack = createStackNavigator();

// main에서 클릭하면 stack으로 이동
function MainPageNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="MyCirclePage" component={MyCirclePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainPageNavigator;
