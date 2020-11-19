// QA 페이지 몸통부분
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Styles, Color} from '~/@types/basic_style';
import Icon from 'react-native-vector-icons/Ionicons';
import {URL} from '~/@types/Gombang'

// 답변 완료
interface SearchQAAnsweredProps{
  question:string;
  createdAt:string;
  userId:string;
  answerState:Array<any>;
}
export const SearchQAAnswered = ({
  question,
  createdAt,
  userId,
  answerState,
}:SearchQAAnsweredProps) => {
  const [btn, setBtn] = useState(false);
  const onPress = () => {
    setBtn(!btn);
  };
  return (
    <View style={btn ? pickContainer : preContainer}>
      <Question text={question} isPressed={btn} />
      <StateButton
        isAnswered={true}
        isPressed={btn}
        writer={userId}
        date={createdAt}
        onPress={onPress}
      />
      {btn? (
        <Answer text={answerState.answer} date={answerState.createdAt} />
      ) : null}
    </View>
  );
};

// 답변 미완

interface SearchQAProps{
  question:string;
  createdAt:string;
  userId:string;
  qId:string;
}
export const SearchQA = ({
  question,
  createdAt,
  userId,
  qId,
}:SearchQAProps) => {
  const [btn, setBtn] = useState(false);
  const onPress = () => {
    setBtn(!btn);
  };
  return (
    <View style={btn ? pickContainer : preContainer}>
      <Question text={question} isPressed={btn} />
      <StateButton
        isAnswered={false}
        isPressed={btn}
        writer={userId}
        date={createdAt}
        onPress={onPress}
      />
      {btn? (
        <AnswerBar qId={qId} userId={userId} />
      ) : null}
    </View>
  );
};
// 질문 말풍선
interface QuestionProps {
  text: string;
  isPressed: boolean;
}
const Question = ({text, isPressed}: QuestionProps) => {
  return (
    <View style={isPressed ? pickQtalk : preQtalk}>
      <Text style={Styles.s_b_font}>{text}</Text>
    </View>
  );
};
// 답변 말풍선
interface AnswerProps {
  text: string;
  date: string;
}
const Answer = ({text, date}: AnswerProps) => {
  return (
    <View>
      <View style={Atalk}>
        <Text style={Styles.s_b_font}>{text}</Text>
      </View>
      <View style={{alignItems: 'flex-end', marginRight: 25}}>
        <Text style={Styles.ss_b_font}>관리자 / {date}</Text>
      </View>
    </View>
  );
};
// 답변 상태 / 작성자 / 날짜 버튼
interface StateButtonProps {
  isAnswered: boolean;
  isPressed: boolean;
  writer: string;
  date: string;
  onPress: () => void;
}
const StateButton = ({
  isAnswered,
  isPressed,
  writer,
  date,
  onPress,
}: StateButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          padding: 3,
          marginRight: 5,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        {isAnswered ? (
          <Text style={Styles.ss_p_font}>답변완료</Text>
        ) : (
          <Text style={Styles.ss_g_font}>답변대기중</Text>
        )}
        <View style={{marginHorizontal: 5}}>
          <Text style={Styles.ss_b_font}>{writer + ' /' + date}</Text>
        </View>
        {isPressed ? (
          <Icon name="chevron-up-outline" size={15} />
        ) : (
          <Icon name="chevron-down-outline" size={15} />
        )}
      </View>
    </TouchableOpacity>
  );
};

// 답변 입력창
interface AnswerBarProps {
  qId:string,
  userId:string,
}
const AnswerBar = ({qId,userId}: AnswerBarProps) => {
  const axios= require('axios')
  const [text, setText] = useState('');
  const PressAButton=()=>{
    axios.post(`${URL}/qna/answer`,{
      'questionId' : qId,
      'userId' : userId,
      'answer' : text
    })
    .then((res:any)=>{
      console.log(res.status)
    })
  }
  return (
    <View
      style={{
        backgroundColor: Color.w_color,
        height: 40,
        marginHorizontal:5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View style={{width: '75%'}}>
        <TextInput
          placeholder={''}
          onChangeText={(text) => setText(text)}
          value={text}
          multiline={true}
          maxLength={200}
        />
      </View>

      <View
        style={{
          backgroundColor: Color.l_color,
          height: 30,
          width: 40,
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 5,
        }}>
        <TouchableOpacity onPress={PressAButton}>
          <Text style={Styles.s_g_font}>완료</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// 컨테이너
const container = StyleSheet.create({
  talkContainer: {
    borderBottomWidth: 1,
    borderColor: Color.g_color,
    paddingVertical: 5,
  },
  backgroundW: {
    backgroundColor: Color.w_color,
  },
  backgroundL: {
    backgroundColor: Color.l_color,
  },
});
// 선택전 컨테이너
const preContainer = StyleSheet.flatten([
  container.talkContainer,
  container.backgroundW,
]);
// 후 컨테이너
const pickContainer = StyleSheet.flatten([
  container.talkContainer,
  container.backgroundL,
]);
// 질문 말풍선
const talk = StyleSheet.create({
  talkBox: {
    margin: 5,
    padding: 5,
    borderRadius: 8,
  },
  QtalkBox: {
    marginLeft: 15,
    borderTopLeftRadius: 0,
  },
  AtalkBox: {
    marginRight: 15,
    borderTopRightRadius: 0,
  },
  backgroundW: {
    backgroundColor: Color.w_color,
  },
  backgroundL: {
    backgroundColor: Color.l_color,
  },
  backgroundP: {
    backgroundColor: Color.p_color,
  },
});
// 질문 말풍선 선택전
const preQtalk = StyleSheet.flatten([
  talk.talkBox,
  talk.QtalkBox,
  talk.backgroundL,
]);
// 질문 말풍선 선택후
const pickQtalk = StyleSheet.flatten([
  talk.talkBox,
  talk.QtalkBox,
  talk.backgroundW,
]);
// 답변 말풍선
const Atalk = StyleSheet.flatten([
  talk.talkBox,
  talk.AtalkBox,
  talk.backgroundP,
]);
