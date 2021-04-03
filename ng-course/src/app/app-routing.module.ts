import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'api',
    loadChildren:  () => import('./ng-api/ng-api.module').then(x => x.NgApiModule),
  },
  {
    path: 'custom',
    loadChildren:  () => import('./ng-custom/ng-custom.module').then(x => x.NgCustomModule),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
