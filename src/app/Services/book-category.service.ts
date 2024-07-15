import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { category } from '../_models/category';

@Injectable({
  providedIn: 'root'
})
export class BookCategoryService {
  apiURL='http://localhost:3000/Categories'

  constructor(private http:HttpClient) { }

  getAllCategories():Observable<category[]>{
    return this.http.get<category[]>(`${this.apiURL}`);
  }

}
