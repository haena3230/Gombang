// 공식 동아리 인증 만들기 
import React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LongButton } from '~/Components/Button';
import {Styles,Color} from '~/@types/basic_style';
import {useNavigation} from '@react-navigation/native';

const CertifiedPage =()=>{
    const navigation=useNavigation();
    return(
        <View style={{backgroundColor:Color.w_color, flex:1, padding:20}}>
            <Text style={Styles.m_b_font}>공식 동아리 인증 받기</Text>
            <Text style={Styles.ss_g_font}>학교에서 공식 동아리 인증을 받은 서류를 첨부하면 공식 동아리 인증 마크를 받을 수 있습니다.</Text>
            <TouchableOpacity style={styles.long} onPress={()=>Alert.alert('준비중입니다.')}>
                <Text style={Styles.m_g_font}>  파일 추가하기</Text>
            </TouchableOpacity>
            <LongButton buttonTitle={'건너뛰고 생성하기'} onPress={()=>navigation.navigate('MainTabNavi')} />
        </View>
    )
}


const styles = StyleSheet.create({
    long:{
        justifyContent:'center',
        borderWidth:1,
        borderColor:Color.l_color,
        height:40,
        marginVertical:10,
    },
})
export default CertifiedPage;