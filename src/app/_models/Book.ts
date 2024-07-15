import { category } from "./category";
export interface Book {
  id: number;
  title: string;
  brief: string;
  author: string;
  imgURL: string;
  PDF: File;
  category: category;
  price: number;
  version: number;
  ISBN: number;
  edition?: number;
  release_date?: Date;
  older_versions?:string;
}
