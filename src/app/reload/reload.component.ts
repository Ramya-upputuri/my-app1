import { Component } from '@angular/core';
import { ReloadService } from '../reload.service';

@Component({
  selector: 'app-reload',
  templateUrl: './reload.component.html',
  styleUrls: ['./reload.component.css']
})
export class ReloadComponent {
  public activities:any=[]
constructor(private _reloadService:ReloadService){
  _reloadService.getdata().subscribe(
    (data:any)=>{
    this.activities=data;
    },
    (err:any)=>{
      alert("Internal server error")
    }
  )
}
data(){
  this._reloadService.getdata().subscribe(
    (data:any)=>{
    this.activities=data;
    },
    (err:any)=>{
      alert("Internal server error")
    }
  )
}
}


