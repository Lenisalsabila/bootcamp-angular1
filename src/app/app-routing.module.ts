import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BerandaComponent} from "./beranda/beranda.component";
import {AboutComponent} from "./about/about.component";
import {ProfileComponent} from "./profile/profile.component";
import {InputComponent} from "./input/input.component";
// import {UpdateComponent} from "./update/update.component";

const routes: Routes = [
  {
    path:'home',component:BerandaComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'profile',component:ProfileComponent
  },
  {
    path:'input',component:InputComponent
  },
  {
    path:'findById/:id',component:InputComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
