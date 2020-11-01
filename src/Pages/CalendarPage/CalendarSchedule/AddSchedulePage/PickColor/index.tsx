// 일정 색상 선택 팝업
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal'
import Styled from 'styled-components/native'
import Styles,{Color} from '~/Components/InputText';



interface PickColorProps {
    isVisiblePickColor:boolean;
    backPressPickColor:()=>void;
    onPressColor:()=>void;
    border:number;
}
const PickColor=({isVisiblePickColor, backPressPickColor,onPressColor,border}:PickColorProps)=>{
 return (

      <Modal
        isVisible={isVisiblePickColor}
        onBackdropPress={backPressPickColor}>
            <View style={styles.container}>
                <View style={styles.colorContainer}>
                    <View style={{flexDirection:'row'}}>
                        <ColorBoxCom color={'red'} onPress={onPressColor} border={border}/>
                        <ColorBoxCom color={'yellow'} onPress={onPressColor} border={border}/>
                        <ColorBoxCom color={'green'} onPress={onPressColor} border={border}/>
                        <ColorBoxCom color={'blue'} onPress={onPressColor} border={border}/>
                        <ColorBoxCom color={'purple'} onPress={onPressColor} border={border}/>
                        <ColorBoxCom color={'gray'} onPress={onPressColor} border={border}/>
                    </View>
                         <View style={{flexDirection:'row'}}>
                        <ColorBoxCom color={'black'} onPress={onPressColor} border={border}/>
                        <ColorBoxCom color={'pink'} onPress={onPressColor} border={border}/>
                        <ColorBoxCom color={'#92BFEC'} onPress={onPressColor} border={border}/>
                        <ColorBoxCom color={Color.l_color} onPress={onPressColor} border={border}/>
                        <ColorBoxCom color={'#58D68D'} onPress={onPressColor} border={border}/>
                        <ColorBoxCom color={'#A04000'} onPress={onPressColor} border={border}/>
                    </View>               
                </View>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={styles.button} onPress={backPressPickColor}>
                        <Text>취소</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={backPressPickColor}>
                        <Text>완료</Text>
                    </TouchableOpacity>

                </View>
            </View>
      </Modal>
  )
}
interface ColorBoxProps{
    color:string;
    onPress:()=>void;
    border:number;
}
const ColorBoxCom=({color,onPress, border}:ColorBoxProps)=>{
    return(
        <TouchableOpacity onPress={onPress}>
             <ColorBox color={color} border={border}/>
        </TouchableOpacity>
    );
}

const styles=StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
    },
    colorContainer:{
        height:80,
        width:200,
        backgroundColor:Color.w_color,
        padding:7,
        alignItems:'center',
        justifyContent:'center'
    },
    button:{
        backgroundColor:Color.l_color,
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:30,
    }
})
interface ColorProps{
    color:string;
    border:number;
}
const ColorBox=Styled.View`
    margin:5px;
    height:20px;
    width:20px;
    backgroundColor:${(props:ColorProps)=>props.color||'blue'};
    borderWidth:${(props:ColorProps)=>props.border};
`;
export default PickColor;