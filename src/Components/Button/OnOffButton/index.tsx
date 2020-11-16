import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Styles,Color} from '~/@types/basic_style';
// off버튼
interface OFFButtonProps {
  onPress: () => void;
}
export const OFFButton = ({onPress}: OFFButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          height: 18,
          width: 40,
          padding: 3,
          backgroundColor: Color.l_color,
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: 10,
          marginLeft: 5,
        }}>
        <View
          style={{
            height: 12,
            width: 12,
            borderRadius: 10,
            backgroundColor: Color.w_color,
            marginRight: 2,
          }}></View>
        <Text style={Styles.ss_w_font}>OFF</Text>
      </View>
    </TouchableOpacity>
  );
};
// onbutton
interface ONButtonProps {
  onPress: () => void;
}
export const ONButton = ({onPress}: ONButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          height: 18,
          width: 40,
          backgroundColor: '#15FC30',
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: 10,
          justifyContent: 'space-between',
          marginLeft: 5,
          padding: 3,
          paddingLeft: 5,
        }}>
        <Text style={Styles.ss_w_font}>ON</Text>
        <View
          style={{
            height: 12,
            width: 12,
            borderRadius: 10,
            backgroundColor: Color.w_color,
          }}></View>
      </View>
    </TouchableOpacity>
  );
};