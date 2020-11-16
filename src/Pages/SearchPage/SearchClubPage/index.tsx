// SearchClubPage index.tsx (카테고리 선택시)
import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Styled from 'styled-components/native';
import {Styles, Color} from '~/@types/basic_style';
import {useNavigation} from '@react-navigation/native';
import SearchPopupPage from './SearchPopupPage';
import SearchQAPage from './SearchPopupPage/SearchQAPage';
import {ApplicationForm} from './SearchPopupPage/ApplicationForm';
import {HashTagIcon} from '~/Components/HashTag';
import AsyncStorage from '@react-native-community/async-storage'

import {URL} from '~/@types/Gombang'



// 종류별 동아리 리스트
export const TestFirst = () => {
  const axios = require('axios')
  const navigation = useNavigation();
  const [clubs, setClubs] = useState<Array<any>>([]);
  const [emptyList, setEmptyList] = useState(false);
  // 모집중
  const [recruitBtn, setRecruitBtn] = useState(false);
  const onPressR = () => {
    if (recruitBtn === false) setRecruitBtn(true);
    else setRecruitBtn(false);
  };
  // 즐겨찾기 
  const [userId,setUserId] = useState<string|null>('')
  
  
  // 동아리 홍보창 띄우기
  const [isPage, setIsPage] = useState(false);
  const popup = () => {
    setIsPage(!isPage);
  };
  // QA창 띄우기
  const [isQAPage, setIsQAPage] = useState(false);
  const QApopup = () => {
    setIsQAPage(true);
  };
  // QA창 끄기
  const QAdown = () => {
    setIsQAPage(false);
    setIsPage(true);
  };
  // 동아리 신청서 창 띄우기
  const [isForm, setIsForm] = useState(false);
  const Formpopup = () => {
    setIsForm(true);
  };
  // 동아리 신청서 창 끄기
  const Formdown = () => {
    setIsForm(false);
    setIsPage(true);
  };
  useEffect(() => {
    AsyncStorage.getItem('UserId').then((val)=>setUserId(val))
    try {
      (async () => {
        await axios.get(`${URL}/club`)
        .then((response:any)=>{
            setClubs(response.data); 
            if (response.status === 204) {
              setEmptyList(true);
             }
        })
      })();
    } catch (e) {
      console.log('Failed to fetch the data from storage');
    }
  }, []);

  const isEmpty = emptyList;

    return (
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: 'white',
          padding: 10,
        }}>
        <Recruitment onPress={onPressR} isPicked={recruitBtn} />
        {/* 데이터 없을때 */}
        {isEmpty?(
          <InfoView>
           <Text style={Styles.m_g_font}>데이터 준비중...</Text>
          </InfoView>
        ):(
          clubs.map((club) => {
          return (
            <TouchableOpacity onPress={popup}  key={JSON.stringify(club.id)}>
              {/* 모집중 버튼 눌렀을때 */}
              {recruitBtn?(
                <View>
                  <SearchPopupPage
                    BackPress={popup}
                    visible={isPage}
                    onPressQA={QApopup}
                    onPressForm={Formpopup}
                    clubName={club.name}
                    clubPostImg={club.image}
                    clubText={club.text}
                  />
                  <SearchQAPage BackPressQA={QAdown} QAvisible={isQAPage} />
                  <ApplicationForm BackPressForm={Formdown} Formvisible={isForm} />
                  {club.recruitment===1?(
                      <ListContainer>
                        <ListItem>
                          <ItemContainer>
                            <Image
                              source={{
                                uri: `${URL}/image/${club.image}`,
                              }}
                              style={{
                                width: 50,
                                height: 50,
                                borderRadius: 30,
                              }}
                            />
                          </ItemContainer>
                          <ItemContainer>
                            <Text style={Styles.b_b_font}>{club.name}</Text>
                          </ItemContainer>
                          <ItemContainer>
                            <RecruitmentIcon />
                          </ItemContainer>
                          <FavoriteIcon userId={userId} clubId={club.id}/>
                        </ListItem>
                      {club.hashtags.map((tag:any)=>{
                        return(
                        <HashtagContainer key = {tag.hashtagId.toString()}>
                          <HashTagIcon text={tag.hashtag} />
                        </HashtagContainer>
                        )
                      })}
                    </ListContainer>
                  ):(
                    null
                  )}
              </View>
              ):(
                // 평상시
                <View>
                  <SearchPopupPage
                    BackPress={popup}
                    visible={isPage}
                    onPressQA={QApopup}
                    onPressForm={Formpopup}
                    clubName={club.name}
                    clubPostImg={club.image}
                    clubText={club.text}
                  />
                  <SearchQAPage BackPressQA={QAdown} QAvisible={isQAPage} />
                  <ApplicationForm BackPressForm={Formdown} Formvisible={isForm} />
               <ListContainer>
                  <ListItem>
                    <ItemContainer>
                      <Image
                        source={{
                          uri: `${URL}/image/${club.image}`,
                        }}
                        style={{
                          width: 50,
                          height: 50,
                          borderRadius: 30,
                        }}
                      />
                    </ItemContainer>
                    <ItemContainer>
                      <Text style={Styles.b_b_font}>{club.name}</Text>
                    </ItemContainer>
                    <ItemContainer>
                      {/* 모집중일때만 모집중 아이콘 */}
                      {club.recruitment===1?(
                        <RecruitmentIcon />
                      ):(
                        null
                      )}
                    </ItemContainer>
                    <FavoriteIcon userId={userId} clubId={club.id} />
                  </ListItem>
                    {club.hashtags.map((tag:any)=>{
                      return(
                      <HashtagContainer key = {tag.hashtagId.toString()}>
                        <HashTagIcon text={tag.hashtag} />
                      </HashtagContainer>
                      )
                    })}
                </ListContainer>
                </View>
              )}
              </TouchableOpacity>
          );
        })
        )}
      </ScrollView>
    );

};

// 모집중 컴포넌트
interface recruitProps {
  onPress: () => void;
  isPicked: boolean;
}
const Recruitment = ({onPress, isPicked}: recruitProps) => {
  return (
    <View
      style={{
        margin: 10,
        alignItems: 'flex-end',
      }}>
      <TouchableOpacity onPress={onPress}>
        <Text style={Styles.s_b_font}>
          모집중
          {isPicked ? (
            <Icon name="checkbox-outline" size={15} color={'black'}></Icon>
          ) : (
            <Icon name="square-outline" size={15} color={'black'}></Icon>
          )}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// 모집중 아이콘 컴포넌트
const RecruitmentIcon = () => {
  return (
    <View
      style={{
        width: 50,
        height: 20,
        backgroundColor: '#D5D8DC',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 10, fontWeight: 'bold'}}>모집중</Text>
    </View>
  );
};

// 즐겨찾기 선택 아이콘
interface FavoriteIconProps {
  userId:string;
  clubId:string;

}
const FavoriteIcon = ({userId,clubId}:FavoriteIconProps) => {
  const [fav, setFav] = useState(false);
  const axios=require('axios')
  const onPress=()=>{
    axios.patch(`${URL}/user/${userId}/favorite_club_list`,{
      clubId:clubId
    })
    .then((res: any)=>{
      console.log(res.data)
      if(res.data===true)  setFav(true)
      else if(res.data ===false) setFav(false)
    })
  }
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
      }}>
      <TouchableOpacity onPress={onPress}>
        {fav ? (
          <Icon name="star" size={20} color={'#FCF415'}></Icon>
        ) : (
          <Icon name="star-outline" size={20} color={Color.b_color}></Icon>
        )}
      </TouchableOpacity>
    </View>
  );
};

export const TestSecond = () => {
  return (
    <View>
      <Text>준비중...</Text>
    </View>
  );
};

export const TestThird = () => {
  return (
    <View>
      <Text>준비중...</Text>
    </View>
  );
};

export const TestFourth = () => {
  return (
    <View>
      <Text>준비중...</Text>
    </View>
  );
};

export const TestFifth = () => {
  return (
    <View>
      <Text>준비중...</Text>
    </View>
  );
};
export const TestSixth = () => {
  return (
    <View>
      <Text>준비중...</Text>
    </View>
  );
};

const ListContainer = Styled.View`
  paddingVertical:10px;
  borderBottomWidth: 1px;
  borderColor: ${Color.l_color};
  marginHorizontal: 15px;
`;
const ItemContainer = Styled.View`
justify-content:center;
alignItems:center;
marginHorizontal:8px;
`;
const ListItem = Styled.View`
  width: 100%;
  flex: 1;
  flexDirection: row;
`;
const HashtagContainer = Styled.View`
  flex: 1;
  flexDirection: row;
  flexWrap: wrap;
  height:20px;
  alignItems:center;
  marginVertical:5px;
`;
const InfoView = Styled.View`
alignItems:center;
justify-content:center;
`;
