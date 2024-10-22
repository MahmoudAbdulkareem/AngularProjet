import { Component } from '@angular/core';
import { MainUserComponent } from '../main-user/main-user.component';
import {RouterModule, Routes} from '@angular/Router';

const routes: Routes = [

  (path :"" Component : MainUserComponent)
]
@Component({
  selector: 'ngx-app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

}
