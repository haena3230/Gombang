// SearchPage index.tsx
// 메인2
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ScrollView, View, Image} from 'react-native';
import Styled from 'styled-components/native';
import {Color} from '~/@types/basic_style';
import {Picker} from '@react-native-community/picker';

const SearchPage = () => {
  const [selectedValue, setSelectedValue] = useState<string | number>('picker');
  const [selectedValueC, setSelectedValueC] = useState<string | number>(
    'picker',
  );
  // 선택되면 이동
  const navigation = useNavigation();

  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white', padding: 10}}>
      <View style={{margin: 1}}>
        <BigImg
          source={{
            uri: 'https://via.placeholder.com/100/ABB2B9/ABB2B9.png',
          }}
        />
      </View>
      <View style={{margin: 5}}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue: React.SetStateAction<string | number>) => {
            setSelectedValue(itemValue);
            navigation.navigate('SearchStackNavi');
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
        <BigImg
          source={{
            uri: 'https://via.placeholder.com/100/ABB2B9/ABB2B9.png',
          }}
        />
      </View>
      <View style={{margin: 5}}>
        <Picker
          selectedValue={selectedValueC}
          onValueChange={(itemValue: React.SetStateAction<string | number>) => {
            setSelectedValueC(itemValue);
            navigation.navigate('SearchStackNavi');
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

const BigImg = Styled.Image`
  width: 100%;
  height:150px;
`;
