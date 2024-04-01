import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  public term:string = "";

  public products: any = [
    { productname: 'pen', price: 10, rating: 3, freedelivery: 'true'},
    { productname: 'phone', price: 100, rating: 2, freedelivery: 'false' },
    { productname: 'shirt', price: 400, rating: 4, freedelivery: 'true' },
    { productname: 'cap', price: 200, rating: 5, freedelivery: 'false' },
    { productname: 'mobile case', price: 300, rating: 2, freedelivery: 'true' },
    { productname: 'remote', price: 400, rating: 2.5, freedelivery: 'false' },
  ]

  public product:any={
    productname:"",
    price:0,
    rating:0,
    freedelivery:false
}
 create(){
  this.products.push({...this.product});
  alert("Created successfully")
  this.product.productname="",
  this.product.price=0,
  this.product.rating=0,
  this.product.freedelivery=false
 }
 delete(i:number){
  this.products.splice(i,1);
 }
 public isEdit:boolean=false;
 public i:number=0;
 update(selectedproduct:any,i:number){
     this.isEdit=true;this.i=i;
     this.product={...
      selectedproduct};
     }

     edit(){
      this.products.splice(this.i,1,{...this.product})
     }

  data() {
    this.products = this.products.filter((product: any) => product.productname.includes(this.term));
  }
  free(){
    this.products = this.products.filter((product:any) => product.freedelivery=='true');
  }
  pricelowtohigh(){
    this.products=this.products.sort((a:any,b
      :any)=>a.price-b.price);
  }
  pricehightolow(){
    this.products=this.products.sort((a:any,b:any)=>b.price-a.price)
  }

  ratinglowtohigh(){
    this.products=this.products.sort((a:any,b:any)=>a.rating-b.rating)
  }

  ratinghightolow(){
    this.products=this.products.sort((a:any,b:any)=>b.rating-a.rating)
  }

  discount(){
    this.products=this.products.map((product:any)=>{product.price=product.price*0.5
    return product;
    });
    
  }
  deliverycharges(){
    this.products=this.products.map((product:any)=>{product.price=product.price+20
    return product;
    })
  }

  totalprice(){
    alert(this.products.reduce((sum:any,product:any)=>sum+product.price,0))
  }
   
  cartitems(){
    alert(this.products.length);
  }

}
