// SearchClubPage index.tsx (카테고리 선택시)
import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Styled from 'styled-components/native';
import {ClubInterface} from '~/@types/Gombang';
import Styles, {Color} from '~/Components/InputText';
import {useNavigation} from '@react-navigation/native';
import SearchPopupPage from './SearchPopupPage';
import SearchQAPage from './SearchPopupPage/SearchQAPage';
import {ApplicationForm} from './SearchPopupPage/ApplicationForm';

const URL = 'http://133.186.159.137:3000';

// 종류별 동아리 리스트
export const TestFirst = () => {
  const navigation = useNavigation();
  const [clubs, setClubs] = useState<ClubInterface[]>([]);
  const [emptyList, setEmptyList] = useState(false);
  // 모집중
  const [recruit, setRecruit] = useState(false);
  const isPickedR = recruit;
  const onPressR = () => {
    if (isPickedR === false) setRecruit(true);
    else setRecruit(false);
  };
  // 즐겨찾기
  const [fav, setFav] = useState(false);
  const isPickedF = fav;
  const onPressF = () => {
    if (isPickedF === false) setFav(true);
    else setFav(false);
  };
  // 동아리 홍보창 띄우기
  const [isPage, setIsPage] = useState(false);
  const popup = () => {
    setIsPage(!isPage);
  };
  // QA창 띄우기
  const [isQAPage, setIsQAPage] = useState(false);
  const QApopup = () => {
    setIsQAPage(true);
    console.log('test');
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
    try {
      (async () => {
        const response = await fetch(`${URL}/club`, {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
          },
        });

        const fav_clubs = await response.json();
        setClubs(fav_clubs);
        if (fav_clubs === null) {
          setEmptyList(true);
        }
      })();
    } catch (e) {
      console.log('Failed to fetch the data from storage');
    }
  }, []);

  const isEmpty = emptyList;

  if (isEmpty === false) {
    return (
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: 'white',
          padding: 10,
        }}>
        <Recruitment onPress={onPressR} isPicked={isPickedR} />
        {clubs.map((club) => {
          return (
            <TouchableOpacity onPress={popup}>
              <SearchPopupPage
                BackPress={popup}
                visible={isPage}
                onPressQA={QApopup}
                onPressForm={Formpopup}
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
                      key={club._id}
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

                  <FavoriteIcon onPress={onPressF} isPicked={isPickedF} />
                </ListItem>
                <HashtagContainer>
                  <HashTagIcon text={'해시태그'} />
                  <HashTagIcon text={'해시태그'} />
                  <HashTagIcon text={'해시태그'} />
                </HashtagContainer>
              </ListContainer>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  } else
    return (
      <InfoView>
        <Text style={Styles.m_g_font}>등록된 즐겨찾기 동아리가 없습니다.</Text>
        <Text style={Styles.m_g_font}>추가해 보세요!</Text>
      </InfoView>
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

// 해시태그 아이콘 컴포넌트
interface HashTagIconProps {
  text: string;
}
const HashTagIcon = ({text}: HashTagIconProps) => {
  return (
    <View
      style={{
        minWidth: 50,
        width: text.length * 10,
        height: 20,
        backgroundColor: '#808B96',
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 4,
      }}>
      <Text style={{color: '#FDFEFE', fontSize: 10, fontWeight: 'bold'}}>
        # {text}
      </Text>
    </View>
  );
};

// 즐겨찾기 선택 아이콘
interface FavoriteIconProps {
  onPress: () => void;
  isPicked: boolean;
}
const FavoriteIcon = ({onPress, isPicked}: FavoriteIconProps) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
      }}>
      <TouchableOpacity onPress={onPress}>
        {isPicked ? (
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
      <Text>테스트2</Text>
    </View>
  );
};

export const TestThird = () => {
  return (
    <View>
      <Text>테스트3</Text>
    </View>
  );
};

export const TestFourth = () => {
  return (
    <View>
      <Text>테스트4</Text>
    </View>
  );
};

export const TestFifth = () => {
  return (
    <View>
      <Text>테스트5</Text>
    </View>
  );
};
export const TestSixth = () => {
  return (
    <View>
      <Text>테스트6</Text>
    </View>
  );
};

const ListContainer = Styled.View`
  height: 80px;
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
  height:20px;
  alignItems:center;
`;
const InfoView = Styled.View`
flex:1;
backgroundColor:white;
alignItems:center;
justify-content:center;
`;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
