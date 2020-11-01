// 스타일 모음
import {StyleSheet} from 'react-native';

// 색상
export const Color = {
  //color
  w_color: '#FFFFFF',
  l_color: '#E5E8E8',
  g_color: '#808B96',
  b_color: '#000000',
  p_color: '#B9E8F3',
};

// 텍스트 스타일
export const Styles = StyleSheet.create({
  //s small font
  ss_w_font: {color: '#FFFFFF', fontSize: 10, fontWeight: 'bold'},
  ss_g_font: {color: '#808B96', fontSize: 10, fontWeight: 'bold'},
  ss_b_font: {color: '#000000', fontSize: 10, fontWeight: 'bold'},
  ss_p_font: {color: '#8CDFF3', fontSize: 10, fontWeight: 'bold'},
  //small font
  s_w_font: {color: '#FFFFFF', fontSize: 13, fontWeight: 'bold'},
  s_l_font: {color: '#CCD1D1', fontSize: 13, fontWeight: 'bold'},
  s_g_font: {color: '#808B96', fontSize: 13, fontWeight: 'bold'},
  s_b_font: {color: '#000000', fontSize: 13, fontWeight: 'bold'},

  // middle font
  m_w_font: {color: '#FFFFFF', fontSize: 15, fontWeight: 'bold'},
  m_l_font: {color: '#CCD1D1', fontSize: 15, fontWeight: 'bold'},
  m_g_font: {color: '#808B96', fontSize: 15, fontWeight: 'bold'},
  m_b_font: {color: '#000000', fontSize: 15, fontWeight: 'bold'},
  // big font
  b_w_font: {color: '#FFFFFF', fontSize: 18, fontWeight: 'bold'},
  b_l_font: {color: '#CCD1D1', fontSize: 18, fontWeight: 'bold'},
  b_g_font: {color: '#808B96', fontSize: 18, fontWeight: 'bold'},
  b_b_font: {color: '#000000', fontSize: 18, fontWeight: 'bold'},
});

 // 페이지 스타일
 export const Page=StyleSheet.create({
     page_container:{
        flex:1,
        backgroundColor:Color.w_color
    },
});
  
// 디바이스 맞춤 너비
import { Dimensions } from 'react-native';
// export const DHeight = Dimensions.get('window').height;
// export const DWidth = Dimensions.get('window').width;

export const DHeight = Dimensions.get('window').height;
export const DWidth = Dimensions.get('window').width;