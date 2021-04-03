import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgApiComponent } from './ng-api.component';

const routes: Routes = [
    {
        path: '',
        component: NgApiComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NgApiRoutingModule { }
