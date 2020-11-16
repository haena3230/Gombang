// 프로그램정보페이지
import React from 'react';
import {View, Text} from 'react-native';
import {Styles,Color} from '~/@types/basic_style';


function ProgramInfoPage() {
 
  return (
    
    <View style={{flex:1, backgroundColor:Color.w_color}}>
        <View style={{margin:10}}>
            <Text style={Styles.m_g_font}>
                정보내용...
            </Text>
        </View>
    </View>
  );
}
export default ProgramInfoPage;
