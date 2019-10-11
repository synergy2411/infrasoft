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

  // output = new Promise((resolve, reject) => {
  //   setTimeout( () => {
  //     resolve("Here the data comes....");
  //   }, 3000);
  // });

  output = new Promise(function(resolve, reject){
    setTimeout( function(){
      resolve("Here the data comes....");
    }, 3000);
  });

}
