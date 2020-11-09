// 피드 사진 정렬
import React from 'react';
import {View,Image, StyleSheet} from 'react-native';

{/* api 연결 + 사진 있으면 보여주고 없으면 안보여주기*/}
const AlignPhoto = ()=>{
    return(
         <View style ={{flexDirection:'row', flexWrap:'wrap'}}>
          <Image
              style={Style.image}
              source={{
                uri: 'https://via.placeholder.com/100/F169B4/F169B4.png',
              }}
            />
              <Image
              style={Style.image}
              source={{
                uri: 'https://via.placeholder.com/100/F169B4/F169B4.png',
              }}
            />
      </View>
    );
}


const Style = StyleSheet.create({
 
  image:{
    width:150,
    height:150,
    marginLeft:10
  },

})

export default AlignPhoto;