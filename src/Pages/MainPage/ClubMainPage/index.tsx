// ClubMainPage index.tsx
import React from 'react';
import {ScrollView,View, Text, Image, TouchableOpacity} from 'react-native';
import { Color, DWidth } from '~/@types/basic_style';
import ClubTitle from '~/Components/Club/ClubTitle';
import ClubNotice from '~/Components/Club/ClubNotice';
import ClubFeed from '~/Components/Club/ClubFeed';
import { WriteBtn } from '~/Components/Button/WriteBtn';
import navigation, { useNavigation } from '@react-navigation/native';


// 동아리메인1
const ClubMainPage = () => {
  const navigation = useNavigation()
  return (
    <View  style={{flex: 1,backgroundColor:Color.l_color}}>
      <ScrollView>
        <Image 
          source = {{uri: 'https://via.placeholder.com/100/ABB2B9/ABB2B9.png',}}
          style={{width:'100%', aspectRatio:5/3}}
        />
        <ClubTitle />
        <View style={{marginTop:8}}>
          <ClubNotice />
        </View>
        {/* 피드들 */}
        <View style={{marginTop:8}}> 
          <ClubFeed />
        </View>
        <View style={{marginTop:8}}> 
          <ClubFeed />
        </View>
        <View style={{marginTop:8}}> 
          <ClubFeed />
        </View>
            
      
      </ScrollView>
      <TouchableOpacity 
          style={{position:'absolute', bottom:0,left:DWidth/2-50}}
          onPress={()=>navigation.navigate('ClubWritePage')}>
        <WriteBtn text={'글쓰기'} />
      </TouchableOpacity>
    </View>
  );
};

export default ClubMainPage;
