import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-user-img',
  templateUrl: './user-img.component.html',
  styleUrls: ['./user-img.component.css']
})
export class UserImgComponent {

  @Input('xyz') user : any;
  @Output('childEvent') childEvent = new EventEmitter<any>();

  onMoreInfo(user : any){
    this.childEvent.emit(user)
  }
}
