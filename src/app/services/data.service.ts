import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  userDetails:any={
    1000:{acno:1000,username:"anu",password:1000,balance:2000},
    1001:{acno:1001,username:"ammu",password:1001,balance:2000},
    1002:{acno:1002,username:"varun",password:1002,balance:2000}
  
   }

  constructor() { }

  register(acno:any,username:any,password:any)
  {
     var userDetails=this.userDetails

     if(acno in this.userDetails)
     {
      return false;
     }
     else
     {
      userDetails[acno]={
        acno:acno,
        username:username,
        password:password,
        balance:0
      }
      return true;
     }
  }

  login(acno:any,pswd:any)
  {
    var userDetails=this.userDetails
    if(acno in userDetails)
    {
      if(pswd==this.userDetails[acno]['password'])
      {
        return true
      }
      else
      {
        alert('invalid password')
        return false
      }
    }
    else
    {
      alert('invalid user details')
      return false

    }
  }
  deposite(acno:any,pswd:any,amt:any){
    var amount=parseInt(amt)
    let userDetails=this.userDetails;
    if(acno in this.userDetails)
    {
      if(pswd==this.userDetails[acno]['password'])
      {
        userDetails[acno]['balance']+=amount;
        return userDetails[acno]['balance']
      }
      else
      {
        alert('invalid password')
        return false
      }
    }
    else
    {
      alert('invalid user')
      return false

    }

  }

  withdraw(acno:any,pswd:any,amt:any){
    var amount=parseInt(amt)
    let userDetails=this.userDetails;
    if(acno in this.userDetails)
    {
      if(pswd==this.userDetails[acno]['password'])
      {
        if(userDetails[acno]['balance']>amount)
        {
          userDetails[acno]['balance']-=amount;
          return userDetails[acno]['balance']

        }   
        else
        {
          alert('please check your balance')

        } 
      }   
      else
      {
        alert('invalid password')
        return false
      }
    }
    else
    {
      alert('invalid user')
      return false

    }

  }
}

