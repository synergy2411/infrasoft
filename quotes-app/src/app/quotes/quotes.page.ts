import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../services/quote.service';
import { IQuote } from '../model/quote.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.page.html',
  styleUrls: ['./quotes.page.scss'],
})
export class QuotesPage implements OnInit {

  selectedCategory: {
    category: string, quotes: IQuote[],
    icon: string
  } = null;

  constructor(private quoteService: QuoteService,
    private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.selectedCategory = this.quoteService.getSelectedCategory();
  }

  onFavorite(quote: IQuote) {
    this.alertCtrl.create({
      header: "Are you Sure?",
      message: "Are you sure to make this favorite?",
      buttons: [{
        text: "Yes, Please go ahead.",
        handler: () => {
          this.quoteService.addQuoteToFavorite(quote);
        }
      }, {
        text: "No, I changed my mind.",
        role: 'Cancel'
      }]
    }).then(alert => alert.present());
  }

  onUnfavorite(quote: IQuote) {
    this.quoteService.removeQuoteFromFavorite(quote);
  }

  isQuoteSeleted(quote : IQuote){
    return this.quoteService.isQuoteFavorite(quote);
  }
}
