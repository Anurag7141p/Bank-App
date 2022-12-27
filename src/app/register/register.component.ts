import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit{
  uname: any;
  acno: any;
  pswd: any;

  constructor(private ds:DataService,private router:Router){} 

  ngOnInit():void{

  }

  aim='Your Perfect Banking Partner'

   register(acno:any,username:any,password:any){
    var uname=this.uname;
    var acno=this.acno;
    var pswd=this.pswd;
    var userDetails=this.ds.userDetails;

    const result=this.ds.register(acno,uname,pswd)
    if(result)
    {
      alert('register successful')
      this.router.navigateByUrl('')
    }
    else{
      alert('register failure')
    }
   }

}

