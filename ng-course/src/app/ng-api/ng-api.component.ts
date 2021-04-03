import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-api',
  templateUrl: './ng-api.component.html',
  styleUrls: ['./ng-api.component.css']
})
export class NgApiComponent implements OnInit {
  items = ['angular', 'pipe', 'directive'];
  isLoading = false;

  cost = 6282323.212;

  date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  load(): void {
    this.isLoading = true;
  }

}
