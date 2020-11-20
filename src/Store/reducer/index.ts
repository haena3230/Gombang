// 리듀서
import {LOGINSTATE,IMG_URI, USER_ID,CLUB_ID,FOLDER_ID,NICKNAME,STATE} from '../actions'


const initState={
    kakakId:null,
    imageUri:null,
    imageName:null,
    userId:null,
    clubId:null,
    folderId:null,
    nickname:null,
    changeState:false,
}



export const loginReducers = (state=initState,action: any)=>{
    switch(action.type){
        case LOGINSTATE:
            return {
                ...state,
                kakaoId:action.kakaoId,
            }
         case IMG_URI:
            return {
                ...state,
                imageUri:action.imageUri,
                imageName:action.imageName,
            }
         case USER_ID:
            return {
                ...state,
                userId:action.userId,
            }
        case CLUB_ID:
            return {
                ...state,
                clubId:action.clubId,
            }
        case FOLDER_ID:
            return {
                ...state,
                folderId:action.folderId,
            }
        case NICKNAME:
            return {
                ...state,
                nickname:action.nickname,
            }
         case STATE:
            return {
                ...state,
                changeState:!state
            }
        
    
        default:
            return state; 
    }
}


