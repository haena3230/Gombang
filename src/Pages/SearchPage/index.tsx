// SearchPage index.tsx
// 메인2
import React, {useState,useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ScrollView, View, Image, Alert,StyleSheet} from 'react-native';
import {Color} from '~/@types/basic_style';
import {Picker} from '@react-native-community/picker';

const SearchPage = () => {
  const [selectedValue, setSelectedValue] = useState<string | number>('picker');
  const [selectedValueC, setSelectedValueC] = useState<string | number>(
    'picker',
  );
  // 선택되면 이동
  const navigation = useNavigation();
  useEffect(()=>{
    setSelectedValue('죽전캠퍼스')
    setSelectedValueC('천안캠퍼스')
  },[selectedValue])
  

  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white', padding: 10}}>
      <View style={{margin: 1}}>
        <Image style={{height:200, aspectRatio:5/3}}
          source={require('~/Assets/Jukjeon.png')}  />
      </View>
      <View style={{margin: 5}}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue: React.SetStateAction<string | number>) => {
            setSelectedValue(itemValue);
            if(itemValue==='중앙동아리') navigation.navigate('SearchStackNavi');
            else Alert.alert('준비중입니다. 죽전캠퍼스 중앙동아리를 이용해주세요.') 
          }}
          mode={'dropdown'}
          style={{
            width: '100%',
            height: 40,
            color: Color.b_color,
          }}>
          <Picker.Item label="죽전 캠퍼스" value="죽전캠퍼스" />
          <Picker.Item label="중앙 동아리" value="중앙동아리" />
          <Picker.Item label="일반 동아리" value="일반동아리" />
          <Picker.Item label="연합 동아리" value="연합동아리" />
        </Picker>
      </View>
      <View style={{margin: 1}}>
        <Image style={{height:200, aspectRatio:5/3}}
        source={require('~/Assets/Cheonan.png')}
        />
      </View>
      <View style={{margin: 5}}>
        <Picker
          selectedValue={selectedValueC}
          onValueChange={(itemValue: React.SetStateAction<string | number>) => {
            setSelectedValueC(itemValue);
            Alert.alert('준비중입니다. 죽전캠퍼스 중앙동아리를 이용해주세요.')
          }}
          mode={'dropdown'}
          style={{
            width: '100%',
            height: 40,
            color: Color.b_color,
          }}>
          <Picker.Item label="천안 캠퍼스" value="천안캠퍼스" />
          <Picker.Item label="중앙 동아리" value="중앙동아리" />
          <Picker.Item label="일반 동아리" value="일반동아리" />
          <Picker.Item label="연합 동아리" value="연합동아리" />
        </Picker>
      </View>
    </ScrollView>
  );
};

export default SearchPage;

