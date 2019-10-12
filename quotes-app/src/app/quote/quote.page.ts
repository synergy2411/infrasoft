import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IQuote } from '../model/quote.model';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.page.html',
  styleUrls: ['./quote.page.scss'],
})
export class QuotePage implements OnInit {

  @Input('quote') quote : IQuote;

  constructor() { }

  ngOnInit() {
    // console.log("[QUOTE]", this.quote);
  }
 

}
