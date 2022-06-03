import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainHomeComponent } from './views/main-home/main-home.component';

const routes: Routes = [
  {path: '', redirectTo: 'main-home', pathMatch: 'full'},
  {path: 'main-home', component: MainHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
