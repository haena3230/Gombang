// MainPage index.tsx
// 메인1

import React, {useEffect, useState} from 'react';
import {MainProps} from '~/@types/navigation';
import {
  ScrollView,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import Styled from 'styled-components/native';
import Swiper from 'react-native-swiper';

// interface
import {ClubInterface} from '~/@types/Club';
import FavoritesPage from './FavoritesPage';
interface TextProp {
  color: string;
}
//카카오 로그인
//const kakaoLogin=require('./KakaoHelper');
//kakaoLogin.login();

// main 페이지 구성
const MainPage = ({navigation}: MainProps) => {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View>
        {/* 이벤트 슬라이드 */}
        <Swiper style={styles.wrapper}>
          <View style={styles.slide}>
            <TouchableOpacity onPress={() => navigation.navigate('EventPage')}>
              <BannerImage
                source={{
                  uri: 'https://via.placeholder.com/100/ABB2B9/ABB2B9.png',
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.slide}>
            <TouchableOpacity onPress={() => navigation.navigate('EventPage')}>
              <BannerImage
                source={{
                  uri: 'https://via.placeholder.com/100/69ADF1/69ADF1.png',
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.slide}>
            <TouchableOpacity onPress={() => navigation.navigate('EventPage')}>
              <BannerImage
                source={{
                  uri: 'https://via.placeholder.com/100/F169B4/F169B4.png',
                }}
              />
            </TouchableOpacity>
          </View>
        </Swiper>
        {/* 동아리 리스트 */}
        <View style={{margin: 5}}>
          <WrapTitle>
            <Title>내 동아리 리스트</Title>
            <TouchableOpacity onPress={() => navigation.navigate('EventPage')}>
              <SmallTitle color="">목록편집</SmallTitle>
            </TouchableOpacity>
          </WrapTitle>
          <UsersClubList />
        </View>
        {/* 일정 */}
        <View style={{margin: 5}}>
          <Title>일정</Title>
          <CalendarSchedule />
        </View>
        {/* 즐겨찾기 */}
        <View style={{margin: 5}}>
          <WrapTitle>
            <Title>즐겨찾기 </Title>
            <TouchableOpacity
              onPress={() => navigation.navigate('FavoritesPage')}>
              <SmallTitle color="">모두보기</SmallTitle>
            </TouchableOpacity>
          </WrapTitle>
          <FavoritesPage />
        </View>
      </View>
    </ScrollView>
  );
};

export default MainPage;

//구성요소

// 내 동아리 리스트
const UsersClubList = () => {
  const [clubs, setClubs] = useState<ClubInterface[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('http://49.50.174.166:3000/club', {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
        },
      });

      const clubs = await response.json();
      setClubs(clubs);
    })();
  }, []);

  return (
    <ScrollView horizontal={true}>
      {clubs.map((club) => {
        return (
          <View style={{margin: 7}}>
            <Image
              style={{width: 80, height: 80}}
              key={club._id}
              source={{
                uri: `http://49.50.174.166:3000/image/${club.image}`,
              }}></Image>
            <SmallTitle color="black">{club.name}</SmallTitle>
          </View>
        );
      })}
    </ScrollView>
  );
};

// 일정 알림
const CalendarSchedule = () => {
  return (
    <View style={{padding: 5}}>
      <View style={styles.scheduleListTop}>
        <Schedule>OO동아리 OT</Schedule>
        <Schedule>D-5</Schedule>
      </View>
      <View style={styles.scheduleListMiddle}>
        <Schedule>OO동아리 OT</Schedule>
        <Schedule>D-5</Schedule>
      </View>
      <View style={styles.scheduleListBottom}>
        <Schedule>OO동아리 OT</Schedule>
        <Schedule>D-5</Schedule>
      </View>
    </View>
  );
};

// 텍스트
const Title = Styled.Text`
  fontSize: 18px;
  margin: 5px;
  fontWeight:bold;
`;

const SmallTitle = Styled.Text`
  fontSize: 13px;
  fontWeight:bold;
  padding:1px;
  color: ${(props: TextProp) => (props.color ? props.color : 'gray')};
  marginRight:10px;
`;

const Schedule = Styled.Text`
  fontSize: 15px;
  fontWeight: bold;
`;

const WrapTitle = Styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

// 배너이미지
const BannerImage = Styled.Image`
 width:100%;
 height:80px;
                
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
  // 알림일정
  scheduleListTop: {
    borderWidth: 2,
    borderBottomWidth: 1,
    borderColor: '#D5D8DC',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scheduleListMiddle: {
    borderWidth: 2,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#D5D8DC',
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scheduleListBottom: {
    borderWidth: 2,
    borderTopWidth: 1,
    borderColor: '#D5D8DC',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
