import { Component,OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  acno:any
  pswd:any
  amount:any


  acno1:any
  pswd1:any
  amount1:any

  constructor(private ds:DataService){}


  deposite()
  {
    var acno=this.acno
    var pswd=this.pswd
    var amount=this.amount

    const result=this.ds.deposite(acno,pswd,amount)
    if(result)
    {
      alert(`${amount} is credited to ${acno} and balace is ${result}`)
    }
    else
    {
      alert("invalid details")
    }
    // alert('success')
  }

  withdraw()
  {
    var acno=this.acno1
    var pswd=this.pswd1
    var amount=this.amount1

    const result=this.ds.withdraw(acno,pswd,amount)
    if(result)
    {
      alert(`${amount} is debited to ${acno} and balace is ${result}`)

    }
    else
    {
      alert("invalid details")
    }
    // alert('withdraw successful')
  }

}

