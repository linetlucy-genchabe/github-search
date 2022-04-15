import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ReposComponent } from './repos/repos.component';

const routes: Routes = [
  {path: 'profile', component:ProfileComponent},
  {path: 'repositories', component:ReposComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
