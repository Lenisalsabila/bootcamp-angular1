import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BerandaComponent } from './beranda/beranda.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { InputComponent } from './input/input.component';
import {ToastNoAnimationModule} from "ngx-toastr";
// import { DeleteComponent } from './delete/delete.component';
// import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    BerandaComponent,
    AboutComponent,
    ProfileComponent,
    InputComponent
    // DeleteComponent,
    // UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastNoAnimationModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
