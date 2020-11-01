// CalendarPage index.tsx
//main3
import React,{useState} from 'react';
import {
  LocaleConfig,
  Calendar,
} from 'react-native-calendars';

LocaleConfig.locales['kr'] = {
  monthNames: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  monthNamesShort: [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
  ],
  dayNames: [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  today: '오늘',
};
LocaleConfig.defaultLocale = 'kr';
// 일정(달력)

const CalendarCom = (props) => {
  const [pickDate, setPickDate] = useState('');
  
  return (
    <Calendar
      markedDates={{
        '2020-10-01': {
          periods: [
            {startingDay: false, endingDay: true, color: '#5f9ea0'},
            {startingDay: false, endingDay: true, color: '#ffa500'},
            {startingDay: true, endingDay: false, color: '#f0e68c'},
          ],
        },
        '2020-10-05': {
          periods: [
            {startingDay: true, endingDay: false, color: '#ffa500'},
            {color: 'transparent'},
            {startingDay: false, endingDay: false, color: '#f0e68c'},
          ],
        },
        [pickDate]: {selected: true, marked: true, selectedColor: 'blue'},
      }}
      markingType="multi-period"
      minDate={'2019-01-01'}
      onDayPress={(day) => {
        setPickDate(day.year + "-" + day.dateString.split('-')[1] + "-" + day.dateString.split('-')[2]);  
        props.setYear(day.year);
        props.setMonth(day.month);
        props.setDay(day.day);
        props.setPicked(true);
      }}
      monthFormat={'MM' + '월'}
      hideExtraDays={true}
      onPressArrowLeft={(substractMonth) => substractMonth()}
      onPressArrowRight={(addMonth) => addMonth()}
    />
  );
};

export default CalendarCom;
