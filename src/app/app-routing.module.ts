import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: '', pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () => import('./Modules/loading-page/loading-page.module')
      .then(m => m.LoadingPageModule)
  },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
