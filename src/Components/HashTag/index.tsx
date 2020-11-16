
// 해시태그 아이콘 컴포넌트

import React from 'react';
import {View,Text, TouchableOpacity} from 'react-native';
import {Styles} from '~/@types/basic_style';
import Plusbutton from '~/Assets/Plusbutton.svg';

interface HashTagIconProps {
  text: string;
}
export const HashTagIcon = ({text}: HashTagIconProps) => {
  return (
    <View
      style={{
        minWidth: 50,
        width: text.length * 15,
        height: 20,
        backgroundColor: '#808B96',
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 4,
      }}>
      <Text style={{color: '#FDFEFE', fontSize: 10, fontWeight: 'bold'}}>
        # {text}
      </Text>
    </View>
  );
};

// 해시태그 추가 버튼
interface AddHashTagButtonProps{
    onPress:()=>void;
}
export const AddHashTagButton=({onPress}:AddHashTagButtonProps)=>{
    return(
        <TouchableOpacity style={{flexDirection:'row',justifyContent:'center', alignItems:'center'}} onPress={onPress}>
            <Plusbutton width={15} height={15}/>
            <Text style={Styles.s_g_font}> 해시태그 추가</Text>
        </TouchableOpacity>
    )
}