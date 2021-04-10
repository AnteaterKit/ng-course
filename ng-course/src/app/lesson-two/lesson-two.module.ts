import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonTwoComponent } from './lesson-two.component';
import { LessonTwoRoutingModule } from './lesson-two.routing.module';
import { CheckboxModule } from '../cdk/components/checkbox/checkbox.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LessonTwoRoutingModule,
    CheckboxModule
  ],
  declarations: [LessonTwoComponent]
})
export class LessonTwoModule { }
