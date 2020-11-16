// 동아리 일정 추가 페이지 
import React,{useState} from 'react'
import {View,Text,TextInput, StyleSheet} from 'react-native'
import { Styles,Color } from '~/@types/basic_style'
import {Second,Third} from '~/Pages/CalendarPage/CalendarSchedule/AddSchedulePage'
import {SelectButton} from '~/Components/Button';

const ClubAddSchedulePage = ()=>{
    const [title,setTitle] = useState('')
    return(
        <View>
            <View style={styles.box}>
                <TextInput
                    placeholder={'일정제목'}
                    onChangeText={(text) => setTitle(text)}
                    value={title}
                    maxLength={20}
                    style={Styles.m_g_font}
                />
            </View>
            <View style={styles.box}>
                <Second pickYear={'2020'} pickMonth={'08'} pickDay={'13'} pickHour={'00'} pickMinute={'00'}/>
            </View>
            <View style={styles.box}>
                <Third />
            </View>
            <View style={{position:'absolute', bottom:10}}>
                <ListCheck />
            </View>
        </View>
    )
}

const ListCheck=()=>{
    return(
        <View style={{flexDirection:'row', alignItems:'center', margin:10, width:'75%', justifyContent:'space-between'}}>
            <Text style={Styles.m_g_font}>참가하기 리스트 생성</Text>
            <SelectButton />
        </View>
    )
}

const styles = StyleSheet.create({
    box:{
        backgroundColor:Color.w_color,
        marginBottom:5
    }
})

export default ClubAddSchedulePage;