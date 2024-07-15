import { Routes } from '@angular/router';
import { LoginComponent } from './Layout/login/login.component';
import { AdminDashboardComponent } from './Layout/admin-dashboard/admin-dashboard.component';
import { AllBooksComponent } from './Views/all-books/all-books.component';
import { AddBookComponent } from './Views/add-book/add-book.component';
import { BookDetailsComponent } from './Views/book-details/book-details.component';
import { EditBookComponent } from './Views/edit-book/edit-book.component';
import { PageNotFoundComponent } from './Layout/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path:'',redirectTo:'/login',pathMatch:"full"
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: '',
    component: AdminDashboardComponent, 
    children: [
      {
        path: 'allBooks', 
        component: AllBooksComponent, 
      },
      {
        path: 'addBook',
        component: AddBookComponent, 
      },
      {
        path: 'bookDetails/:id',
        component: BookDetailsComponent, 
      },
      {
        path: 'editBook/:id',
        component: EditBookComponent, 
      },
    ],
  },
  
  { path: '**', component: PageNotFoundComponent },
];
