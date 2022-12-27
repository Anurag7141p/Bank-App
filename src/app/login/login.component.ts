import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // 3rd execute
  // class is a collection of properties and methods

  constructor(private router: Router,private ds:DataService) { }
  // 1st execute
  // used for object initialization
  // it automatically invokes when an object is created

  ngOnInit(): void {
    // 2nd execute
    // initial process of component
    // when a component is created ,at the same time it initialize or authorize
    // when a component is created,there is a lifecyle for it

  }
  //properties

  aim = 'Your Perfect Banking Partner'
  account = "Please enter your account number"

  acno = ""; // to hold value from the user
  pswd = ''



  userDetails: any = {
    1000: { acno: 1000, username: "anu", password: 1000, balance: 2000 },
    1001: { acno: 1001, username: "ammu", password: 1001, balance: 2000 },
    1002: { acno: 1002, username: "varun", password: 1002, balance: 2000 }

  }
  // userdefined functions 4th execution

  login() 
  {
    var acno = this.acno
    var pswd = this.pswd
    const result = this.ds.login(acno, pswd)
    if (result) 
    {
      alert('login successful')
      this.router.navigateByUrl('dashboard')
    }
    else 
    {
      alert('login failure')
    }

    //  acnochange(event:any)
    //  {
    //   // console.log(event.target.value)
    //   this.acno=event.target.value
    //   console.log(this.acno)
    //  }

    //  pswdchange(event:any)
    //  {
    //   // console.log(event.target.value)
    //   this.pswd=event.target.value
    //   console.log(this.pswd)
  }
}

