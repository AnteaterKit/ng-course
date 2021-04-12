import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab.component';
import { TabItemComponent } from './tab-item';
import { TabContent } from './tab-body';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
  imports: [
    CommonModule,
    PortalModule
  ],
  exports: [TabComponent, TabItemComponent],
  declarations: [TabComponent, TabItemComponent, TabContent]
})
export class TabModule { }
