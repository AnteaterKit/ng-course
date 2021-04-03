import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgCustomComponent } from './ng-custom.component';
import { NgCustomRoutingModule } from './ng-cutom.routing.module';
import { FormsModule } from '@angular/forms';
import { HighlightPipe } from '../cdk/pipes/highlight.pipe';
import { AppCurrencyPipe } from '../cdk/pipes/currency.pipe';
import { DragDirective } from '../cdk/directives/draganddrop.directive';
import { ButtonModule } from '../cdk/components/button/button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgCustomRoutingModule,
    ButtonModule
  ],
  declarations: [NgCustomComponent, HighlightPipe, AppCurrencyPipe, DragDirective],
  exports: [NgCustomComponent]
})
export class NgCustomModule { }
