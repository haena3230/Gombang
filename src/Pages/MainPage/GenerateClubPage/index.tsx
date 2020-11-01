// 동아리 생성 페이지ㅣㅏ런이ㅏ러나ㅣ런이

import { Picker } from '@react-native-community/picker';
import React, { useState } from 'react';
import {View,Text, StyleSheet} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import AddPhoto from '~/Components/AddPhoto';
import { LongButton } from '~/Components/Button';
import { HashTagIcon, AddHashTagButton } from '~/Components/HashTag';
import {Styles, Color } from '~/@types/basic_style';
import {useNavigation} from '@react-navigation/native';

const GenerateClubPage=()=>{
    const navigation =useNavigation();
    const [name,setName] = useState('');
    const [campus,setCampus] = useState<string | number>('');
    return(
        <View style={{backgroundColor:Color.w_color, flex:1,padding:20}}>
            <AddPhoto />
            <View style={styles.long}>
                <TextInput
                    placeholder={'동아리 이름'}
                    onChangeText={(text) => setName(text)}
                    value={name}
                    />
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <View style={styles.short}>
                 <Picker
                    selectedValue={campus}
                    onValueChange={(itemValue: React.SetStateAction<string | number>) => {
                        setCampus(itemValue);
                    }}
                    mode={'dropdown'}
                    style={{
                        width:150,
                        height: 40,
                        color: Color.g_color,
                    
                    }}>
                    <Picker.Item label="캠퍼스" value="캠퍼스" />
                    <Picker.Item label="죽전 캠퍼스" value="죽전캠퍼스" />
                    <Picker.Item label="천안 캠퍼스" value="천안캠퍼스" />
                    
                </Picker>
            </View>
            <View style={styles.short}>
                 <Picker
                    selectedValue={campus}
                    onValueChange={(itemValue: React.SetStateAction<string | number>) => {
                        setCampus(itemValue);
                    }}
                    mode={'dropdown'}
                    style={{
                        width: 150,
                        height: 40,
                        color: Color.g_color,
                    }}>
                    <Picker.Item label="죽전 캠퍼스" value="죽전캠퍼스" />
                    <Picker.Item label="천안 캠퍼스" value="천안캠퍼스" />
                    
                </Picker>
            </View>
            </View>
            <View style={styles.long}>
                 <Picker
                    selectedValue={campus}
                    onValueChange={(itemValue: React.SetStateAction<string | number>) => {
                        setCampus(itemValue);
                    }}
                    mode={'dropdown'}
                    style={{
                        height: 40,
                        color: Color.g_color,
                    }}>
                    <Picker.Item label="세부 카테고리" value="죽전캠퍼스" />
                    <Picker.Item label="천안 캠퍼스" value="천안캠퍼스" />
                </Picker>
            </View>
            <Text style={Styles.ss_g_font}>#을 이용해 동아리를 소개해보세요.</Text>
            <View style={{flexDirection:'row', padding:5, flexWrap:'wrap', marginVertical:10}}>
                <HashTagIcon text={'커피'}/>
                <AddHashTagButton onPress={()=>null}/>
            </View>
            <LongButton buttonTitle={'다음'} onPress={()=>navigation.navigate('CertifiedPage')}/>
        </View>
    )
}

const styles=StyleSheet.create({
    long:{
        justifyContent:'center',
        borderWidth:1,
        borderColor:Color.l_color,
        height:40,
        marginVertical:10,
    },
    short:{
        justifyContent:'center',
        borderWidth:1,
        borderColor:Color.l_color,
        height:40,
        marginVertical:10,
        
    },

})

export default GenerateClubPage;