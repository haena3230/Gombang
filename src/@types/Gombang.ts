import {ObjectID} from 'mongodb';

// club 컬렉션
export interface ClubInterface {
  _id?: ObjectID; // 필수
  name?: string;
  campus?: string;
  image?: string; // 이미지 파일명
  text?: string; // 동아리 소개글
  president_id?: ObjectID;
  membership_fee?: number;
  manager_id_list?: Array<ObjectID>;
  certification?: boolean; // 중앙 인증
  type?: string; // 중앙, 연합, 일반
  exposure?: boolean; // 공개, 비공개
  classification?: string; // 학술, 문예창작, 봉사, 체육, 종교..
  member_count?: number;
  member_id_list?: Array<ObjectID>;
  recruitment?: boolean;
  hashtags?: Array<string>;
}

// user
export interface UserInterface {
  _id?: ObjectID;
  kakaoId?: string; //카카오로그인, 필수
  token?: string; // 파베 어스 + FCM
  login?: boolean; // 로그인 여부
  name?: string;
  image?: string;
  email?: string;
  phone?: string;
  birth?: string;
  student_number?: number; // 학번
  college?: string;
  department?: string;
  nickname?: Map<string, string>; // 동아리별 닉네임
  signed_club_list?: Array<ObjectID>;
  favorate_club_list?: Array<ObjectID>;
}

// event
export interface EventInterface {
  _id?: ObjectID;
  host_id?: ObjectID; // 글 작성자 (필수)
  host_club_id?: ObjectID; // 주최 동아리
  text?: string; // 필수
  banner?: string; //배너 // 필수
  image?: string;
  like_count?: number;
  liker_id_list?: Array<ObjectID>;
  participation_fee?: number;
  participation_count?: number;
  participation_id_list?: Array<ObjectID>;
}
