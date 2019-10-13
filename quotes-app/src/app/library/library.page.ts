import { Component, OnInit } from '@angular/core';
import { IQuote } from '../model/quote.model';
import { QUOTES_DATA } from '../model/quotes';
import { Router } from '@angular/router';
import { QuoteService } from '../services/quote.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {

  quotesData: { category: string, quotes: IQuote[], icon: string }[] = [];

  constructor(private router: Router,
    private quoteService: QuoteService) { }

  ngOnInit() {
    this.quoteService.getQuotesData()
      .subscribe(response => {
        this.quotesData = <{ category: string, quotes: IQuote[], icon: string }[]>response;
      });
  }

  onCategorySelect(collection: { category: string, quotes: IQuote[], icon: string }) {
    console.log(collection);
    this.quoteService.setSelectedCategory(collection);
    this.router.navigate(['tabs/quotes']);
  }
}
