// MainPage index.tsx
// 메인1

import React, {useEffect, useState} from 'react';
import {MainProps} from '~/@types/navigation';
import {ScrollView, View, TouchableOpacity, StyleSheet} from 'react-native';
import Styled from 'styled-components/native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Ionicons';

// interface
import {ClubInterface} from '~/@types/Gombang';

interface TextProp {
  color: string;
}
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
              <SmallTitle color="">목록 편집</SmallTitle>
            </TouchableOpacity>
          </WrapTitle>
          <View style={{margin: 7}}>{/* <UsersClubList /> */}</View>
        </View>
        {/* 일정 */}
        <View style={{margin: 5}}>
          <Title>일정</Title>
          {/* <CalendarSchedule /> */}
        </View>
        {/* 즐겨찾기 */}
        <View style={{margin: 5}}>
          <WrapTitle>
            <Title>즐겨찾기 </Title>
            <TouchableOpacity
              onPress={() => navigation.navigate('FavoritesPage')}>
              <SmallTitle color="">
                모두 보기
                <Icon name="chevron-forward-outline"></Icon>
              </SmallTitle>
            </TouchableOpacity>
          </WrapTitle>
          {/* <FavoritesPage /> */}
        </View>
      </View>
    </ScrollView>
  );
};

export default MainPage;

//구성요소

// // 내 동아리 리스트
const UsersClubList = ({navigation}: MainProps) => {
  const [clubs, setClubs] = useState<ClubInterface[]>([]);
  const onPress = () => navigation.navigate('SearchPage');
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
          <ClubListContainer>
            <ClubList>
              {/* <Image
                style={{width: 80, height: 80}}
                key={club._id}
                source={{
                  uri: `http://49.50.174.166:3000/image/${club.image}`,
                }}></Image> */}
            </ClubList>
            <SmallTitle color="#454545">{club.name}</SmallTitle>
          </ClubListContainer>
        );
      })}
      {/* 추가버튼 */}
      <ClubListContainer>
        <TouchableOpacity onPress={onPress}>
          <ClubList>
            <Icon name="add-circle" size={30} color="#999" />
          </ClubList>
        </TouchableOpacity>
        <SmallTitle color="#454545">동아리에 가입해보세요!</SmallTitle>
      </ClubListContainer>
    </ScrollView>
  );
};

// 일정 알림
const CalendarSchedule = ({navigation}) => {
  return (
    <View style={{padding: 5}}>
      <ScheduleBox>
        <Schedule color="">OO동아리 OT</Schedule>
        <Schedule color="">D-5</Schedule>
      </ScheduleBox>
      <ScheduleBox onPress={() => navigation.navigate('CalendarPage')}>
        <Schedule color="gray">
          <Icon name="add-circle" size={17} color="#999" />
          일정 추가하기
        </Schedule>
      </ScheduleBox>
    </View>
  );
};

// 텍스트
const fontColor = Styled.Text`
  color:#454545;
fontWeight:bold;
`;

const Title = Styled(fontColor)`
  fontSize: 18px;
  margin: 5px;  
`;

const SmallTitle = Styled.Text`
  fontSize: 13px;
  padding:1px;
  color: ${(props: TextProp) => (props.color ? props.color : 'gray')};
  marginRight:10px;
`;

const Schedule = Styled(fontColor)`
color: ${(props: TextProp) => (props.color ? props.color : '#454545')};
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
// 동아리 리스트
const ClubListContainer = Styled.View`
  margin: 5px;

`;
const ClubList = Styled.View`
  width: 90px;
  height: 90px;
  borderWidth: 2px;
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
