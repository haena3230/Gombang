// FavoritesPage index.tsx
import React, {useState, useEffect} from 'react';
import {Image, View, FlatList, Text} from 'react-native';
import Styled from 'styled-components/native';
import {ClubInterface} from '~/@types/Club';

// 메인 -> 즐겨찾기 동아리 목록 페이지
const FavoritesPage = () => {
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
    <View style={{margin: 5}}>
      <FlatList
        data={clubs}
        keyExtractor={({_id}) => _id}
        renderItem={({item}) => <Item item={item} />}
      />
    </View>
  );
};

// 리스트에 들어갈 아이템들
function Item({item}: any) {
  return (
    <ListItem>
      <Image
        source={{uri: `http://49.50.174.166:3000/image/${item.image}`}}
        style={{width: 50, height: 50, borderRadius: 30}}
      />
      <View style={{justifyContent: 'center', margin: 10}}>
        <FavClubTitle>{item.name}</FavClubTitle>
      </View>
    </ListItem>
  );
}

const FavClubTitle = Styled.Text`
  fontWeight: bold;
  fontSize: 20px;
`;

const ListItem = Styled.View`
  width: 100%;
  flex: 1;
  flexDirection: row;
  alignContent:center;
  padding:5px;
  paddingHorizontal:10px;
  borderTopWidth:2px;
  borderColor: #D5D8DC;
`;

export default FavoritesPage;
