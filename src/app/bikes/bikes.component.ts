import { Component } from '@angular/core';
import { BikesService } from '../bikes.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent {
  public term:string="";
  public column:string="";
  public order:string="";
  public pageNo:number=0;
  public bikes:any=[];

  public queries:any={
    filter:"",
    limit:10,
    pageNO:0,
    sortBy:"",
    order:""
  }
  constructor(private _bikesService:BikesService){

    _bikesService.getBikes().subscribe(
      (data:any)=>{
        this.bikes=data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }
  filterbikes(){
    this._bikesService.getFilteredbikes(this.term).subscribe(
      (data:any)=>{
        this.bikes=data;
      },
      (err:any)=>{
        alert("Internal server error")
      }
    )
  }

  getpagedbikes(){
    this._bikesService.getpagesbikes(this.pageNo).subscribe(
      (data:any)=>{
        this.bikes=data;
      },
      (err:any)=>{
        alert("Internal Server Error")
      }
    )
  }

  sortedbikes(){
    this._bikesService.getsortedbikes(this.column,this.order).subscribe(
      (data:any)=>{
        this.bikes=data;
      },
      (err:any)=>{
        alert("Internal Server Error")
      }
    )
  }

  deletebikes(id:string){
    this._bikesService.getdeletedbikes(id).subscribe(
      (data:any)=>{
        alert("Deleted Successfully");
        location.reload();
      },
      (err:any)=>{
        alert("Internal server error")
      }
    )
  }

  loadData(){
    this._bikesService.query(this.queries).subscribe(
      (data:any)=>{
        this.bikes =data;
      },
      (err:any)=>{
        alert("Internal Server Error")
      }
    )
  }
}
