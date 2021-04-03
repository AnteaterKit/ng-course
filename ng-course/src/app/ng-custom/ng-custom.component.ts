import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataAppService } from '../services/data.service';

@Component({
  selector: 'app-ng-custom',
  templateUrl: './ng-custom.component.html',
  styleUrls: ['./ng-custom.component.css']
})
export class NgCustomComponent implements OnInit {
  search = '';
  text = 'Докуметы контрагента';
  searchText = '';

  dragData1 = {name: 'dragggg'};
  dragData2 = null;

  lessons = 0;

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

  constructor( public dataAppService: DataAppService) { }

  ngOnInit(): void {
  }

  searchChanged($event: any): void {
    this.searchText = $event;
  }

  onDrag($event: any): void {
    console.log(333);
    this.dragData2 = $event;
  }

  lessonChanged($event: number): void {
    this.dataAppService.updateTotalLessons($event);
  }

}
