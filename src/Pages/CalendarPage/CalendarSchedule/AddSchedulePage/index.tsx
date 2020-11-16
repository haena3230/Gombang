import React, {useState} from 'react';
import {View,Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView} from 'react-native';

import {Styles,Color} from '~/@types/basic_style';
import Icon from 'react-native-vector-icons/Ionicons';

import {useNavigation} from '@react-navigation/native';
import PickColor from './PickColor';
import Styled from 'styled-components/native'

const AddSchedulePage=({route})=>{
    const {year,month,day} = route.params;
    return(
        <View>
            <First />
            <Second pickYear={year} pickMonth={month} pickDay={day} pickHour={'00'} pickMinute={'00'}/>
            <Third />
        </View>
    )
}

// 첫번째 컴포넌트
const First=()=>{
    const [isVisiblePickColor,setisVisiblePickColor] = useState(false);
     const togglePickColor = () => {
        setisVisiblePickColor(!isVisiblePickColor);
    };
    const[title,setTitle] = useState('');
    const onPressPickColor=()=>{
        console.log('test');
        togglePickColor();
    }
    const backPressPickColor=()=>{
        togglePickColor();
        // isColorChange();
    }

    
    return(
        <View style={styles.class}>
            <View style={styles.container}>
                <TextInput
                    placeholder={'일정 제목'}
                    onChangeText={(text) => setTitle(text)}
                    value={title}
                    maxLength={30}
                    style={Styles.m_g_font}
                />      
            </View>
            <View style={styles.container}>
                <Text style={Styles.m_b_font}>일정 색깔</Text>
                <TouchableOpacity style={styles.right} onPress={onPressPickColor}>
                        <ColorBox color={'blue'}/>
                    <Icon name="chevron-forward-outline" size={20} color={Color.g_color}/>
                    <PickColor isVisiblePickColor={isVisiblePickColor} backPressPickColor={backPressPickColor} onPressColor={()=>null} border={0}/>
                </TouchableOpacity>
            </View>      
        </View>
    )
}

// 두번째 컴포넌트
interface SecondProps{
    pickYear:string|undefined;
    pickMonth:string|undefined;
    pickDay:string|undefined;
    pickHour:string|undefined;
    pickMinute:string|undefined;    
}
export const Second=({pickYear,pickMonth,pickDay, pickHour,pickMinute}:SecondProps)=>{
    const navigation=useNavigation();
    const [area,setArea] = useState('');
    return(
        <View style={styles.class}>
            <View style={styles.container}>
                <Text style={Styles.m_b_font}>시작 날짜</Text>
                <TouchableOpacity style={styles.right} onPress={()=>{navigation.navigate('SchedulePopupPage')}}>
                    <Text>{pickYear}/{pickMonth}/{pickDay}  {pickHour}:{pickMinute}</Text>
                    <Icon name="chevron-forward-outline" size={20} color={Color.g_color}/>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <Text style={Styles.m_b_font}>종료 날짜</Text>
                <TouchableOpacity style={styles.right} onPress={()=>{navigation.navigate('SchedulePopupPage')}}>
                    <Text>{pickYear}/{pickMonth}/{pickDay}  {pickHour}:{pickMinute}</Text>
                    <Icon name="chevron-forward-outline" size={20} color={Color.g_color}/>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                 <TextInput
                    placeholder={'장소'}
                    onChangeText={(text) => setArea(text)}
                    value={area}
                    maxLength={30}
                    style={Styles.m_g_font}
                />   
            </View>
        </View>
    )
}

// 세번째 메모
export const Third = ()=>{
    const [note,setNote] = useState('');
    return(
        <KeyboardAvoidingView
        behavior={"position"}>
        <View style={styles.class}>
            <View style={styles.noteContainer}>
                <TextInput
                    placeholder={'메모'}
                    onChangeText={(text) => setNote(text)}
                    value={note}
                    multiline
                    maxLength={1000}
                    style={Styles.m_g_font}
                />   
            </View>
        </View>
        </KeyboardAvoidingView>
    );
}

const styles=StyleSheet.create({
    class:{
        backgroundColor:Color.w_color,
        marginBottom:10,
    },
   container:{
    height: 40,
    borderBottomWidth: 1,
    borderColor: Color.l_color,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',  
    marginHorizontal:10,
},
noteContainer:{
    height:300,
     borderBottomWidth: 1,
    borderColor: Color.l_color, 
    marginHorizontal:10,
},
right:{
    flexDirection:'row', alignItems:'center'
}
    
})

interface BoxProps{
    color:string;
}
const ColorBox=Styled.View`
    backgroundColor:${(props:BoxProps)=>props.color};
    height:15px;
    width:15px;
    right:5px;
`;
export default AddSchedulePage;