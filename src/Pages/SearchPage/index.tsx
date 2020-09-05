// SearchPage index.tsx
// 메인2
import React, {useState} from 'react';
import {View} from 'react-native';
import {Picker} from '@react-native-community/picker';
import Styled from 'styled-components/native';
import {SearchProps} from '~/@types/navigation';

const SearchPage = ({navigation}: SearchProps) => {
  const [select, setSelect] = useState('java');
  return (
    <View>
      <View style={{alignItems: 'center', marginHorizontal: 10}}>
        <BigImg
          source={{
            uri: 'https://via.placeholder.com/100/ABB2B9/ABB2B9.png',
          }}
        />
      </View>
      <Picker
        selectedValue={select}
        style={{height: 50, width: 150}}
        onValueChange={(itemValue, itemIndex) => setSelect(itemValue)}>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </View>
  );
};
export default SearchPage;

const BigImg = Styled.Image`
  width: 100%;
  height:150px;
`;
