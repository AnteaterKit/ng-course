import { DomPortalHost, Portal, PortalHost, TemplatePortal } from '@angular/cdk/portal';
import { AfterViewInit, ContentChildren, Input, OnChanges, QueryList, SimpleChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { TabItemComponent } from './tab-item';

@Component({
  selector: 'tab-content',
  styleUrls: ['./tab.component.scss'],
  template: `
    <ng-template [cdkPortalOutlet]="selectedPortal"></ng-template>
  `
})
// tslint:disable-next-line:component-class-suffix
export class TabContent implements OnInit, AfterViewInit, OnChanges {
  @Input()
  content: any;
  selectedPortal!: Portal<any>;
  templatePortal!: TemplatePortal<any>;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    // tslint:disable-next-line:no-unused-expression
    console.log(changes);
    if ( changes.content) {
      this.selectedPortal = changes.content.currentValue;
    }
  }
  ngOnInit(): void {

  }


  ngAfterViewInit(): void {

  }

}
