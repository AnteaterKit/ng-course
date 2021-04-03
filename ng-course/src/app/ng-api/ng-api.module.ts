import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApiComponent } from './ng-api.component';
import { NgApiRoutingModule } from './ng-api.routing.module';

@NgModule({
  imports: [
    CommonModule,
    NgApiRoutingModule
  ],
  declarations: [NgApiComponent],
  exports: [NgApiComponent]
})
export class NgApiModule { }
