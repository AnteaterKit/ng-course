import { ContentChildren, QueryList } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { TabItemComponent } from './tab-item';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  @ContentChildren(TabItemComponent, {descendants: true}) public tabs!: QueryList<TabItemComponent>;
  public allTabs: any;
  constructor() { }

  ngOnInit(): void {
    // tslint:disable-next-line:no-non-null-assertion
    this.tabs!.changes.subscribe(x => {
      this.allTabs = x;
    });
  }

  selected(tab: TabItemComponent): void {
    this.tabs.forEach(x => {
      x.setUnSelected();
    
    });
    tab.setSelected();
  }

}
