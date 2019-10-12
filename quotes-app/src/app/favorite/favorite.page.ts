import { Component, OnInit } from '@angular/core';
import { IQuote } from '../model/quote.model';
import { QuoteService } from '../services/quote.service';
import { ModalController } from '@ionic/angular';
import { QuotePage } from '../quote/quote.page';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {

  favQuotes : IQuote[] = [];
  
  constructor(private quoteService : QuoteService,
              private modalCtrl : ModalController) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.favQuotes = this.quoteService.getFavQuotes();
  }

  onQuoteSelect(quote: IQuote){
    this.modalCtrl.create({
      component : QuotePage,
      componentProps: {
        quote : quote
      }
    }).then(modal => {
      modal.present();
    })
  }
}
