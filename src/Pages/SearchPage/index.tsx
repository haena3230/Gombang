// SearchPage index.tsx
// 메인2
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ScrollView, View, TouchableOpacity} from 'react-native';
import Styled from 'styled-components/native';
import Styles from '~/Components/InputText';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchPage = () => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white', margin: 10}}>
      <View style={{margin: 1}}>
        <BigImg
          source={{
            uri: 'https://via.placeholder.com/100/ABB2B9/ABB2B9.png',
          }}
        />
        <List listTitle={'죽전 캠퍼스'} />
      </View>
      <View style={{margin: 1}}>
        <BigImg
          source={{
            uri: 'https://via.placeholder.com/100/ABB2B9/ABB2B9.png',
          }}
        />
        <List listTitle={'천안 캠퍼스'} />
      </View>
    </ScrollView>
  );
};

// 리스트 컴포넌트
interface ListProps {
  listTitle: string;
}
const List = ({listTitle}: ListProps) => {
  const navigation = useNavigation();
  const [pick, setPick] = useState(false);
  const isPicked = pick;
  const onPress = () => {
    if (pick === false) {
      setPick(true);
    } else {
      setPick(false);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <ListContainer>
          <View>
            <Title>{listTitle}</Title>
          </View>
          <View>
            {isPicked ? (
              <Icon name="chevron-up-outline" size={18}></Icon>
            ) : (
              <Icon name="chevron-down-outline" size={18}></Icon>
            )}
          </View>
        </ListContainer>
      </TouchableOpacity>
      {isPicked ? (
        <View>
          <ListMember
            listValue={'중앙 동아리'}
            onPressNavi={() => navigation.navigate('SearchTopTabStack')}
          />
          <ListMember
            listValue={'일반 동아리'}
            onPressNavi={() => navigation.navigate('SearchTopTabStack')}
          />
          <ListMember
            listValue={'연합 동아리'}
            onPressNavi={() => navigation.navigate('SearchTopTabStack')}
          />
        </View>
      ) : (
        <View />
      )}
    </View>
  );
};

// 리스트멤버 컴포넌트
interface ListMemberProps {
  listValue: string;
  onPressNavi: () => void;
}
const ListMember = ({listValue, onPressNavi}: ListMemberProps) => {
  return (
    <ListContainer>
      <TouchableOpacity onPress={onPressNavi} style={{marginLeft: 10}}>
        <Text style={Styles.m_b_font}>{listValue}</Text>
      </TouchableOpacity>
    </ListContainer>
  );
};
export default SearchPage;

const BigImg = Styled.Image`
  width: 100%;
  height:150px;
`;
const ListContainer = Styled.View`
flex: 1;
flexDirection: row;
justifyContent: space-between;
alignItems: center;
height:50px;
borderBottomWidth:2px;
borderColor:#D5D8DC;
`;
