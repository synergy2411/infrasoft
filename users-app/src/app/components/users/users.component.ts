import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { User } from 'src/app/model/user';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: "app-users",
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent{

  @Input('title') title: string;

  users: User[];

  moreInfo(usr: User) {
    alert(`${usr.firstName} is working with ${usr.company}!!!!`)
  }
  constructor(private dataService : DataService) {
    console.log("Constructor", this.title) }
  // ngOnChanges(changes: SimpleChanges) { console.log("ngOnChanges", changes) }
  ngOnInit() {
    // console.log("ngOnInit");
    // this.users = USER_DATA;
    // this.users = this.dataService.getUserData();
    this.dataService.getApiData()
    .subscribe(
      response => {
      console.log(response);
      this.users = <User[]>response;
    },
    err => console.log(err),
    () => {console.log("COMPLETED")});
  }
  // ngDoCheck() { console.log("ngDoCheck") }
  // ngAfterContentInit() { console.log("ngAfterContentInit") }
  // ngAfterContentChecked() { console.log("ngAfterContentChecked") }
  // ngAfterViewInit() { console.log("ngAfterViewInit") }
  // ngAfterViewChecked() { console.log("ngAfterViewChecked") }
  // ngOnDestroy() { console.log("ngOnDestroy") }
}
