import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {
  @Input('user') user : any;
  dynamicClasses  = {'border' : true, 'feature' : false}

  onToggle(){
    this.dynamicClasses.border = !this.dynamicClasses.border
    this.dynamicClasses.feature = !this.dynamicClasses.feature
  }
}
