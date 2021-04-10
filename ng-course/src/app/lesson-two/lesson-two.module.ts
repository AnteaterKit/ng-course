import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonTwoComponent } from './lesson-two.component';
import { LessonTwoRoutingModule } from './lesson-two.routing.module';
import { CheckboxModule } from '../cdk/components/checkbox/checkbox.module';
import { FormsModule } from '@angular/forms';
import { CardModule } from '../cdk/components/card/card.module';
import { ButtonModule } from '../cdk/components/button/button.module';
import { InputModule } from '../cdk/components/input/input.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LessonTwoRoutingModule,
    CheckboxModule,
    CardModule,
    ButtonModule,
    InputModule
  ],
  declarations: [LessonTwoComponent]
})
export class LessonTwoModule { }
