
import { Component } from '@angular/core';
import { BikesService } from '../bikes.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-bikes',
  templateUrl: './create-bikes.component.html',
  styleUrls: ['./create-bikes.component.css']
})
export class CreateBikesComponent {
constructor(private _bikesService:BikesService){

}
public bikeform:FormGroup=new FormGroup( 
  {
    Vehicle:new FormControl(),
    manufacturer:new FormControl(),
    model: new FormControl(),
    color: new FormControl(),
    type:new FormControl(),
    fuel:new FormControl(),
    image: new FormControl(),
  }
)
onsubmit(){
  console.log(this.bikeform.value)
  this._bikesService.createbike(this.bikeform.value).subscribe(
    (data:any)=>{
      
      alert("Created Successfully")
      this.bikeform.reset();
    },
    (err:any)=>{
      alert("Internal Server Error")
    }

  )
}
}
