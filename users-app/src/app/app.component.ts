import { Component, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection : ChangeDetectionStrategy.Default
})
export class AppComponent {
  title = 'users-app';
  showDiv : boolean = true;
  constructor(private cdRef :ChangeDetectorRef){
    // this.cdRef.
  }
}
