// FavoritesPage index.tsx
import React, {useState, useEffect} from 'react';
import {Image, View, Text} from 'react-native';
import Styled from 'styled-components/native';
// 컴포넌트
import {Styles} from '~/@types/basic_style';
import {URL} from '~/@types/Gombang';
import {useSelector} from 'react-redux'
// 메인 -> 즐겨찾기 동아리 목록 페이지
const FavoritesPage = () => {
  const [clubs, setClubs] = useState<Array<any>>([]);
  const [emptyList, setEmptyList] = useState(true);
  const axios = require('axios');  
  const userId =useSelector((state)=>state.login.userId)
  useEffect(()=>{
    try {
        console.log('fav')
        axios.get(`${URL}/user/${userId}`)
        .then((res:any)=>{
        if(res.data.favoriteClub===undefined) setEmptyList(true)
        else{
          setEmptyList(false)
          setClubs(res.data.favoriteClub)
        }
    })
  } catch (e) {
    console.log('Failed to fetch the data from storage');
    }
  },[])
  
  if (emptyList === false) {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        {clubs.map((club) => {
          return (
            <ListContainer key={club.id.toString()}>
              <Section>
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
                </Section>
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
  borderBottomWidth: 1px;
  borderColor: #D5D8DC;
  flexDirection: row;
  justify-content:space-between;
`;
const Section = Styled.View`
    flexDirection: row;
    alignItems:center;
`;
const ItemContainer = Styled.View`
  justify-content:center;
  margin:10px;
`;

const InfoView = Styled.View`
flex:1;
backgroundColor:white;
alignItems:center;
justify-content:center;
`;

export default FavoritesPage;
