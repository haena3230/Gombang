import React,{useEffect, useState} from 'react'
import {View,Text, StyleSheet, TouchableOpacity, ScrollView, Image, Button} from 'react-native'
import {Styles, Color} from '~/@types/basic_style';
import AddPhoto from '~/Components/AddPhoto';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {ExitModal,ConfirmTextModal} from '~/Components/Modal/ConfirmModal';
import {DatePickModal} from '~/Components/Modal/DateTimeModal'
import {useSelector} from 'react-redux'
import {URL} from '~/@types/Gombang'
import Profilebasic from '~/Assets/Profilebasic.svg'



const MyPage=()=>{
    const [state,setState]=useState(false)
    const [empty,setEmpty]=useState(true)
    const userId = useSelector((state)=>state.login.userId)
    const axios = require('axios')
    const navigation =useNavigation()
    const [user,setUser] = useState<any>('')
    useEffect(()=>{
        axios.get(`${URL}/user/${userId}`)
        .then(async (res:any)=>{
            await setUser(res.data)
            setEmpty(false)
        })
    },[])
    
    // 이미지 변경
    const imgUri = useSelector((state)=>state.login.imageUri)
    const imgName = useSelector((state)=>state.login.imageName)
    const[mImg,setMImg] = useState(false)
    const onPressMI=()=>{
        setMImg(!mImg)
        setState(!state)
    }
    const formData = new FormData();
      formData.append('image',{
          uri:imgUri,
          type:'image/jpeg',
          name:imgName,
      })
    const onStoreImg=()=>{
        axios.patch(`${URL}/user/${userId}/profile`,formData,{
            headers: { 'content-type': 'multipart/form-data' }
        })
        .then((res:any)=>console.log(res.data))
        onPressMI()
    }
    // 탈퇴
    const[exit, setExit] = useState(false);
    const toggleExit=()=>{
        setExit(!exit);
        setState(!state)
    }
    // 번호변경
    const[cnM,setcnM] = useState(false)
    const toggleCN=()=>{
        setcnM(!cnM)
        setState(!state)
    }   
    // 생일변경
    const[cbM,setcbM]=useState(false)
    const toggleCB=()=>{
        setcbM(!cbM)
        setState(!state)
    }
    
    return(
        <View style={{flex:1}}>
            {/* 헤더 */}
            <View style ={{flexDirection:'row', alignItems:'center', height:50, padding: 10}}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Icon name = "arrow-back-outline" size={25} color={Color.g_color}/>
                </TouchableOpacity>
                <View style={{marginHorizontal:20}}>
                    <Text style={Styles.b_b_font}>내 프로필</Text>
                </View>
            </View>
        <ScrollView>
            {empty?(
                <Text>...</Text>
            ):(
                <View>
                    <View style = {Style.bar}>
                        <Text style = {Styles.s_g_font}>프로필 설정</Text>
                    </View>
                    <View style={{alignItems:'center'}}>
                        {mImg?(
                            <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                                <TouchableOpacity 
                                    style={{backgroundColor:Color.g_color, padding:5,width:35,borderRadius:5,alignItems:'center',height:25}}
                                    onPress={onPressMI}>
                                    <Text style={Styles.ss_w_font}>취소</Text>
                                </TouchableOpacity>
                                <AddPhoto />
                                <TouchableOpacity 
                                    style={{backgroundColor:Color.g_color, padding:5,width:35,borderRadius:5,alignItems:'center',height:25}}
                                    onPress={onStoreImg}>
                                    <Text style={Styles.ss_w_font}>저장</Text>
                                </TouchableOpacity>
                            </View>
                        ):(
                            <View>
                                <View style={{position:'absolute',top:90,left:100,zIndex:2}}>
                                    <TouchableOpacity 
                                        style={{backgroundColor:Color.g_color, padding:5,width:55,borderRadius:5,alignItems:'center'}}
                                        onPress={onPressMI}>
                                        <Text style={Styles.ss_w_font}>사진 변경</Text>
                                    </TouchableOpacity>
                                </View>
                            {user.image===''?(
                                <Profilebasic style={{ width:100, height:100, margin:20}}/>
                            ):(
                                <Image source = {{uri:`${URL}/image/${user.image}`}} style={{width:100,height:100,borderRadius:50,margin:20}}/>
                            
                            )}
                            </View>
                        )}
                        
                            <Text style= {Styles.s_g_font}>{user.college} {user.department}</Text>
                            <View style={{margin:20}}>
                                <Text style={Styles.b_b_font}>{user.name}님</Text>
                            </View>
                    </View>
                    <View style = {Style.bar}>
                        <Text style = {Styles.s_g_font}>내정보</Text>
                    </View>
                    <View>
                        <Line first = {'연결계정'} second = {user.email} />
                        <TouchableOpacity style={Style.Touch} onPress={toggleCN}>
                            <Line first = {'휴대전화'} second = {user.phone} />
                            <Icon name="chevron-forward-outline" size={20} color={Color.g_color}/>
                            <ConfirmTextModal isVisible={cnM} onBack={toggleCN} />
                        </TouchableOpacity>
                        <TouchableOpacity style={Style.Touch} onPress={toggleCB}>
                            <Line first = {'생년월일'} second = {user.birth} />
                            <Icon name="chevron-forward-outline" size={20} color={Color.g_color}/>
                            <DatePickModal isVisible={cbM} onBack={toggleCB} userId={userId}/>
                        </TouchableOpacity>
                    </View>
                    <View style ={{height:10, backgroundColor:Color.l_color}} />
                    <TouchableOpacity onPress={()=>toggleExit()} style={{margin:10}}>
                        <Text style= {{color:'red', fontSize:15, fontWeight:'bold'}}>회원 탈퇴하기</Text>
                        <ExitModal isVisible={exit} onBack={()=>toggleExit()}/>
                    </TouchableOpacity>
                </View>
            )}  
            
        </ScrollView>
    </View>
    )
}


// 리스트
interface LineProps{
    first : string;
    second:string;
}
const Line =({first,second}:LineProps)=>{
    return(
        <View style={Style.box}>
            <Text style= {Styles.s_g_font}>{first}</Text>
            <Text style={Styles.m_b_font}>{second}</Text>
        </View>
    )
}



const Style = StyleSheet.create({
    bar:{
        height:40,
        width:'100%',
        backgroundColor:Color.l_color,
        justifyContent:'center',
        paddingHorizontal:10,
    },
    box:{
        borderBottomWidth:1,
        borderColor:Color.l_color,
        justifyContent:'center',
        padding:10
    },
    Touch:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginRight:10
    }

})


export default MyPage;