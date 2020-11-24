// FavEditPage index.tsx
import React, {useState, useEffect} from 'react';
import {Image, View, Text} from 'react-native';
import Styled from 'styled-components/native';
import { useSelector } from 'react-redux';

// 컴포넌트
import {Styles} from '~/@types/basic_style';
import {URL} from '~/@types/Gombang'
import ConfirmModal from '~/Components/Modal/ConfirmModal'
import { TouchableOpacity } from 'react-native-gesture-handler';

// 메인 -> 즐겨찾기 동아리 목록 페이지
const FavEditPage = () => {
  const [clubs, setClubs] = useState<Array<any>>([]);
  const [emptyList, setEmptyList] = useState(true);
  const axios = require('axios'); 
  const userId = useSelector((state)=>state.login.userId) 
  // 삭제
  const [id,setId] = useState('')
  const[del,setDel] = useState(false)
  const onDel=()=>{
    axios.patch(`${URL}/user/${userId}/favorite_club_list`,{
      clubId:id
    })
    .then(()=>{
      setDel(!del)
    })
  }
  useEffect(() => {
    try {
      (async () => {
          await axios.get(`${URL}/user/${userId}`)
          .then((res:any)=>{
            if(res.data.favoriteClub===undefined) setEmptyList(true)
            else{
              setEmptyList(false)
              setClubs(res.data.favoriteClub)
            }
          })
      })()
    } catch (e) {
      console.log('Failed to fetch the data from storage');
    }
  }, [del]);


  if (emptyList === false) {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        {clubs.map((fav) => {
          return (
            <ListContainer key={fav.id}>
              <Section>
                <ItemContainer>
                  <Image
                    source={{
                      uri: `${URL}/image/${fav.image}`,
                    }}
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 30,
                    }}
                  />
                </ItemContainer>
                <ItemContainer>
                  <Text style={Styles.b_b_font}>{fav.name}</Text>
                </ItemContainer>
                </Section>
                <Section>
                  <ItemContainer>
                    <TouchableOpacity onPress={()=>{
                      setId(fav.id)
                      setDel(!del)
                    }}>
                      <Text style={Styles.m_g_font}>삭제</Text>
                    </TouchableOpacity>
                  </ItemContainer>
                </Section>
            </ListContainer>
          );
        })}
        {del?(
          <ConfirmModal isVisible={del} onBack={()=>setDel(!del)} onConfirm={onDel} text1={'삭제하시겠습니까?'} text2={''}/>
        ):(
          null
        )}
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
  width: 100%;
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

export default FavEditPage;
