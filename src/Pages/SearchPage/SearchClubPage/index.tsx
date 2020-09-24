// SearchClubPage index.tsx (카테고리 선택시)
import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Styled from 'styled-components/native';
import {ClubInterface} from '~/@types/Gombang';
import Styles from '~/Components/InputText';
const URL = 'http://133.186.159.137:3000';
// 리스트
export const TestFirst = () => {
  const [clubData, setClubData] = useState<ClubInterface[]>([]);
  const [emptyList, setEmptyList] = useState(false);
  const isEmpty = emptyList;

  useEffect(() => {
    try {
      (async () => {
        const response = await fetch(`${URL}}/club`, {
          method: 'GET',
          headers: {
            'Content-type': 'applycation/json',
          },
        });
        const search_clubs = await response.json();
        setClubData(search_clubs);
        if (search_clubs === null) {
          setEmptyList(true);
        }
      })();
    } catch (e) {
      Alert.alert('데이터 가져오다 에러발생');
    }
  }, []);
  const [recruit, setRecruit] = useState(false);
  const isPicked = recruit;
  const onPressR = () => {
    if (isPicked === false) setRecruit(true);
    else setRecruit(false);
  };
  if (isEmpty === false) {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <RecruitmentIcon />
        <HashTagIcon text={'해시태그'} />
        <Recrutment onPress={onPressR} isPicked={recruit} />
        {clubData.map((club) => {
          return (
            <ListContainer>
              <ListItem>
                <ItemContainer>
                  <Image
                    source={{
                      uri: `http://49.50.174.166:3000/image/${club.image}`,
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
                  <Text style={Styles.m_b_font}>{club.name}</Text>
                </ItemContainer>
              </ListItem>
            </ListContainer>
          );
        })}
      </View>
    );
  } else
    return (
      <InfoView>
        <Text style={Styles.m_g_font}>동아리가 없습니다.</Text>
      </InfoView>
    );
};

// 모집중 컴포넌트
interface recruitProps {
  onPress: () => void;
  isPicked: boolean;
}
const Recrutment = ({onPress, isPicked}: recruitProps) => {
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
      }}>
      <Text style={{color: '#FDFEFE', fontSize: 10, fontWeight: 'bold'}}>
        # {text}
      </Text>
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
  height: 100px;
  borderTopWidth: 2px;
  borderColor: #D5D8DC;
  marginHorizontal: 15px;
`;
const ItemContainer = Styled.View`
justify-content:center;
alignItems:center;
`;
const ListItem = Styled.View`
  width: 100%;
  flex: 1;
  flexDirection: row;z
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
