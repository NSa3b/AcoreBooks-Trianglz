import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router,RouterLink, ActivatedRoute } from '@angular/router';

import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TableModule } from 'primeng/table';

import { Book } from '../../_models/Book';
import { BooksService } from '../../Services/books.service';



@Component({
  selector: 'app-all-books',
  standalone: true,
  imports: [IconFieldModule, InputIconModule, InputTextModule, TableModule,RouterLink,ConfirmDialogModule,],
  providers: [BooksService],
  templateUrl: './all-books.component.html',
  styleUrl: './all-books.component.css',
})
export class AllBooksComponent {
  books!: Book[];
  constructor(private bookService: BooksService, private confirmationService: ConfirmationService, private messageService: MessageService) {}
  ngOnInit() {
    this.getAllBooks();
    
  }
  getAllBooks(){
    this.bookService.getAllBooks().subscribe((data) => {
      this.books = data;
      console.log(this.books);
    })



  }
}
