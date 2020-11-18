// 리듀서
import {LOGINSTATE,IMG_URI, USER_ID} from '../actions'


const initState={
    kakakId:null,
    imageUri:null,
    imageName:null,
    userId:null,
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
        
    
        default:
            return state; 
    }
}


