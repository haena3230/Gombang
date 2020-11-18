// 액션
export const LOGINSTATE = 'LOGINSTATE'
export const IMG_URI = 'IMG'
export const USER_ID = 'USER_ID'

export const loginStateAction= (text:string)=>{
    return{
        type:LOGINSTATE,
        kakaoId:text,
    }
}

export const imageAction= (uri:string,name:string)=>{
    return{
        type:IMG_URI,
        imageUri:uri,
        imageName:name,
    }
}

export const userIdAction= (text:string|null)=>{
    return{
        type:USER_ID,
        userId:text,        
    }
}


  