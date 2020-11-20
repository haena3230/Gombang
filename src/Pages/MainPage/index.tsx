// MainPage index.tsx
// 메인1

import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Styled from 'styled-components/native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage'
import {useDispatch} from 'react-redux'
import {URL} from '~/@types/Gombang';


// 컴포넌트
import FavoritesPage from './FavoritesPage';
import {Styles, Color} from '~/@types/basic_style';
import { clubIdAction, userIdAction,nicknameAction } from '~/Store/actions';

// main 페이지
export default function MainPage() {
   const navigation = useNavigation();
     return (
    <ScrollView style={{backgroundColor: 'white'}}>
      {/* 이벤트 슬라이드 */}
      <EventSlide />
      
      <View style={{margin: 5}}>
        {/* 동아리 리스트 */}
        <View>
          <WrapTitle>
            <Text style={Styles.b_b_font}>내 동아리 리스트</Text>
            <TouchableOpacity
              onPress={() => Alert.alert('준비중')}>
              <Text style={Styles.s_b_font}>목록 편집</Text>
            </TouchableOpacity>
          </WrapTitle>
          <View style={{margin: 7}}>
            <UsersClubList onPress={() => navigation.navigate('SearchPage')} />
          </View>
          <MakeClubButton />
        </View>
        {/* 일정 */}
        <View style={{margin: 5}}>
          <Text style={Styles.b_b_font}>일정</Text>
          <CalendarSchedule
            onPress={() => navigation.navigate('CalendarPage')}
          />
        </View>
        {/* 즐겨찾기 */}
        <View>
          <WrapTitle>
            <Text style={Styles.b_b_font}>즐겨찾기</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('FavoritesPage')}>
              <Text style={Styles.s_b_font}>모두 보기</Text>
            </TouchableOpacity>
          </WrapTitle>
          <FavoritesPage />
        </View>
      </View>
    </ScrollView>
  );
}

// 컴포넌트 1 이벤트 슬라이드
const EventSlide = () => {
  const navigation = useNavigation();
  return (
    <View>
      {/* 이벤트 슬라이드 */}
      <Swiper style={styles.wrapper}>
        <View style={styles.slide}>
          <TouchableOpacity onPress={() => navigation.navigate('EventDetailPage')}>
            <Image
              source={{
                uri: `${URL}/image/banner1605688464246.png`,
              }}
              style={styles.bannerImg}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.slide}>
          <TouchableOpacity onPress={() => null}>
            <Image
              source={{
                uri: 'https://via.placeholder.com/100/69ADF1/69ADF1.png',
              }}
              style={styles.bannerImg}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.slide}>
          <TouchableOpacity onPress={() =>null}>
            <Image
              source={{
                uri: 'https://via.placeholder.com/100/F169B4/F169B4.png',
              }}
              style={styles.bannerImg}
            />
          </TouchableOpacity>
        </View>
      </Swiper>
    </View>
  );
};

// 컴포넌트 2-1 내 동아리 리스트
interface UsersClubListProps {
  onPress: () => void;
}

const UsersClubList = ({onPress}: UsersClubListProps) => {
  const navigation = useNavigation()
  const [empty,setEmpty] = useState(true);
  const[clubs, setClubs] = useState<Array<any>>([]);  
  const dispatch = useDispatch()
  const storeUserId=(inputId:string|null)=>{
    dispatch(userIdAction(inputId))
  }
  const storeClubId=(inputId:string|null)=>{
    dispatch(clubIdAction(inputId))
  }
  const storeNickname=(inputId:string|null)=>{
    dispatch(nicknameAction(inputId))
  }

  useEffect(()=>{
        try { 
        (async () => {
          const userId = await AsyncStorage.getItem('UserId')
          storeUserId(userId)
          axios.get(`${URL}/user/${userId}`)
          .then((res:any)=>{
              if(res.status==200) {
                setEmpty(false)
                setClubs(res.data.signedClub)
                storeNickname(res.data.name)
              }
              else {
                setEmpty(true)
              } 
              
          })
        })();
         } catch (e) {
        console.log('Failed to fetch the data from storage');
         }
     }, [empty])
  const axios = require('axios');  

  return (
    <View>
    {empty?(
        <ScrollView horizontal={true}>
          {/* 추가버튼 */}
          <ClubListContainer>
            <TouchableOpacity onPress={onPress}>
              <ClubList>
                <Icon name="add-circle" size={30} color={Color.l_color} />
              </ClubList>
            </TouchableOpacity>
            <Text style={Styles.s_b_font}>동아리에 가입해보세요!</Text>
          </ClubListContainer>
        </ScrollView>
    ):(
        <ScrollView horizontal={true}>
          {clubs.map((club) => {
            return (
              // 동아리 이미지, 이름 불러오기 
              <ClubListContainer key={club.id.toString()}>
                <TouchableOpacity onPress={()=>{
                  storeClubId(club.id)
                  navigation.navigate('ClubStackNavi')
                }}>
                  <ClubList>
                    <Image
                      style={{width: 90, height: 90}}
                      source={{
                        uri: `${URL}/image/${club.image}`,
                      }}></Image>
                  </ClubList>
                </TouchableOpacity>
                <Text style={Styles.s_b_font}>{club.name}</Text>
              </ClubListContainer>
            );
          })}
          {/* 추가버튼 */}
          <ClubListContainer>
            <TouchableOpacity onPress={onPress}>
              <ClubList>
                <Icon name="add-circle" size={30} color={Color.l_color} />
              </ClubList>
            </TouchableOpacity>
            <Text style={Styles.s_b_font}>동아리에 가입해보세요!</Text>
          </ClubListContainer>
        </ScrollView>
    )}
    </View>
  )
}

// 컴포넌트 2-2 동아리 만들기 버튼
const MakeClubButton = () => {
  const navigation = useNavigation();
  return (
    <View style={{alignItems: 'flex-end'}}>
      <TouchableOpacity style={{flexDirection: 'row', alignItems:'center'}} onPress={()=>navigation.navigate('GenerateClubStackNavi')}>
          <Text style={Styles.ss_g_font}>직접 동아리를 만들어 보세요</Text>
          <Icon name="add-circle" size={18} color={Color.l_color}></Icon>
      </TouchableOpacity>
    </View>
  );
};

// 컴포넌트 3 일정 알림
interface CalendarScheduleProps {
  onPress: () => void;
}
const CalendarSchedule = ({onPress}: CalendarScheduleProps) => {
  return (
    <View style={{padding: 5}}>
      <ScheduleBox>
        <Text style={Styles.m_b_font}>이지스 OT</Text>
        <Text style={Styles.m_b_font}>D-5</Text>
      </ScheduleBox>
      <ScheduleBox onPress={onPress}>
        <Text style={Styles.m_g_font}>
          <Icon name="add-circle" size={17} color={Color.l_color} />
          일정 추가하기
        </Text>
      </ScheduleBox>
    </View>
  );
};

const WrapTitle = Styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin:5px;
`;

// 동아리 리스트
const ClubListContainer = Styled.View`
  margin: 5px;
`;
const ClubList = Styled.View`
  width: 100px;
  height: 100px;
  borderWidth: 1px;
  borderColor: #D5D8DC;
  justifyContent: center;
 alignItems: center;

`;

// 일정
const ScheduleBox = Styled.TouchableOpacity`
  borderWidth: 2px;
  borderColor: #D5D8DC;
  flexDirection: row;
  justifyContent: space-between;
  padding: 5px;
  borderRadius:10px;
  margin:2px;
`;

const styles = StyleSheet.create({
  // 이벤트배너
  wrapper: {
    height: 80,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
  },
  // 배너이미지
  bannerImg:{
    width:'100%',
    aspectRatio:40/9
  },
  // 알림일정
  scheduleListTop: {
    borderBottomWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  scheduleListMiddle: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  scheduleListBottom: {
    borderTopWidth: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
