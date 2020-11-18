// 이벤트 페이지
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
  Button,
  TextInput
} from 'react-native';
import {Styles,Color} from '~/@types/basic_style';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';


const EventPage = () => {
  const navigation=useNavigation()
  return (
    <View>
      {/* 상단바 */}
      <View style={{backgroundColor:Color.w_color ,flexDirection:'row', height:60,alignItems:'center', justifyContent:'space-between', borderBottomWidth:1, borderBottomColor:Color.l_color}}>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity onPress={()=>navigation.goBack()} style={{marginHorizontal:20}}>
            <Icon name="arrow-back-outline" size={25} />  
          </TouchableOpacity>
          <Text style={Styles.b_b_font}>이벤트</Text>
        </View>
        <TouchableOpacity onPress={()=>Alert.alert('test')} style={{marginHorizontal:10}}>
          <Icon name="add-outline" size={25} />
        </TouchableOpacity>
      </View>
    <ScrollView style= {{ backgroundColor:Color.w_color}}>
      <View style={styles.bar}>
        <Text style={Styles.m_b_font}>진행 중인 이벤트</Text>
      </View>
      {/* 진행중 리스트 */}
      <View style={styles.List}>
        <Image source={{uri:'https://via.placeholder.com/100/F169B4/F169B4.png'}} style={{aspectRatio:40/9}}/>
      </View>
       <View style={styles.bar}>
        <Text style={Styles.m_b_font}>종료된 이벤트</Text>
      </View>
      {/* 끝난리스트 */}
      <View>
        <View style={styles.List}>
          <Image source={{uri:'https://via.placeholder.com/100/F169B4/F169B4.png'}} style={{aspectRatio:40/9}}/>
        </View>
        <View style={styles.List}>
          <Image source={{uri:'https://via.placeholder.com/100/F169B4/F169B4.png'}} style={{aspectRatio:40/9}}/>
        </View>
      </View>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  bar: {
    justifyContent:'center',
    height:35,
    padding:10,
  },
  List:{
    paddingVertical:5,
  }
 
});

export default EventPage


