import { Component,OnInit, Input, Output, EventEmitter  } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quotes';

  quotes=[

    new Quote ("What is a mountain , ocean made of ?","A mountain is composed of tiny grains of earth. The ocean is made up of tiny drops of water. Even so, life is but an endless series of little details, actions, speeches, and thoughts. And the consequences whether good or bad of even the least of them are far-reaching.",1),

    new Quote (" Ever wondered why God created us different ?"," Because God gave you your makeup and superintended every moment of your past, including all the hardship, pain, and struggles, He wants to use your words in a unique manner. No one else can speak through your vocal cords, and, equally important, no one else has your story.",2),

    new Quote (" Music can change the world"," Normally music is considered as a moral law that gives soul to the universe, wings to the mind, flight to the imagination, charm to life and to everything.  Author --Latto",3),

    new Quote ("What is life ?"," Life is one big road with lots of signs.So when you ridind through the ruts, dont complicate your mind. Flee from hate, mischief and jealousy. Dont bury your thought, put your vision to reality. Wake Up and Live. Author--Bob Marley",4),

    new Quote ("You no longer compare yourself to their past or current victims.","It used to be that you were always ruminating over the narcissist’s endless comparisons concerning you and their other harem members. Now? You couldn’t give two shits about anyone they tried to claim was more appealing – because you know that whoever they’re idealizing now will inevitably be thrust off the pedestal and devalued later. You’re no longer part of the narcissist’s captive audience, waiting to be “chosen.” You’ve chosen yourself instead. You have a firm sense of your own self-worth and you now know that you cannot be compared in your unique beauty or strengths. And those dysfunctional love triangles? You know that some other victim is now being subjected to them – and thankfully, you’re not the one putting up with it.",5),

    new Quote ("You’re living for you – and being a total badass while doing it.","Perhaps in the initial stages, you were using all of the fuel you got from the break-up to motivate you to ‘move on’ and forward as intensely as possible. Perhaps a small part of you even wanted to ensure that your narcissistic ex saw how well you were doing without them; you may have even tried to fast-forward your healing by dating someone else too early on. Now, however, you find that you have no need to perform. You’re living just for you and you’re savoring life with a new sense of appreciation for the newfound freedom and peace it offers. You’re taking your time and going at your own pace without the need to compete with them and their public façade – instead, you’re giving yourself all the space you need to heal.",6)

  ]

  @Input() quote:Quote;
  @Output() isComplete = new  EventEmitter<boolean>();

  toogleDetails(index){
    this.quotes[index].showBody = ! this.quotes[index].showBody;
  }

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete)
  }

  completeQuote(isComplete, index){
    if(isComplete){
      this.quotes.splice(index, 1);
    }
  }

addNewquote(Quote){
  let QuoteLength = this.quotes.length;
Quote.id= QuoteLength+1
  this.quotes.push(Quote)
}


}
