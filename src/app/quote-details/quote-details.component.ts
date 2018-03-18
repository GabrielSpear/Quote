import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
    @Input() quote:Quote;
    @Output() isComplete = new EventEmitter<boolean>();

      quoteComplete(complete:boolean){
        this.isComplete.emit(complete);
      }





      like : number= 2;
      dislike : number =5;
      x:string = "-1"

      likes(){
        this.like = this.like+1;
      }
      dislikes(){
        this.dislike = this.dislike+1;
      }



  constructor() { }

  ngOnInit() {
  }

}
