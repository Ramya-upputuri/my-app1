import { Component } from '@angular/core';
import { FlipcartService } from '../flipcart.service';

@Component({
  selector: 'app-flipcart',
  templateUrl: './flipcart.component.html',
  styleUrls: ['./flipcart.component.css']
})
export class FlipcartComponent {
  public products:any=[]
 constructor(private _FlipcartService:FlipcartService){
  _FlipcartService.getproducts().subscribe(
    (data:any)=>{
    this.products=data;
    },
    (err:any)=>{
      alert("Internal Server error");
    }
  )
 }
}
