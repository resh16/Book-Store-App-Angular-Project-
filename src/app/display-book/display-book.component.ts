import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-display-book',
  templateUrl: './display-book.component.html',
  styleUrls: ['./display-book.component.css']
})
export class DisplayBookComponent implements OnInit {
  updateP = false
  updateD = false

  
  

  @Input()
  books!: { isbn: string; title: string; author: string; price: string; description: string; };

  priceUpdate(){

    this.updateP = true

  }
  updateValueD(updatedValue:string){

  }

  DescriptionUpdate(){

    this.updateD = true

  }
  

  constructor() { }

  ngOnInit(): void {
  }
  
  isCollapsed : boolean = true ;

  toggleCollapse()
  {
    this.isCollapsed = !this.isCollapsed;
  }

  
  
}
