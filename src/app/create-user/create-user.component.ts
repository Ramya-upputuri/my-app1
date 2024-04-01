import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { cvv, tcsMail } from '../validators';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  public userform:FormGroup=new FormGroup({
    name: new FormControl(null,[Validators.required,Validators.minLength(3)]),
    age:new FormControl(null,[Validators.required,Validators.min(18),Validators.max(60)]),
    phone:new FormControl(null,[Validators.required,Validators.min(1000000000),Validators.max(9999999999)]),
    email:new FormControl(null,[Validators.required,Validators.email,tcsMail]),
    address: new FormGroup(
      {
        city: new FormControl(null,Validators.required),
        pin:new FormControl(null,[Validators.required,Validators.min(100000),Validators.max(999999)])
      }
    ),
    cards:new FormArray([]),
    type:new FormControl(null,Validators.required),

  })
  constructor(){
    this.userform.get("type")?.valueChanges.subscribe(
      (data:any)=>{
        if(data=='dayscholor'){
          // add busfee
          this.userform.addControl('busfee',new FormControl());
          // remove hostelfee
          this.userform.removeControl("hostelfee");
        }
        else{
          // add hostelfee
          this.userform.addControl("hostelfee",new FormControl());
          // remove busfee
          this.userform.removeControl("busfee");
        }
      }
    )
  }
  get cardsFromArray(){
    return this.userform.get('cards') as FormArray;
  }

  add(){
    this.cardsFromArray.push(
      new FormGroup({
        number: new FormControl(null,Validators.required),
        expiry:new FormControl(null,Validators.required),
        cvv: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(3), cvv]),
      })

    )
  }

  submit(){
    this.userform.markAllAsTouched();
    console.log(this.userform)
  }
  delete(i:number){
    this.cardsFromArray.removeAt(i);

  }
}
