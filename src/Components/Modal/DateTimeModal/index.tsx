import React,{useState} from 'react'
import { Text,View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import Modal from 'react-native-modal'
import {Color,Styles} from '~/@types/basic_style'
import {CancleConfirmBtn,ConfirmModal} from '~/Components/Modal/ConfirmModal'
import {URL} from '~/@types/Gombang'



// 날짜 선택기
interface DatePickProps{
    isVisible:boolean,
    onBack:()=>void,
    userId:string
}
export const DatePickModal=({isVisible,onBack,userId}:DatePickProps)=>{
    const axios = require('axios')
    const [date, setDate] = useState(new Date())
    const [data,setData] = useState('')
    const onConfirm=async ()=>{
        await setData(JSON.stringify(date).slice(1,11))
        setAfter(!after)
    }

    // 확인절차
    const [after,setAfter]=useState(false)
    const onBackAfter=()=>{
        setAfter(!after)
    }
    const onConfirmAfter=()=>{
        setAfter(!after)
        onBack()
        axios.patch(`${URL}/user/${userId}/birth`,{
            'birth':data
        })
        .then((res)=>console.log(res.status))
    }

    return(
        <Modal isVisible={isVisible} onBackdropPress={onBack}>
            <View style={{backgroundColor:Color.w_color, paddingTop:10,borderRadius:20}}>
                <View style={{alignItems:'center',margin:10}}>
                    <Text style={Styles.m_b_font}>생년월일</Text>
                </View>
               <DatePicker
                mode="date"
                date={date}
                onDateChange={setDate}
                />
                <View style={{alignItems:'center',backgroundColor:Color.l_color,margin:2,borderBottomLeftRadius:20,borderBottomRightRadius:20}}>
                    <CancleConfirmBtn onBack={onBack} onConfirm={onConfirm}/>
                    <ConfirmModal isVisible={after} onBack={onBackAfter} onConfirm={onConfirmAfter} text1='변경하시겠습니까?' text2='' />
                </View>
            </View>
        </Modal>
    )
}