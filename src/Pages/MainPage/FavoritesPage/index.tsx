// FavoritesPage index.tsx
import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

const fav_ClubData = [
  {
    id: '1',
    title: 'AA동아리',
    uri: 'https://via.placeholder.com/40/69ADF1/69ADF1.png',
  },
  {
    id: '2',
    title: 'BB동아리',
    uri: 'https://via.placeholder.com/40/69ADF1/69ADF1.png',
  },
  {
    id: '3',
    title: 'CC동아리',
    uri: 'https://via.placeholder.com/40/69ADF1/69ADF1.png',
  },
  {
    id: '4',
    title: 'DD동아리',
    uri: 'https://via.placeholder.com/40/69ADF1/69ADF1.png',
  },
  {
    id: '5',
    title: 'EE동아리',
    uri: 'https://via.placeholder.com/40/69ADF1/69ADF1.png',
  },
  {
    id: '6',
    title: 'FF동아리',
    uri: 'https://via.placeholder.com/40/69ADF1/69ADF1.png',
  },
  {
    id: '7',
    title: 'GG동아리',
    uri: 'https://via.placeholder.com/40/69ADF1/69ADF1.png',
  },
];

const Item = ({title}: any) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

// 메인 -> 즐겨찾기 동아리 목록 페이지
const FavoritesPage = () => {
  const renderItem = ({item}: any) => <Item title={item.title} />;
  return (
    <View style={{marginHorizontal: 10}}>
      <FlatList
        data={fav_ClubData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderTopWidth: 2,
    borderTopColor: '#D5D8DC',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default FavoritesPage;
