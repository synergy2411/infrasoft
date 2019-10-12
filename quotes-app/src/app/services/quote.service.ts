import { Injectable } from "@angular/core";
import { IQuote } from '../model/quote.model';

@Injectable()
export class QuoteService{
    private selectedCategory : {category : string, quotes : IQuote[], 
        icon : string} = null;

    private favQuotes : IQuote[] = [];

    getFavQuotes(){
        return this.favQuotes.slice(0);
    }

    addQuoteToFavorite(quote : IQuote){
        this.favQuotes = [...this.favQuotes, quote];
        console.log(this.favQuotes);
    }

    removeQuoteFromFavorite(quote : IQuote){
        const position = this.favQuotes.findIndex(q => q.id === quote.id);
        this.favQuotes.splice(position, 1);
        console.log(this.favQuotes);
    }

    isQuoteFavorite(quote : IQuote){
        const quotes = this.favQuotes.find(q => q.id === quote.id);
        if(quotes){
            return true;
        }
    }

    getSelectedCategory(){
        return this.selectedCategory;
    }
    
    setSelectedCategory(collection : {category : string, quotes : IQuote[], 
            icon : string}){
        this.selectedCategory = collection;
    }

}