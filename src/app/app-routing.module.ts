import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PasswordsListComponent } from './passwords-list/passwords-list.component';
import { AddPasswordComponent } from './add-password/add-password.component';

const routes: Routes = [
  { path: '', redirectTo: '/passwords-list', pathMatch: 'full'},
  { path: 'passwords-list', component: PasswordsListComponent },
  { path: 'add-password', component: AddPasswordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
