export interface Book {
  id: number;
  title: string;
  brief: string;
  author: string;
  imgURL: string;
  category: string;
  price: number;
  version: number;
  ISBN: number;
  edition?: number;
  release_date?: Date;
  older_version?: number;
}
