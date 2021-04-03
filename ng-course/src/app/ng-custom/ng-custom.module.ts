import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgCustomComponent } from './ng-custom.component';
import { NgCustomRoutingModule } from './ng-cutom.routing.module';
import { FormsModule } from '@angular/forms';
import { HighlightPipe } from '../cdk/pipes/highlight.pipe';
import { AppCurrencyPipe } from '../cdk/pipes/currency.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgCustomRoutingModule
  ],
  declarations: [NgCustomComponent, HighlightPipe, AppCurrencyPipe],
  exports: [NgCustomComponent]
})
export class NgCustomModule { }
