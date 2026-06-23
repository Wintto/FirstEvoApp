import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';  
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book',
  standalone: true,  
  imports: [JsonPipe],  
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book: any;

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.book = this.booksService.getBook();
    console.log('Book data from service:', this.book);
  }
}