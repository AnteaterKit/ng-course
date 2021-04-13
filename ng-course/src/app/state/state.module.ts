import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateComponent } from './state.component';
import { StateRoutingModule } from './state.module.routing';
import { TabModule } from '../cdk/components/tab/tab.module';
import { CommonParamComponent } from './components/common-param/common-param.component';
import { ServiceListComponent } from './components/service-list/service-list.component';
import { MakeFurniComponent } from './components/service-list/make-furni/make-furni.component';
import { CheckboxModule } from '../cdk/components/checkbox/checkbox.module';
import { InsurenceComponent } from './components/service-list/insurence/insurence.component';
import { InputModule } from '../cdk/components/input/input.module';

@NgModule({
  imports: [
    CommonModule,
    StateRoutingModule,
    TabModule,
    CheckboxModule,
    InputModule
  ],
  exports: [StateComponent],
  declarations: [StateComponent, CommonParamComponent, ServiceListComponent, MakeFurniComponent, InsurenceComponent]
})
export class StateModule { }
