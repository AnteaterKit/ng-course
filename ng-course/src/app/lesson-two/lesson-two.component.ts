import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson-two',
  templateUrl: './lesson-two.component.html',
  styleUrls: ['./lesson-two.component.css']
})
export class LessonTwoComponent implements OnInit {
  isChecked = false;
  tab1 = 'tab1';
  tab2 = 'tab2';

  tabData = {
    tab1: 4,
    tab2: 5
  };

  constructor() { }

  ngOnInit() {
  }

}
