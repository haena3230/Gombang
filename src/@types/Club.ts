// club 관련 데이터 타입

export interface ClubInterface {
  manager_uid_list?: Array<string>;
  certification?: boolean;
  type?: string;
  classification?: number;
  membership_fee?: number;
  member_count?: string;
  member_uid_list?: Array<string>;
  recruitment?: boolean;
  _id: string;
  name?: string;
  image?: string;
}
