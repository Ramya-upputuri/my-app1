import { Component } from '@angular/core';
import { PhotogallaryService } from '../photogallary.service';

@Component({
  selector: 'app-photogallary',
  templateUrl: './photogallary.component.html',
  styleUrls: ['./photogallary.component.css']
})
export class PhotogallaryComponent {
  public images:any=[]
constructor(private _PhotogallaryService:PhotogallaryService){
  _PhotogallaryService.getdata().subscribe(
    (data:any)=>{
    this.images=data.data.memes;
    },
    (err:any)=>{
      alert("Internal Server Error")
    }
  )
}

}
