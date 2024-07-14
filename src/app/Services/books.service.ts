import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../_models/Book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  apiURL='http://localhost:3000/books'

  constructor(private http:HttpClient) { }

  getAllBooks():Observable<Book[]>{
    return this.http.get<Book[]>(`${this.apiURL}`);
  }

  getBookById(id:number):Observable<Book>{
    return this.http.get<Book>(`${this.apiURL}/${id}`);
  }

  addBook(book:Book):Observable<Book>{
    return this.http.post<Book>(`${this.apiURL}`, book);
  }

  editBook(id:number,book:Book){
    return this.http.put<Book>(`${this.apiURL}/${id}`, book);
  }

  deleteBook(id:number){
    return this.http.delete<Book>(`${this.apiURL}/${id}`);

  }

}
