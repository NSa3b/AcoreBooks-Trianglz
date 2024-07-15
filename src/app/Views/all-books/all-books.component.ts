import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';

import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';

import { Book } from '../../_models/Book';
import { BooksService } from '../../Services/books.service';

import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'app-all-books',
  standalone: true,
  imports: [
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    TableModule,
    RouterLink,
    ConfirmDialogModule,
    PaginatorModule,
  ],
  providers: [BooksService, ConfirmationService, MessageService],
  templateUrl: './all-books.component.html',
  styleUrl: './all-books.component.css',
})
export class AllBooksComponent implements OnInit {
  books!: Book[];
  filteredBooks: Book[] = [];

  first: number = 0;
  rows: number = 2;
  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }

  constructor(
    private bookService: BooksService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}
  ngOnInit() {
    this.getAllBooks();
  }
  getAllBooks() {
    this.bookService.getAllBooks().subscribe((data) => {
      this.books = data;
      this.filteredBooks = data;
    });
  }
  Delete(event: Event, id: number) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure you want to delete this Book?',
      header: 'Delete Book',
      acceptButtonStyleClass:
        'bg-red-800 py-2.5 px-5 text-white font-semibold rounded-xl border-none focus:shadow-none',
      rejectButtonStyleClass:
        'bg-zinc-100 py-2.5 px-5 text-black font-semibold rounded-xl border-none focus:shadow-none',
      acceptIcon: 'none',
      rejectIcon: 'none',
      rejectLabel: 'cancel',
      acceptLabel: 'Delete',

      accept: () => {
        console.log(id);
        this.bookService.deleteBook(id).subscribe((data) => {
          console.log(this.books);
          this.getAllBooks();
        });
      },
      reject: () => {},
    });
  }
  onBookSearch(event: any) {
    let searchValue = event.target.value;
    if (searchValue === null) return;
    this.filteredBooks = this.books.filter(
      (book) =>
        book.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        book.author.toLowerCase().includes(searchValue.toLowerCase())
    );
  }
}
