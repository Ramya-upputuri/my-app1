import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
constructor(private _accountsService:AccountsService){
}
public accountform:FormGroup=new FormGroup(
  {
    account_name:new FormControl,
    available_balance:new FormControl,
    city:new FormControl,
    account_number: new FormControl,
    profie_picture:new FormControl
  }
)
accountsubmitted(){
  console.log(this.accountform.value)
  this._accountsService.postcreateaccount(this.accountform.value).subscribe(
    (data:any)=>{
      alert("Created Successfully")
      this.accountform.reset();
    },
    (err:any)=>{
      alert("Internal Server Error")
    }
  )
}
}


