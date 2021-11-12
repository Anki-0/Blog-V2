export interface IPostData {
  _id: string;
  post_tags: [strings];
  likecount: number;
  post_title: string;
  post_author: string;
  post_content: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IAuthourData {
  _id: string;
  user_name: string;
  user_nickname: string;
  user_role: string;
  user_status: string;
  user_registered: Date;
  updatedAt: Date;
  createdAt: Date;
  user_passwordChangedAt: string;
  passwordResetExp: Date;
  passwordResetToken: string;

  user_description: string;
  user_country: string;
  user_state: string;
  user_occupation: string;
  user_birthplace: string;
  user_dob: Date;
  user_phone: number;
  user_email: string;
  user_tagline: string;
  user_website: string;
}

export type IPost = {
  createdAt: string;
  likecount: number;
  post_author: Iauthor;
  post_content: string;
  post_tags: [string];
  post_title: string;
  status: string;
  updatedAt: string;
  _id: string;
};

export type Iauthor = {
  user_role: string;
  _id: string;
  user_email: string;
  user_nickname: string;
  createdAt: string;
  updatedAt: string;
  user_passwordChangedAt: string;
};

export interface ApiPosts {
  result: number;
  status: string;
  resquestedAt: string;
  posts: IPost[];
}

export interface SpecificPost {
  status: string;
  post: IPost;
}

export interface Iauth {
  status: string;
  token: string;
  message: string;
  isAuthenticated: boolean;
}
export interface IcheckAuth {
  status: string;
  isAuthenticated: boolean;
  user: Iauthor;
}

export interface UserInterface {
  _id: string;
  user_role: string;
  user_email: string;
  user_nickname: string;
  createdAt: date;
  updatedAt: date;
  user_dob: string;
  user_name: string;
  user_phone: string;
  user_registered: Date;
  user_status: string;
  __v: 0;
}
