import { Component, OnInit,Input } from '@angular/core';
import { Router, RouterLink} from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { BookCategoryService } from '../../Services/book-category.service';
import { BooksService } from '../../Services/books.service';
import { Book } from '../../_models/Book';
import { category } from '../../_models/category';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-edit-book',
  standalone: true,
  imports: [
    InputTextModule,
    DropdownModule,
    CalendarModule,
    InputNumberModule,
    InputTextareaModule,
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.css'
})
export class EditBookComponent implements OnInit {
  bookId!:number;
  imgPath!:string;


  categories: category[]| undefined;
  older_versions = [
    { name: '1st Edition' },
    { name: '2nd Edition' },
    { name: '3rd Edition' },
  ];
  bookForm!: FormGroup;
  bookCover: File | null = null;
  bookCoverURL: String = '';

  bookPDF: File | null = null;
  bookPDFName: String = '';
  ValidISBN: Boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: BookCategoryService,
    private booksService: BooksService,
    private router: Router,
  ) {
    this.bookForm = this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
      brief: new FormControl('', [
        Validators.required,
        Validators.maxLength(800),
      ]),
      author: new FormControl('', [Validators.required]),
      imgURL: new FormControl('', [Validators.required]),
      PDF: new FormControl('', [Validators.required]),
      category: new FormControl<category|null>(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      version: new FormControl('', [Validators.required]),
      ISBN: new FormControl('', [Validators.required]),
      edition: new FormControl(''),
      release_date: new FormControl<Date | null>(null),
      older_versions: new FormControl(null),
    });
  }
  @Input()
  set id(bookId: number) {
    this.booksService.getBookById(bookId).subscribe((data)=>{
      console.log(data);
      this.bookId=bookId;
      this.imgPath=data.imgURL
      console.log(this.imgPath);


      if(data){
       this.bookForm.patchValue({
        title:data?.title,
        brief:data?.brief,
        author:data?.author,
        category:data?.category,
        price:data?.price,
        version:data?.version,
        ISBN:data?.ISBN,
        edition:data?.edition,
        release_date:data?.release_date,
        older_versions:data?.older_versions,
       });
       console.log(this.bookForm.value)
      }
   
    })
  }
  ngOnInit() {
    this.getAllCategories();
  }
  getAllCategories() {
    this.categoryService.getAllCategories().subscribe((data) => {
      this.categories = data;
    });
  }
  checkISBN(isbn: string) {
    let regex = new RegExp(
      /^(?=(?:[^0-9]*[0-9]){10}(?:(?:[^0-9]*[0-9]){3})?$)[\d-]+$/
    );
    if (regex.test(isbn) == true) {
      this.ValidISBN = true;
    } else {
      this.ValidISBN = false;
      this.bookForm.controls['ISBN'].setErrors({ incorrect: true });
    }
  }
  onSubmit() {
    this.bookForm.markAllAsTouched();
    let isbn = this.bookForm.value.ISBN;
    if (isbn != '') {
      this.checkISBN(isbn);
    }
    if (this.bookForm.valid) {
      this.booksService.editBook(this.bookId,this.bookForm.value).subscribe((data) => {
        this.router.navigate(['/bookDetails',this.bookId]);
      });
    } else {
      this.bookForm.markAsTouched();
    }
  }
  onCoverChange(event: any) {
    // if (event.target.files.length > 0) {
    //   let imgFile = event.target.files[0];
    //   this.bookCover = imgFile;
    //   this.bookCoverURL = URL.createObjectURL(imgFile);
    // }
    // if (this.bookCover) {
    //   const reader = new FileReader();
    //   reader.readAsDataURL(this.bookCover);
    //   reader.onload = () => {
    //     const base64String = reader.result as string;
    //     this.bookForm.patchValue({ imgURL: base64String });
    //   };
    // }
  }
  onFileChange(event: any) {
    // if (event.target.files.length > 0) {
    //   let PDFFile = event.target.files[0];
    //   this.bookPDF = PDFFile;
    //   this.bookPDFName = event.target.files[0].name;
    // }
    // if (this.bookPDF) {
    //   const reader = new FileReader();
    //   reader.readAsDataURL(this.bookPDF);
    //   reader.onload = () => {
    //     const base64String = reader.result as string;
    //     this.bookForm.patchValue({ PDF: base64String });
    //   };
    // }
  }
}

