// SearchPopupPage index.tsx

import React, {useEffect,useState} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView, Button} from 'react-native';
import {Styles, Color} from '~/@types/basic_style';
import Icon from 'react-native-vector-icons/Ionicons';
import {URL} from '~/@types/Gombang'
import {useNavigation} from '@react-navigation/native'
import {useDispatch} from 'react-redux'
import { clubIdAction } from '~/Store/actions';

const SearchPopupPage = ({route}:any) => {
  const navigation = useNavigation()
  const {clubId} = route.params
  const[empty,setEmpty] = useState(true)
  const[club,setClub] = useState<Array<any>>([])
  const axios = require('axios')
  const dispatch =useDispatch()
 const storeClubId=(inputId:string|null)=>{
    dispatch(clubIdAction(inputId))
  }
  useEffect(()=>{
    try{
      axios.get(`${URL}/club/${clubId}`)
      .then(async (res:any)=>{
        await setClub(res.data)
        console.log(res.data)
        setEmpty(false)
      })
    }catch(e){
        console.log('Failed to fetch the data from storage');
    }
    
  },[])
  return(
    <View  style={{flex: 1, backgroundColor: Color.w_color, padding:10}}>
      {/* 헤더 */}
        <View
          style={{
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <View style={{justifyContent: 'center'}}>
            <Text style={Styles.b_b_font}>{club.name}</Text>
          </View>
          <TouchableOpacity
            onPress={()=>{
              navigation.goBack()
              setEmpty(true)
            }}
            style={{position: 'absolute', right: 0}}>
            <Icon name="close" size={30} color={Color.g_color}></Icon>
          </TouchableOpacity>
        </View>
          {empty?(
            <View>
              <Text style={Styles.m_g_font}>준비중...</Text>
            </View>
          ):(
            <ScrollView>
              <View style={{marginVertical: 30}}>
                <Text style={Styles.m_b_font}>{club.text}</Text>
              </View>
              <View>
                  <Image
                  style={{width: '100%', height: undefined, aspectRatio: 1 / 1}}
                  source={{
                    uri: `${URL}/image/${club.poster}`,
                  }} />
              </View>
            </ScrollView>
          )}
        <View>
          <BoardButton
            onPressClub={() => {
              navigation.navigate('ClubStackNavi')
              storeClubId(clubId)
            }}
            onPressQA={() => navigation.navigate('SearchQAPage',{
              clubId:clubId
            })}
            onPressForm={() => navigation.navigate('ApplicationForm')}
          />
        </View>
    </View>
  )
};

// 하단 이동버튼
interface BoardButtonProps {
  onPressQA: () => void;
  onPressClub: () => void;
  onPressForm: () => void;
}
const BoardButton = ({
  onPressQA,
  onPressClub,
  onPressForm,
}: BoardButtonProps) => {
  return (
    <View
      style={{
        backgroundColor: Color.l_color,
        borderRadius: 30,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={onPressQA}>
        <Icon name="chatbox-outline" size={30} color={Color.g_color}></Icon>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressClub}>
        <View
          style={{
            backgroundColor: Color.w_color,
            borderRadius: 20,
            height: 40,
            width: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name="home-outline" size={30} color={Color.g_color}></Icon>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressForm}>
        <Icon name="pencil-outline" size={30} color={Color.g_color}></Icon>
      </TouchableOpacity>
    </View>
  );
};

export default SearchPopupPage;



        