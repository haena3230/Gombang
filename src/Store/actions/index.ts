// 액션
export const LOGINSTATE = 'LOGINSTATE'
export const IMG_URI = 'IMG'
export const USER_ID = 'USER_ID'
export const CLUB_ID = 'CLUB_ID'
export const FOLDER_ID ='FOLDER_ID' 
export const NICKNAME='NICKNAME'
export const USERIMG='USERIMG'
export const USER_DATA='USER_DATA'

export const loginStateAction= (text:string)=>{
    return{
        type:LOGINSTATE,
        kakaoId:text,
    }
}

export const imageAction= (uri:string,name:string|undefined)=>{
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
export const clubIdAction= (text:string|null)=>{
    return{
        type:CLUB_ID,
        clubId:text,        
    }
}
export const folderIdAction= (text:string|null)=>{
    return{
        type:FOLDER_ID,
        folderId:text,        
    }
}
export const nicknameAction= (text:string|null)=>{
    return{
        type:NICKNAME,
        nickname:text,        
    }
}
export const userImgAction= (text:string|null)=>{
    return{
        type:USERIMG,
        image:text,        
    }
}
export const userDataAction= (mail:string|null,number:string|null,birth:string|null)=>{
    return{
        type:USER_DATA,
        email:mail,        
        number:number,
        birth:birth,
    }
}
  