import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-custom',
  templateUrl: './ng-custom.component.html',
  styleUrls: ['./ng-custom.component.css']
})
export class NgCustomComponent implements OnInit {
  search = '';
  text = 'Докуметы контрагента';
  searchText = '';
  constructor() { }

  ngOnInit(): void {
  }

  searchChanged($event: any): void {
    this.searchText = $event;
  }

}
