// 동아리 피드 글 작성 페이지
import React,{useState, useEffect} from 'react';
import {View, TextInput, TouchableOpacity, Image, Alert} from 'react-native';
import {Styles,Color,Page} from '~/@types/basic_style';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import Plusbutton from '~/Assets/Plusbutton.svg';
import { useNavigation} from '@react-navigation/native';
import ImagePicker from 'react-native-image-picker';
import { ScrollView } from 'react-native-gesture-handler';
import {FeedSchedule} from '~/Components/Club/ClubFeed';


const ClubWritePage = ()=>{

    const navigation = useNavigation()
    // text 내용
    const [text,setText] = useState('')
    // 일정
    const [schedule,setSchedule] = useState(true);
    const onPressSD=()=>{
        setSchedule(!schedule);
    }
    // 모달
    const[isVisible,setisVisible] = useState(false);
    const onPress=()=>{
        setisVisible(!isVisible);
    }
    // 사진 
    const[img,setImg] = useState(false);
    useEffect(()=>{
      if(uri.length!==0){
        setImg(true);
      }
      else setImg(false);
    })
    
     const options = {
        title: 'Load Photo',
        storageOptions: {
        skipBackup: true,
        path: 'images',
    }
  };
  const [uri,setUri]= useState<Array<undefined|string>>([]);
  // 카메라 열기 
  const showCamera=(): void=>{
    console.log('카메라실행')
    ImagePicker.launchCamera(options,(response) => {
      if (response.error) {
        console.log('LaunchCamera Error: ', response.error);
      } else {
        if(uri.length<6)
          setUri( [...uri,String(response.uri)])
        else
          Alert.alert('최대 업로드 사진 개수는 6개 입니다.');
      }
    });
  };
  // 사진보관함
  const showCameraRoll = ():void => {
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.error) {
        console.log('LaunchImageLibrary Error: ', response.error);
      } else {
        if(uri.length<6){
          console.log(response.fileName)
          setUri( [...uri,response.uri])
        }
        else
          Alert.alert('최대 업로드 사진 개수는 6개 입니다.');
      }
    });
  };

  // 사진 크기 얻기
//   const img = Image.resolveAssetSource(require(uri));

    return(
        <View style = {Page.page_container}>
            <ScrollView>
                <TextInput
                    placeholder={'내용을 입력하세요~'}
                    onChangeText={(text) => setText(text)}
                    value={text}
                    multiline
                    maxLength={1000}
                    style={Styles.m_g_font}
                />
                {schedule?(
                <TouchableOpacity onPress={()=>navigation.navigate('ClubAddSchedulePage')}>
                    <FeedSchedule onPressSD={onPressSD}/>
                </TouchableOpacity>
                ):(
                    null
                )}
                
                {img?(
                
                uri.map(
                  (data)=>{
                    return(
                      <View style= {{marginVertical:5}}>
                        <Image
                          key = {data}
                          style={{aspectRatio:1}}
                          source={{
                          uri: data
                          }}
                      />
                     </View>
                    )
                  }
                )):(null)}
                
                  
                
            </ScrollView>
            <TouchableOpacity   onPress= {onPress} style = {{position:'absolute', right:20, bottom:20}}>
                <Plusbutton width={45} height ={45} />
                <MenuModal 
                    isVisible={isVisible} 
                    onBack={onPress} 
                    onPressCamera={()=>showCamera()} 
                    onPressStorage={()=>showCameraRoll()} 
                    onPressFile={()=>null}
                    onPressSchedule={onPressSD}/>
            </TouchableOpacity>
        </View>
    )
}


// 모달 버튼
interface ModalProps{
  isVisible:boolean;
  onBack:()=>void;
  onPressStorage:()=>void;
  onPressCamera:()=>void;
  onPressFile:()=>void;
  onPressSchedule:()=>void;
}
const MenuModal=({isVisible, onBack,onPressStorage,onPressCamera,onPressFile,onPressSchedule}:ModalProps)=>{
 
  return(
    <Modal onBackdropPress={onBack} isVisible={isVisible}>
        <View style={{position:'absolute', bottom:300, right:0}}>
            <TouchableOpacity onPress={onPressStorage}>
                <Icon name="image-outline" size={40} color={Color.g_color}></Icon>
            </TouchableOpacity>
        </View>
        <View style={{position:'absolute', bottom:240, right:0}}>
            <TouchableOpacity onPress={onPressCamera}>
                 <Icon name="camera-outline" size={40} color={Color.g_color}></Icon>
            </TouchableOpacity>
        </View>
        <View style={{position:'absolute', bottom:180, right:0}}>
            <TouchableOpacity onPress={onPressFile}>
                <Icon name="clipboard-outline" size={40} color={Color.g_color}></Icon>
            </TouchableOpacity>
        </View>
        <View style={{position:'absolute', bottom:120, right:0}}>
            <TouchableOpacity onPress={onPressSchedule}>
                <Icon name="calendar-outline" size={40} color={Color.g_color}></Icon>
            </TouchableOpacity>
        </View>
        <View style={{position:'absolute', bottom:60, right:0}}>
            <TouchableOpacity onPress={onBack}>
                <Icon name="close-outline" size={40} color={Color.g_color}/>
            </TouchableOpacity>
        </View>
    </Modal>
  
  );
  
}

export default ClubWritePage