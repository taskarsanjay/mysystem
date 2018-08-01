import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['login.component.css'],
})


export class LoginComponent implements OnInit {

    username: string;
    password: string;

    constructor(private _router: Router) { }

      ngOnInit() { }

     public login() {
        debugger
       if (this.username == 'kajal' && this.password == '123')
        {
            alert("successful")
            this._router.navigate(['/dashboard']);
        } 
         else {
              alert("Invalid User.")
       }
       
     }
}