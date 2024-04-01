import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-user-ex',
  templateUrl: './create-user-ex.component.html',
  styleUrls: ['./create-user-ex.component.css']
})
export class CreateUserExComponent {
public userformex:FormGroup=new FormGroup(
  {
    name:new FormControl(),
    experiences:new FormControl(),
    experience:new FormGroup(
      {
      company: new FormControl(),
      experience:new FormControl(),
      package:new FormControl(),
      }
    ),
    skils:new FormArray([]),
  }
)
get skilsFormArray(){
 return this.userformex.get("skils")as FormArray;
}
add(){
  this.skilsFormArray.push(
      new FormGroup({
        name:new FormControl(),
        rating: new FormControl(),
        experience:new FormControl(),
      })
  )
}
delete(i:number){
      this.skilsFormArray.removeAt(i)
} 

submit(){
  console.log(this.userformex.value)
}
}
