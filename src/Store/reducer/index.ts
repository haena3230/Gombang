// 리듀서
import {LOGINSTATE,IMG_URI, USER_ID,CLUB_ID,FOLDER_ID,NICKNAME,USERIMG,USER_DATA} from '../actions'


const initState={
    kakakId:null,
    imageUri:null,
    imageName:null,
    userId:null,
    clubId:null,
    folderId:null,
    nickname:null,
    image:null,
    email:null,
    number:null,
    birth:null,
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
        case USERIMG:
            return {
                ...state,
                image:action.image,
            }
        case USER_DATA:
            return {
                ...state,
                email:action.email,
                number:action.number,
                birth:action.birth,
            }
    
    
        default:
            return state; 
    }
}


