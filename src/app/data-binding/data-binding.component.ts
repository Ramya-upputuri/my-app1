import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
   public age:number = 20;
   public name:string = 'Ramya';
   public isIndian:boolean= true;
   public ages:number[]=[10,20,30,40,];
   public states:string[]=['AP','TS','TN'];
   public cities:string[]=['Guntur','vijayawada','Tenali'];
   public products:any=[
    {name:'pen',price:'20'},
    {name:'phone',price:'20,000'},
    {name:'laptop',price:'50,000'}
  ]

  public persons:any=[
    {name:'a',exp:'2',package:'6'},
    {name:'b',exp:'3',package:'7'},
    {name:'c',exp:'4',package:'8'},
    {name:'d',exp:'5',package:'9'},
  ]

  submit(){
    alert("submited");
  }

  store(){
    alert('stored');
  }

  public phone:string = "+9163"
}
