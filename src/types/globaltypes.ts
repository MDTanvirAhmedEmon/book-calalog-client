export type IBook = {
  _id: any;
  title: string;
  imageUrl: string;
  author: string;
  genre: string;
  authorId?: string;
  reviews?: string; 
  };
export type IBookQuery = {
  id: string,
  data: {
    _id: any;
    title: string;
    imageUrl: string;
    author: string;
    genre: string;
    authorId?: string;
    reviews?: string; 
  }
  };

export interface IUser {
    _id: any;
    name: string | null;
    email: string | null;
    password: string | null;
}