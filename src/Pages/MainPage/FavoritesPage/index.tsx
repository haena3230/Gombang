// FavoritesPage index.tsx
import React, {useState, useEffect} from 'react';
import {Image, View, Text} from 'react-native';
import Styled from 'styled-components/native';
import {ClubInterface} from '~/@types/Gombang';
// 컴포넌트
import Styles from '~/Components/InputText';
const URL = 'http://133.186.159.137:3000';

// 메인 -> 즐겨찾기 동아리 목록 페이지
const FavoritesPage = () => {
  const [clubs, setClubs] = useState<ClubInterface[]>([]);
  const [emptyList, setEmptyList] = useState(false);

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
      <View style={{flex: 1, backgroundColor: 'white'}}>
        {clubs.map((club) => {
          return (
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
              </ListItem>
            </ListContainer>
          );
        })}
      </View>
    );
  } else
    return (
      <InfoView>
        <Text style={Styles.m_g_font}>등록된 즐겨찾기 동아리가 없습니다.</Text>
        <Text style={Styles.m_g_font}>추가해 보세요!</Text>
      </InfoView>
    );
};

const ListContainer = Styled.View`
  height: 65px;
  borderBottomWidth: 2px;
  borderColor: #D5D8DC;
  marginHorizontal: 15px;
`;
const ItemContainer = Styled.View`
  justify-content:center;
`;
const ListItem = Styled.View`
  width: 100%;
  flex: 1;
  flexDirection: row;
`;
const InfoView = Styled.View`
flex:1;
backgroundColor:white;
alignItems:center;
justify-content:center;
`;

export default FavoritesPage;
