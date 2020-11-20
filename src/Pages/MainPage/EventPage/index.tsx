// 이벤트 페이지
import React,{useEffect,useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Styles,Color} from '~/@types/basic_style';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {URL} from '~/@types/Gombang'

const EventPage = () => {
  const axios = require('axios')
  const [eventList ,setEventList] = useState<Array<any>>([])
  useEffect(()=>{
    try{
      axios.get(`${URL}/post/event`)
      .then((res:any)=>{
        console.log(res.data) 
        setEventList(res.data)
      })
    }catch(e){  
      console.log('err')
    }
  },[])
  const navigation=useNavigation()
  return (
    <View style={{flex:1,backgroundColor:Color.w_color}}>
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
        {eventList.map((event)=>{
          return(
            <TouchableOpacity onPress={()=>navigation.navigate('EventDetailPage')} key = {event.id.toString()}>
              <Image source={{uri:`${URL}/image/${event.banner}`}} style={{aspectRatio:40/9}}/>
            </TouchableOpacity>
          )
        })}  
      </View>
       <View style={styles.bar}>
        <Text style={Styles.m_b_font}>종료된 이벤트</Text>
      </View>
      {/* 끝난리스트 */}
      <View>
        
      
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


