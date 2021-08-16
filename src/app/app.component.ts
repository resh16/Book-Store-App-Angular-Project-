import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Books';

  constructor()
  {
    localStorage.setItem('myBooks',JSON.stringify(this.books));

    let data = localStorage.getItem('books');
    if (data) 
    {
      this.books = JSON.parse(data);
    }
  }

  books = [
    {
      isbn : '1001',
      title : 'The Dairy of a Young Girl',
      author : 'Anne Frank',
      price : 'Rs 215',
      description : 'Writing in a diary is a really strange experience for someone like me.'
    },
    {
      isbn : '1002',
      title : "The Book Thief",
      author : 'Markus Zusak',
      price : 'Rs 280',
      description : 'Life affirming, triumphant and tragic . . . masterfully told. . . but also a wonderful page-turner'
    },
    {
      isbn : '1003',
      title : 'The Secret',
      author : 'Rhonda Byrne',
      price : 'Rs 265',
      description : '‘The Secret’ is a book that puts light upon how the law of attraction works and how it can do wonders if combined with positivity. '
    }
  ]

  onBookCreated(newBook : {isbn : string,title : string,author : string,price : string,description:string})
  {
    this.books.push(newBook);
  }

  

}
