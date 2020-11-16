// 프로필 사진 선택 컴포넌트 
import React, {useState,useEffect} from 'react';
import {View,TouchableOpacity, StyleSheet, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Color} from '~/@types/basic_style';
import Styled from 'styled-components/native';
import ImagePicker from 'react-native-image-picker';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-community/async-storage'
import {URL} from '~/@types/Gombang'
// 이미지 비율 구하는 함수

// 사진 업로드 메뉴
const AddPhoto = () => {
  const[uri, setUri] = useState('');
  const[photo,setPhoto]=useState(false);
  useEffect(()=>{
    if(uri===''){
      setPhoto(false);
    }
    else setPhoto(true);
  })

  const options = {
    title: 'Load Photo',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
    includeBase64:true,
  };
  // 카메라 
  const showCamera = (): void => {
    ImagePicker.launchCamera(options, (response) => {
      if (response.error) {
        console.log('LaunchCamera Error: ', response.error);
      } else {
        setUri(String(response.uri));
        // AsyncStorage.setItem('userImgName', JSON.stringify(response.fileName))    
        // AsyncStorage.setItem('userImgBase', response.data)  
      }
    });
  };
  // 사진보관함
  const showCameraRoll = (): void => {
    const axios = require('axios')

    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.error) {
        console.log('LaunchImageLibrary Error: ', response.error);
      } else {
        setUri(String(response.uri));
        
      }
    });
  };
    
    
    const[modal,setModal] = useState(false);
    const toggle=()=>{
        setModal(!modal)
    }
    
  return (
    <View style={styles.imgContainer}>
      <TouchableOpacity onPress={toggle}>
       
       {photo?
        (<View>
          <Image source = {{uri : uri}} style={{width:100, aspectRatio:1, borderRadius:50}} />
        </View>
        ):(<View
          style={{
            width: 100,
            height: 100,
            backgroundColor: Color.l_color,
            borderRadius: 50,
          }}
        />)}
        <Icon
          name="camera"
          size={25}
          color="#808B96"
          style={{
            position: 'absolute',
            right: 5,
            bottom: 5,
          }} />
      </TouchableOpacity>
      <Modal isVisible={modal} onBackdropPress={toggle}>
        <Container>
          <ImagePickerButton onPress={showCamera}>
            <Text>사진 촬영</Text>
          </ImagePickerButton>
          <ImagePickerButton onPress={showCameraRoll}>
            <Text>사진 보관함으로 가기</Text>
          </ImagePickerButton>
        </Container>
      </Modal>
    </View>
  );
};


const styles = StyleSheet.create({
  imgContainer: {
    padding: 20,
    alignItems: 'center',
  },
});


const Container = Styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;


const ImagePickerButton = Styled.TouchableOpacity`
  border-width: 1px;
  border-radius: 8px;
  border-color: #CCCCCC;
  padding: 8px 32px;
  margin-top: 16px;
  backgroundColor:${Color.g_color}
`;

export default AddPhoto;