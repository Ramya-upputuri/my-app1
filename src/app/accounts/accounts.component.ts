import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
public accname:string="";
public pageNo:number=0;
public column:string="";
public order:string="";
public Accounts:any=[]


constructor(private _accountsService:AccountsService){
  _accountsService.getaccounts().subscribe(
    (data:any)=>{
      this.Accounts=data;
    },
    (err:any)=>{
      alert("Internal Server Error");
    }
  )
}

filteredaccounts(){
  this._accountsService.getfilteredaccounts(this.accname).subscribe(
   (data:any)=>{
    this.Accounts=data;
   },
   (err:any)=>{
    alert("Internal Server")
   }
  )
}

paggedaccounts(){
  this._accountsService.getpaggedaccounts(this.pageNo).subscribe(
    (data:any)=>{
      this.Accounts=data;
    },
    (err:any)=>{
      alert("Internal Server Error")
    }
  )
}

sortedaccounts(){
  this._accountsService.getsortedaccounts(this.column,this.order).subscribe(
   (data:any)=>{
    this.Accounts=data;
   },
   (err:any)=>{
    alert("Internal Server Error")
   }
  )
}

deletedaccounts(id:string){
  this._accountsService.getdeletedaccounts(id).subscribe(
   (data:any)=>{
    alert("Deleted Successfully")
    location.reload()
   },
   (err:any)=>{
    alert("Internal Server Error")
   }
  )
}

}
