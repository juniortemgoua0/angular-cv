import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditGuard } from './guard/edit.guard';
import { EditComponent } from './pages/edit/edit.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path : '' , component : HomeComponent},
  {path : 'edit', canActivate : [EditGuard] , component : EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
