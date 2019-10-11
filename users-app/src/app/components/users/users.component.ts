import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: "app-users",
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy {

  @Input('title') title : string;

  users: User[] = [{
    firstName: "Bill",
    lastName: "Gates",
    income: 50000,
    dob: new Date("Jan 12, 1965"),
    isWorking: true,
    company: "Microsoft",
    image: './assets/images/bill.jpg',
    vote: 110
  },{
    firstName: "Steve",
    lastName: "Jojbs",
    income: 0,
    dob: new Date("Feb 2, 1965"),
    isWorking: false,
    company: "Microsoft",
    image: './assets/images/steve.png',
    vote: 120
  },{
    firstName: "Tim B.",
    lastName: "Lee",
    income: 30000,
    dob: new Date("Dec 12, 1965"),
    isWorking: true,
    company: "World Wide Web",
    image: './assets/images/tim.jpg',
    vote: 90
  }]

  moreInfo(usr: User) {
    alert(`${usr.firstName} is working with ${usr.company}!!!!`)
  }
  constructor(){console.log("Constructor", this.title)}
  ngOnChanges(changes : SimpleChanges) { console.log("ngOnChanges", changes) }
  ngOnInit() { console.log("ngOnInit") }
  ngDoCheck() { console.log("ngDoCheck") }
  ngAfterContentInit() { console.log("ngAfterContentInit") }
  ngAfterContentChecked() { console.log("ngAfterContentChecked") }
  ngAfterViewInit() { console.log("ngAfterViewInit") }
  ngAfterViewChecked() { console.log("ngAfterViewChecked") }
  ngOnDestroy() { console.log("ngOnDestroy") }
}
