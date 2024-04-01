import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
public cars:any=[
  {name:'Honda',path:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ51Pvsu9n4e5mVopZt6bV3egbqJga8v7E3DA&usqp=CAU'},
  {name:'BMW',path:'https://d2m3nfprmhqjvd.cloudfront.net/blog/20230522183814/BMW-5-Series-1160x653.webp'},
  {name:'Audi',path:'https://media.zigcdn.com/media/model/2022/Sep/audi_a4_2022_360x240.jpg'}

  
]
public selectimagepath:any='';
}
