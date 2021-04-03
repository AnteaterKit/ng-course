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

  currencies = [
    {
      value: 1268162,
      code: 'rub'
    },
    {
      value: 6787,
      code: 'eur'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  searchChanged($event: any): void {
    this.searchText = $event;
  }

}
