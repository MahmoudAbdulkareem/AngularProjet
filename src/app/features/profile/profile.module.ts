import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from '../../components/profile/profile.component';
import { MainUserComponent } from '../../components/main-user/main-user.component';


@NgModule({
  declarations: [
    ProfileComponent,
    MainUserComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
  
})
export class ProfileModule { }
