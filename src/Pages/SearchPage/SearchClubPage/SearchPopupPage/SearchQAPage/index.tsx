// 큐앤에이 페이지

import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, ScrollView, Button} from 'react-native';
import {SearchQAAnswered,SearchQA} from './SearchQA';
import {Styles, Color,Page} from '~/@types/basic_style';
import Icon from 'react-native-vector-icons/Ionicons';
import {ONButton,OFFButton} from '~/Components/Button/OnOffButton';
import { WriteBtn } from '~/Components/Button/WriteBtn';
import {URL} from '~/@types/Gombang'
import  {useSelector} from 'react-redux'
import { useNavigation } from '@react-navigation/native';
const SearchQAPage = ({route}:any) => {
  // 정렬
  const [isListFirst, setIsListFirst] = useState(true);
  const [isListSecond, setIsListSecond] = useState(false);
  const [isListThird, setIsListThird] = useState(false);
  const onPressF = () => {
    setIsListFirst(true);
    setIsListSecond(false);
    setIsListThird(false);
  };
  const onPressS = () => {
    setIsListFirst(false);
    setIsListSecond(true);
    setIsListThird(false);
  };
  const onPressT = () => {
    setIsListFirst(false);
    setIsListSecond(false);
    setIsListThird(true);
  };
  // 데이터 연결
  const userId = useSelector((state)=>state.login.userId)
  const {clubId} = route.params
  const axios=require('axios')
  const[empty,setEmpty] = useState(true)
  const[list,setList] = useState<Array<any>>([])
  useEffect(()=>{
    try{
      axios.get(`${URL}/qna/${clubId}`)
      .then((res:any)=>{
        if(res.status===200) {
          setEmpty(false) 
          setList(res.data)
        }
      })
    }catch(e){
     console.log('Failed to fetch the data from storage'); 
    }
  },[list])

  const navigation =useNavigation()
  return (
    <View style={{backgroundColor:Color.w_color,flex:1,padding:10}}>
      {/* 정렬 */}
      <Listalign
        onPressF={onPressF}
        isPickedF={isListFirst}
        onPressS={onPressS}
        isPickedS={isListSecond}
        onPressT={onPressT}
        isPickedT={isListThird}
      />
      {/* <Button title={'test'} onPress={onPress} /> */}
      {/* 몸통 */}
      {empty?(null):(
        <ScrollView>
          {list.map((qna)=>{
            return(
              <View>
                {qna.Answer===null?(
                  // 답변없는거
                  <SearchQA key = {qna.id.toString()} 
                    question={qna.question} 
                    userId={qna.User.name} 
                    createdAt={qna.createdAt}
                    qId={qna.id}
                   />
                ):(
                  // 답변 있는거
                  <SearchQAAnswered key = {qna.id.toString()} 
                    question={qna.question} 
                    userId={qna.User.name} 
                    createdAt={qna.createdAt}
                    answerState={qna.Answer}
                    />
                )}
              
              </View>
            ) 
          })}
        </ScrollView>
      )}
        {/* 질문하기 */}
        <TouchableOpacity
          style={{
            flex:1,
            position:'absolute',
            bottom:10,
            left:130,

          }}
          onPress={()=>{
            navigation.navigate('SearchQPage',{
              clubId:clubId,
              userId:userId
            })
          }}>
          <WriteBtn text={'질문하기'} />
        </TouchableOpacity>
      
      </View>
  );
};
// List정렬
interface ListalignProps {
  onPressF: () => void;
  onPressS: () => void;
  onPressT: () => void;
  isPickedF: boolean;
  isPickedS: boolean;
  isPickedT: boolean;
}
const Listalign = ({
  onPressF,
  onPressS,
  onPressT,
  isPickedF,
  isPickedS,
  isPickedT,
}: ListalignProps) => {
  // 내 질문 보기
  const [myQ, setMyQ] = useState(true);
  const isMyQ = myQ;
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingVertical: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 40,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon name="checkmark-outline" size={15}></Icon>
        <TouchableOpacity onPress={onPressF} style={{margin: 3}}>
          {isPickedF ? (
            <Text style={Styles.s_b_font}>전체</Text>
          ) : (
            <Text style={Styles.s_g_font}>전체</Text>
          )}
        </TouchableOpacity>
        <Text style={Styles.m_g_font}>|</Text>
        <TouchableOpacity onPress={onPressS} style={{margin: 3}}>
          {isPickedS ? (
            <Text style={Styles.s_b_font}>답변완료</Text>
          ) : (
            <Text style={Styles.s_g_font}>답변완료</Text>
          )}
        </TouchableOpacity>
        <Text style={Styles.m_g_font}>|</Text>
        <TouchableOpacity onPress={onPressT} style={{margin: 3}}>
          {isPickedT ? (
            <Text style={Styles.s_b_font}>답변대기중</Text>
          ) : (
            <Text style={Styles.s_g_font}>답변대기중</Text>
          )}
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={Styles.s_b_font}>내 질문 보기</Text>
        {isMyQ ? (
          <ONButton onPress={() => setMyQ(false)} />
        ) : (
          <OFFButton onPress={() => setMyQ(true)} />
        )}
      </View>
    </View>
  );
};

export default SearchQAPage;
