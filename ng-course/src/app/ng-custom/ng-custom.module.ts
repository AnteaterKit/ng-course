import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgCustomComponent } from './ng-custom.component';
import { NgCustomRoutingModule } from './ng-cutom.routing.module';

@NgModule({
  imports: [
    CommonModule,
    NgCustomRoutingModule
  ],
  declarations: [NgCustomComponent],
  exports: [NgCustomComponent]
})
export class NgCustomModule { }
