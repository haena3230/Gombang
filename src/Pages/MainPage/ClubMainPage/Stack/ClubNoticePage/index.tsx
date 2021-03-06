// 동아리 공지사항 detail 페이지
import React from 'react';
import {View,Text,ScrollView,StyleSheet} from 'react-native';
import {Color, Styles,DWidth, Page} from '~/@types/basic_style';
import {ClubFeedUser,ClubFeedMenu,FeedSchedule} from '~/Components/Club/ClubFeed';
import {PartyView,Party} from '~/Components/Club/ClubNotice';

const ClubNoticePage =()=>{
    return(
        <View style={Page.page_container}>
             <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                <ClubFeedUser />
                <ClubFeedMenu />
            </View>
            {/* Textzone */}
            <View style={{margin:5}}>
                <Text style={Styles.m_b_font}>test입니다</Text>
            </View>
            <FeedSchedule onPressSD ={()=>null} />
            <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
                <PartyView />
                <Party />    
            </View>
            

        </View>
    )
}

const Box=()=>{
    return(
        <View style={styles.box}>
            <Text style={Styles.s_g_font}>공지사항test</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    box:{
        width:DWidth*0.8, 
        aspectRatio:9/2,
        borderWidth:1, 
        borderColor:Color.l_color,
        marginHorizontal:5,
    }
})

export default ClubNoticePage;