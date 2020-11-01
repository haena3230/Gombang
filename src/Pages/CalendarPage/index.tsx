// CalendarPage index.tsx
//main3
import React, {useState} from 'react';
import {ScrollView,View, StyleSheet, Text} from 'react-native';
import {Styles, Color} from '~/@types/basic_style';
import Calendarcom from '~/Components/CalendarCom';
import {CalendarSchedule} from './CalendarSchedule';
import {useNavigation} from '@react-navigation/native';


// 일정(달력)
interface CalendarDateProps{
  Year:string;
  Month:string;
  Day:string;
}
const CalendarPage = ({Year,Month,Day}:CalendarDateProps) => {
const navigation=useNavigation();
 const[picked,setPicked]=useState(false);
 const[year,setYear]=useState('');
 const[month,setMonth]=useState('');
 const[day,setDay]=useState('');
  Year=year;
  Month=month;
  Day=day;

   const onPressAdd=()=>{
     navigation.navigate('AddSchedulePage',{
        screen: 'AddSchedulePage',
            params: { 
              year:Year,
              month:Month,
              day:Day,
             },
        });
   }

  return (
    <ScrollView style={{flex:1,backgroundColor:Color.w_color, padding:10}}>
      <View style={styles.container}>
        <Calendarcom setYear={setYear} setMonth={setMonth} setDay={setDay} setPicked={setPicked}/>
      </View>
      {picked ?
      (<View style={styles.container}>
        <CalendarSchedule pickyear={year} pickmonth={month} pickday={day} onPressAdd={onPressAdd} />
      </View>):
      (null)}
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    borderColor:Color.l_color, 
    borderRadius:10, 
    borderWidth:1,
    marginBottom:10,
  },
});

export default CalendarPage;
