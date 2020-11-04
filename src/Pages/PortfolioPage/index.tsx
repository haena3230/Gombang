// PortfolioPage index.tsx
// 메인4
import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {Styles,Color} from '~/@types/basic_style';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import Plusbutton from '~/Assets/Plusbutton.svg';
import {TwoOpModal} from '~/Components/Modal';
import {useNavigation } from '@react-navigation/native';
import ConfirmModal from '~/Components/Modal/ConfirmModal';

// 포트폴리오 페이지
const PortfolioPage = () => {
  // 추가모달
  const [modalVisible,setModalVisible] = useState(false);
  const onPressModal=()=>{
    setModalVisible(!modalVisible)
  }
  return (
    <View style={{flex:1,backgroundColor:Color.w_color, paddingHorizontal:20}}>
    <ScrollView>
      <View style={{flexDirection:'row', flexWrap: 'wrap', justifyContent:'space-between'}}>
        <Folder/>
        <Folder/>
        <Folder/>
      </View>
    </ScrollView>
    <TouchableOpacity onPress={onPressModal} style={{position:'absolute', right:20, bottom:20}}>
        <Plusbutton width={45} height={45} />
        <AddModal isVisible={modalVisible} onBack={onPressModal}/>
    </TouchableOpacity>
    </View>
  );
};

// 폴더
const Folder =()=>{
  const navigation = useNavigation();
  // 폴더 이름
  const[folderId,setFolderId] = useState('');

  // 즐겨찾기
  const [fav,setFav]=useState(false);
  const onPressFav=()=>{
    setFav(!fav);
  }
  const isfav=fav;
  // 폴더 이름 수정 모달
  const[modify,setModify]=useState(false);
  const onPressModify=()=>{
    setModify(!modify);
  }
  // 폴더 삭제 모달
  const[deleteF,setDeleteF]= useState(false);
  const onPressDelete=()=>{
    setDeleteF(!deleteF)
  }
  return(
    <TouchableOpacity onPress = {()=>navigation.navigate('PortfolioStackNavi')}>
    <View style={{marginTop:20}}>
      <View style={styles.container}>
        <TouchableOpacity style={{padding:10}} onPress={onPressFav}>
          {isfav?
          (<Icon name="star" size={20} />):
          (<Icon name="star-outline" size={20} />)}
        </TouchableOpacity>
        <TwoOpModal fst_op='수정하기' snd_op='삭제하기' onPressMenuM={onPressModify} onPressMenuD={onPressDelete}/>
        <ModifyTitle modifyVisible={modify} onBackMT={onPressModify}/>
        <ConfirmModal isVisible={deleteF} onBack={onPressDelete} text1={'폴더이름 폴더를'} text2 ={'삭제하시겠습니까?'}/>
      </View>
      <View style={{margin:1}}>
        <Text style={Styles.s_b_font}>test</Text>
      </View>
    </View>
    </TouchableOpacity>
  )
}


// 이름변경 모달
interface ModifyTitleProps{
  modifyVisible:boolean;
  onBackMT:()=>void;
}
const ModifyTitle=({modifyVisible, onBackMT}:ModifyTitleProps)=>{
  const[text,setText]=useState('');
  return(
    <Modal onBackdropPress={onBackMT} isVisible={modifyVisible}>
      <View style={{justifyContent:'center', alignItems:'center'}}>
        <View style={styles.modifyContainer}>
          <View  style={{width:200,borderBottomWidth:1}}>
              <TextInput 
              placeholder={'포트폴리오'}
              onChangeText={(text) => setText(text)}
              value={text}
              maxLength={20}
              />
          </View>
        </View>
        <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={styles.button} onPress={onBackMT}>
              <Text style={Styles.m_b_font}>취소</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={Styles.m_b_font}>완료</Text>
            </TouchableOpacity>
          </View>
      </View>
    </Modal>
  )
}


// 추가 모달
interface AddModalProps{
  isVisible:boolean;
  onBack:()=>void;
}
const AddModal=({isVisible, onBack}:AddModalProps)=>{
  const navigation = useNavigation();
   // 폴더 추가
  const onPressAdd=()=>{null};
  // 폴더 설정
  const onPressSetting=()=>null;
  return(
    <Modal onBackdropPress={onBack} isVisible={isVisible}>
     <View style={{position:'absolute', bottom:180, right:0}}>
       <TouchableOpacity onPress={onPressAdd} style={styles.modalButton}>
         <Plusbutton width={45} height={45} />
       </TouchableOpacity>
    </View>
    <View style={{position:'absolute', bottom:120, right:0}}>
       <TouchableOpacity onPress={onPressSetting} style={styles.modalButton}>
         <Icon name="settings-outline" size={40} color={Color.g_color}/>
       </TouchableOpacity>
    </View>
    <View style={{position:'absolute', bottom:60, right:0}}>
      <TouchableOpacity onPress={onBack} style={styles.closeButton}>
          <Icon name="close-outline" size={40} color={Color.g_color}/>
      </TouchableOpacity>
    </View>
    </Modal>
  
  );
  
}


const styles=StyleSheet.create({
  // 폴더 
  container:{
    backgroundColor:Color.l_color,
    height:140,
    width:140,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  // AddFolder
  modalButton:{
    backgroundColor:Color.p_color,
    width:45, 
    height:45,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:30,
  },
  closeButton:{
     backgroundColor:Color.l_color,
    width:45, 
    height:45,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:30,
  },
  // 이름 수정 모달
  modifyContainer:{
    backgroundColor:Color.w_color,
    height:100,
    width:300,
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:Color.l_color,
    width:150,
    height:40,
  }
})

export default PortfolioPage;
