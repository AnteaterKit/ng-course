import { AfterViewInit, Component, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import {TemplatePortal} from '@angular/cdk/portal';

@Component({
  selector: 'tab-item',
  templateUrl: './tab-item.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabItemComponent implements OnInit, AfterViewInit {
  @Input()
  label: string | undefined;
  isSelected = false;
  private contentPortal: TemplatePortal | null = null;
   @ViewChild(TemplateRef, {static: true}) implicitContent!: TemplateRef<any>;
 // @ViewChild('ref') implicitContent2!: TemplateRef<any>;
  get content(): TemplatePortal | null {
    return this.contentPortal;
  }
  get selected(): boolean | null {
    return this.isSelected;
  }
  constructor(
    private viewContainerRef: ViewContainerRef) {
  }
  ngAfterViewInit(): void {
    console.log(2);
    this.contentPortal = new TemplatePortal(this.implicitContent, this.viewContainerRef);
  }
  ngOnInit(): void {
   
  }

  setSelected(): void {
    this.isSelected = true;
  }

  setUnSelected(): void {
    this.isSelected = false;
  }


}
