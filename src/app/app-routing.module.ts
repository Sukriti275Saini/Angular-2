import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayAllComponent } from './display-all/display-all.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from "./edit-user/edit-user.component";

const routes: Routes = [
  { path: '', component: DisplayAllComponent },
  { path: 'addnew', component: AddUserComponent },
  { path: 'edit/:id', component: EditUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
