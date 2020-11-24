// 피드 사진 정렬
import React from 'react';
import {View,Image, StyleSheet} from 'react-native';
import {URL} from '~/@types/Gombang'

{/* api 연결 + 사진 있으면 보여주고 없으면 안보여주기*/}
interface AlignPhotoProps{
  image:string;
}
export const AlignPhotoOne = ({image}:AlignPhotoProps)=>{
    return(
        <View style ={{flexDirection:'row', flexWrap:'wrap'}}>
             <Image
                style={Style.imageOne}
                source={{
                  uri: `${URL}/image/${image}`,
                }}
              />
      </View>
    );
}


const Style = StyleSheet.create({
 
  imageOne:{
    width:'100%',
    height:50,
    aspectRatio:1,
  },

})