import { Routes } from '@angular/router';
import { LoginComponent } from './Layout/login/login.component';
import { AdminDashboardComponent } from './Layout/admin-dashboard/admin-dashboard.component';
import { AllBooksComponent } from './Views/all-books/all-books.component';
import { AddBookComponent } from './Views/add-book/add-book.component';
import { BookDetailsComponent } from './Views/book-details/book-details.component';

export const routes: Routes = [
  {
    path: 'dashboard',
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
        path: 'bookDetails',
        component: BookDetailsComponent, 
      },
    ],
  },
  {
    path: '',
    component:LoginComponent
  },
];
