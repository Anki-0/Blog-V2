export type Iauthor = {
  user_role: string;
  _id: string;
  user_email: string;
  user_nickname: string;
  createdAt: string;
  updatedAt: string;
  user_passwordChangedAt: string;
};

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
