import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public usernameInput: string = "";
  public passwordInput: string = "";
  public loginMessage: string = "Log In";
  public user: User = new User();

  public loginCreds:any = {
    username:"",
    password:""
  }

  constructor(private us:UserService, private route:Router) { }

  ngOnInit(): void {
  }

  login(): void {

    let hardCodeLogin = {
      email:"bigbon@yahoo.com",
      password:"password"
    }

    this.us.login(hardCodeLogin).subscribe(
      (data:any) => {
        console.log(data)
        this.us.accessToken += data.body.accessToken
        console.log(this.us.accessToken)
      },
      //if login fails (doesn't send back a 202), the button displays this error message.
      (error:any) => {
        this.loginMessage = "Login failed! Try again";
      }

    )

  }
  
  //this just takes the user to the register component, which has the actual functionality
  register(): void {
    this.route.navigate(['/register']);
  }

}
