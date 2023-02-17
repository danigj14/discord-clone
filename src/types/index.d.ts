export type Id = string;

export interface UserData {
  _id: Id;
  email: string;
  profilePicture: string;
}

export interface UserLoginResult {
  token: string;
}

export interface PrivateMessage {
  _id: Id;
  sender: Id;
  receiver: Id;
  text: string;
  createDate: Date;
}

export interface FriendRequest {
  _id: Id;
  sender: Id;
  receiver: Id;
}
