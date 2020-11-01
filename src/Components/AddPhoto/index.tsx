// 프로필 사진 선택 컴포넌트 
import React, {useState} from 'react';
import {View,TouchableOpacity, StyleSheet, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Color} from '~/@types/basic_style';
import Styled from 'styled-components/native';
import ImagePicker from 'react-native-image-picker';
import Modal from 'react-native-modal';
// 사진 업로드 메뉴
const AddPhoto = () => {
    // 받아온 사진의 uri
    const Uri='';
    const [imageSource, setImageSource] = useState('');
    const[photo,setPhoto]=useState(false);
    const isPhoto=()=>{
      if(imageSource==""){
          setPhoto(false);
          console.log(imageSource)
        }
      else{
        setPhoto(true)
        console.log(imageSource)}
    }
    const[modal,setModal] = useState(false);
    const toggle=()=>{
        setModal(!modal)
        setImageSource(Uri);
        isPhoto();
      }
    
  return (
    <View style={styles.imgContainer}>
      <TouchableOpacity onPress={toggle}>
        {photo?
        (<Image source = {{
          uri : imageSource,
          }} width={100} height={100} />):
          (null)}
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: Color.l_color,
            borderRadius: 50,
          }}
        />
        <Icon
          name="camera"
          size={25}
          color="#808B96"
          style={{
            position: 'absolute',
            right: 5,
            bottom: 5,
          }}></Icon>
      </TouchableOpacity>
      <UploadPhoto isVisible={modal} BackPress={toggle} uri={Uri}/>
    </View>
  );
};

// 사진 업로드 모달
interface UploadPhotoProps{
    isVisible:boolean;
    BackPress:()=>void;
    uri:string;
}
const UploadPhoto = ({isVisible,BackPress,uri}:UploadPhotoProps): JSX.Element => {
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
        uri = String(response.uri);
      }
    });
  };
  // 사진보관함
  const showCameraRoll = (): void => {
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.error) {
        console.log('LaunchImageLibrary Error: ', response.error);
      } else {
        uri = String(response.uri);
      }
    });
  };

  return (
      <Modal isVisible={isVisible} onBackdropPress={BackPress}>
    <Container>
      <ImagePickerButton onPress={showCamera}>
        <Text>사진 촬영</Text>
      </ImagePickerButton>
      <ImagePickerButton onPress={showCameraRoll}>
        <Text>사진 보관함으로 가기</Text>
      </ImagePickerButton>
    </Container>
    </Modal>
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

const Photo = Styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 8px;
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