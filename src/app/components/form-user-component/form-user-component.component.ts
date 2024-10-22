import { Component } from '@angular/core';
import { userInfo } from 'os';

@Component({
  selector: 'ngx-app-form-user-component',
  templateUrl: './form-user-component.component.html',
  styleUrls: ['./form-user-component.component.css']
})
export class FormUserComponentComponent implements OnInit{

user!=user;

ngOnInit(): void {
this.user = new User();

}

}
