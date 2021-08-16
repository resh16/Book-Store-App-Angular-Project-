import { Component, OnInit ,Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {

 

  @Output() bookCreated = new EventEmitter<{isbn : string,title : string,author : string,price : string,description : string}>();

  constructor() { }

  ngOnInit(): void {
  }

  
  
  onAddBook(isbnNo : string,booktitle : string,bookauthor : string,bookprice : string,description:string)
  {
      this.bookCreated.emit({
        isbn : isbnNo,
        title : booktitle,
        author : bookauthor,
        price : bookprice,
        description : description
      })
  }
}