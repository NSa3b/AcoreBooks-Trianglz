import { Component, OnInit, Input } from '@angular/core';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { provideRouter } from '@angular/router';

import { Book } from '../../_models/Book';
import { BooksService } from '../../Services/books.service';

import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [RouterLink, ConfirmDialogModule],
  providers: [BooksService, ConfirmationService, MessageService],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css',
})
export class BookDetailsComponent implements OnInit {
  book!:Book;
  bookPages:number=200;
  toRead:number=4;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bookService: BooksService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}
  
  @Input()
  set id(bookId: number) {
    this.bookService.getBookById(bookId).subscribe((data)=>{
      console.log(data);
      this.book=data;
    })
  }

  ngOnInit() {

  }

  Delete(event: Event,id:number) {
    console.log('ay7aga');
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
        console.log('id');
        this.bookService.deleteBook(id).subscribe((data)=>{
          this.router.navigateByUrl("/allBooks")
        })
      },
      reject: () => {},
    });
  }
}
