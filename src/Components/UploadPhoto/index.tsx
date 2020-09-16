// 사진 업로드
import React, {useState} from 'react';
import {Alert} from 'react-native';

import Styled from 'styled-components/native';

import ImagePicker from 'react-native-image-picker';

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
`;
const Label = Styled.Text``;

const UploadPhoto = (): JSX.Element => {
  const [imageSource, setImageSource] = useState<string | undefined>(undefined);
  const options = {
    title: 'Load Photo',
    customButtons: [
      {name: 'button_id_1', title: 'CustomButton 1'},
      {name: 'button_id_2', title: 'CustomButton 2'},
    ],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  const showCamera = (): void => {
    ImagePicker.launchCamera(options, (response) => {
      if (response.error) {
        console.log('LaunchCamera Error: ', response.error);
      } else {
        setImageSource(response.uri);
      }
    });
  };

  const showCameraRoll = (): void => {
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.error) {
        console.log('LaunchImageLibrary Error: ', response.error);
      } else {
        setImageSource(response.uri);
      }
    });
  };

  return (
    <Container>
      {imageSource && <Photo source={{uri: imageSource}} />}
      <ImagePickerButton onPress={showCamera}>
        <Label>Take Photo</Label>
      </ImagePickerButton>
      <ImagePickerButton onPress={showCameraRoll}>
        <Label>Show Camera Roll</Label>
      </ImagePickerButton>
    </Container>
  );
};

export default UploadPhoto;
