import { Component } from '@angular/core';

@Component({
  selector : "app-users",
  templateUrl : './users.component.html',
  styleUrls : ['./users.component.css']
})
export class UsersComponent{

  user : any = {
    firstName : "Bill",
    lastName : "Gates",
    income : 50000,
    dob : new Date("Jan 12, 1965"),
    isWorking : true,
    company : "Microsoft",
    image : './assets/images/bill.jpg',
    vote : 110
  }

  moreInfo(usr : any){
    alert(`${usr.firstName} is working with ${usr.company}!!!!`)
  }

}
