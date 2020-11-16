import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Styles, Color} from '~/@types/basic_style';
import Icon from 'react-native-vector-icons/Ionicons';


// 일정관리
interface ScheduleProps{
    pickyear:string;
    pickmonth:string;
    pickday:string;
    onPressAdd:()=>void;
}
export const CalendarSchedule =({pickyear,pickmonth,pickday,onPressAdd}:ScheduleProps)=>{
    
    return(
        <View style={{margin:5}}>
            <View style={{flexDirection:'row' , alignItems:'center', justifyContent:'space-between'}}>
    <Text style={Styles.ss_b_font}>{pickyear}년 {pickmonth}월 {pickday}일</Text>
                <TouchableOpacity onPress={onPressAdd}>
                    <Icon name="add-outline" size={20} color={Color.g_color} ></Icon>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <View style={styles.schedulebox} />
                <View style={{marginHorizontal:3}}>
                    <Text style={Styles.s_b_font}>일정</Text>
                </View>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    schedulebox:{
        backgroundColor:'black',
        height:15,
        width:15,
    },
})