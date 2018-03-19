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

    new Quote ("I Think This Is The Part Where I Move On For Good","I think this is the part where I delete our pictures because looking back at these memories is pointless now. Theres nothing to look back on. You’re a memory Im no longer nostalgic for. I think this is the part where I make peace with the fact that we’re not getting back together and we’re better off dating other people. I think this is the part where I no longer fantasize about a future with you in it I think this is the part where I finally understand why we werent meant to be. The part where I realize that theres someone out there better for me who checks all my boxes and treats me well and makes me realize that I was holding on to someone very wrong for me. I think this is the part where God shows me why you had to leave and why he had to replace you. I think this is the part where Im finally okay with someone else replacing you. The part where I no longer miss you or think about you.",9),

    new Quote (" You feel little to no desire to reach out to them.","Survivors of narcissistic abuse usually encounter a heavy period of detoxing from the addictive toxicity of the relationship in the early stages of healing. They may relapse into wanting to reach out to their former partner because they are trauma bonded to them through the intense experiences of abuse. Once they’ve remained No Contact for a suitable period of time, however, these cravings begin to subside and survivors start to get in touch with the reality of the abuse they went through. They reach an unsettling amount of indifference towards the narcissist that is both unfamiliar yet exciting. This new indifference and neutrality are signs that you are healing and moving forward. Although it may feel uncomfortable at first to no longer have such strong emotions towards someone who terrorized you, it is a good sign that you’re finally severing the traumatic bond you once had with them.",7),

    new Quote ("  You no longer look them up on social media.","This is a huge milestone and should not be discounted, especially given the amount of emotional backpedaling that can occur when a survivor gives into the craving to check up on a toxic ex on a social media platform. Narcissists rely on the fact that their victims will be so traumatized that they will search for information about them post-breakup. They even tailor their photos and status updates to provoke their former victims into responding to them – it’s all a sick and twisted power play meant to bring the victim back into the vicious cycle of manipulation. However, survivors who have empowered themselves to detach from their abusers will find that they no longer feel an intense need to know anything about the narcissist or his/her whereabouts. Instead, they find themselves more anxious about making sure that their narcissist no longer has access to them on any social media platform.",5),

    new Quote ("You could not care less about who they are or aren’t dating.","When you were in the dysfunctional relationship, you were constantly made to walk on eggshells at the possibility of being replaced. You were triangulated and toyed with constantly, made to feel defective, less than and less desirable than whoever the narcissistic abuser compared you to. Now that you’ve gone through the grieving process and done the difficult work of healing your core wounds, you realize that you are irreplaceable and that the narcissist is the defective one, not you. You know that the person they’ve ensnared in their toxic web is just another victim and will inevitably go through the same cycle of abuse, so you’ve taken yourself out of the equation completely." ,5),

    new Quote ("You no longer compare yourself to their past or current victims.","It used to be that you were always ruminating over the narcissist’s endless comparisons concerning you and their other harem members. Now? You couldn’t give two shits about anyone they tried to claim was more appealing – because you know that whoever they’re idealizing now will inevitably be thrust off the pedestal and devalued later. You’re no longer part of the narcissist’s captive audience, waiting to be “chosen.” You’ve chosen yourself instead. You have a firm sense of your own self-worth and you now know that you cannot be compared in your unique beauty or strengths. And those dysfunctional love triangles? You know that some other victim is now being subjected to them – and thankfully, you’re not the one putting up with it.",4),

    new Quote ("You’re living for you – and being a total badass while doing it.","Perhaps in the initial stages, you were using all of the fuel you got from the break-up to motivate you to ‘move on’ and forward as intensely as possible. Perhaps a small part of you even wanted to ensure that your narcissistic ex saw how well you were doing without them; you may have even tried to fast-forward your healing by dating someone else too early on. Now, however, you find that you have no need to perform. You’re living just for you and you’re savoring life with a new sense of appreciation for the newfound freedom and peace it offers. You’re taking your time and going at your own pace without the need to compete with them and their public façade – instead, you’re giving yourself all the space you need to heal.",2)

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
