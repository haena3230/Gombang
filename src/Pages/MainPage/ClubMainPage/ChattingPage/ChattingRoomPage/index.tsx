// 채팅방
import React, {useState} from 'react'
import {View,Text, TextInput, ScrollView, TouchableOpacity} from 'react-native'
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-picker';
import {CommentBtn} from '~/Components/Club/ClubFeed/Comments';
import {ChattingAddBtn} from '~/Components/Button';
import {Page, Styles,Color} from '~/@types/basic_style';
import {MyChattingBox,UserChattingBox} from '~/Components/Club/Chatting';
import {useNavigation} from '@react-navigation/native'

const ChattingRoomPage=()=>{
    const navigation = useNavigation()
    return(
        <View style={Page.page_container}>
            <View style={{width:'100%', alignItems:'flex-end'}}>
                <Icon
                name="menu-outline"
                onPress={()=>navigation.openDrawer()}
                size={25}
                color={Color.b_color} 
                style={{margin:10}}/>
            </View>
            <ScrollView>
                <UserChattingBox text={'test'} hour={'10'} minute={'47'} user={'양해나'} image={'https://via.placeholder.com/100/F169B4/F169B4.png'}/>
                <MyChattingBox text={'test'} hour={'10'} minute={'47'} user={'양해나'} image={'https://via.placeholder.com/100/F169B4/F169B4.png'}/>
            </ScrollView>
            <View style={{position:'absolute',bottom:0}}>
                <ChattingBar />     
            </View>
        </View>
    )
}

const ChattingBar=()=>{
    // 요소 추가
    const [pick,setPick] = useState(false);
    const onPressAddBtn=()=>{
    setPick(!pick)
    }
    const [text,setText] = useState('');
    return(
        <View style={{
            backgroundColor:Color.l_color,
            flexDirection:'row', alignItems:'center',
            height:45,
            padding:5
            }}>
            <ChattingAddBtn onPressAddBtn={onPressAddBtn} pick={pick}/>
            <ChattingElement visible={pick} toggle={onPressAddBtn}/>
            <View style={{width:'75%',height:40, marginHorizontal:10}}>
                <TextInput
                    style={{
                        backgroundColor: Color.w_color,
                        fontSize:13,
                        borderWidth:1,borderColor:Color.g_color,borderRadius:10
                    }}
                    onChangeText={text => setText(text)}
                    value={text}
                    maxLength={50}
                />
            </View>
            <CommentBtn onPressBtn={()=>null} />
        </View>
    )
}

interface ChattingElementProps{
    visible:boolean
    toggle:()=>void;
}
const ChattingElement=({visible,toggle}:ChattingElementProps)=>{
    const[use,setUri] = useState('')
    const options = {
        title: 'Load Photo',
        storageOptions: {
        skipBackup: true,
        path: 'images',
        },
    };
    // 카메라 
    const showCamera = (): void => {
        ImagePicker.launchCamera(options, (response) => {
        if (response.error) {
            console.log('LaunchCamera Error: ', response.error);
        } else {
            setUri(String(response.uri));
        }
        });
    };
    // 사진보관함
    const showCameraRoll = (): void => {
        ImagePicker.launchImageLibrary(options, (response) => {
        if (response.error) {
            console.log('LaunchImageLibrary Error: ', response.error);
        } else {
            setUri(String(response.uri));
        }
        });
    };
    return(
        <Modal isVisible={visible} onBackdropPress={toggle} backdropOpacity={0}>
            <TouchableOpacity 
                style={{position:'absolute',bottom:40, left:20, alignItems:'center'}}
                onPress={()=>showCamera()}>
                <Icon name="camera-outline" size={30} />
                <Text style={Styles.m_b_font}>카메라</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={{position:'absolute',bottom:40, left:100, alignItems:'center'}}
                onPress={()=>showCameraRoll()}>
                <Icon name="image-outline" size={30} />
                <Text style={Styles.m_b_font}>사진첩</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={{position:'absolute',bottom:40, left:180, alignItems:'center'}}
                onPress={()=>null}>
                <Icon name="keypad-outline" size={30} />
                <Text style={Styles.m_b_font}>연락처</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={{position:'absolute',bottom:40, left:260, alignItems:'center'}}
                onPress={()=>null}>
                <Icon name="folder-open-outline" size={30} />
                <Text style={Styles.m_b_font}>파일</Text>
            </TouchableOpacity>
        </Modal>
    )
}
export default ChattingRoomPage;
