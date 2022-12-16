import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { 
       // 3rd execute
       // class is a collection of properties and methods

  constructor(){} 
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

       aim='Your Perfect Banking Partner'
       account="Please enter your account number"

      acno=""; // to hold value from the user
      pswd=''


       
       userDetails:any={
        1000:{acno:1000,username:"anu",password:1000,balance:2000},
        1001:{acno:1001,username:"ammu",password:1001,balance:2000},
        1002:{acno:1002,username:"varun",password:1002,balance:2000}

       }
       // userdefined functions 4th execution

       login()
       {
        // alert('login clicked')
        var acno=this.acno
        var pswd=this.pswd
        var userDetails=this.userDetails
        if(acno in userDetails)
        {
          if(pswd==userDetails[acno]['password'])
          {
            alert('login successfully')

          }
          else
          {
            alert('password incorrect')
          }

        }
        else
        {
          alert('invalid user')
        }
       }

       acnochange(event:any)
       {
        // console.log(event.target.value)
        this.acno=event.target.value
        console.log(this.acno)
       }

       pswdchange(event:any)
       {
        // console.log(event.target.value)
        this.pswd=event.target.value
        console.log(this.pswd)
       }
}
