import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  public Num1:number=0;
  public Num2:number=0;
  public Result:number=0;

  sum(){
    this.Result =this.Num1+this.Num2
  }

  mul(){
    this.Result=this.Num1*this.Num2
  }


}
