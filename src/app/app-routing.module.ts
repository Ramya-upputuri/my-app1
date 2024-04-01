import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { TableComponent } from './table/table.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { CarsComponent } from './cars/cars.component';
import { MyntraComponent } from './myntra/myntra.component';
import { BikesComponent } from './bikes/bikes.component';
import { AccountsComponent } from './accounts/accounts.component';
import { FlipcartComponent } from './flipcart/flipcart.component';
import { MailComponent } from './mail/mail.component';
import { ReloadComponent } from './reload/reload.component';
import { PhotogallaryComponent } from './photogallary/photogallary.component';
import { CreateBikesComponent } from './create-bikes/create-bikes.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AuthenticationGuard } from './authentication.guard';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateUserExComponent } from './create-user-ex/create-user-ex.component';


const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthenticationGuard],children:[
    {path:'',component:HomeComponent},
    { path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'data-binding',component:DataBindingComponent},
    {path:'calculator',component:CalculatorComponent},
    {path:'rectangle',component:RectangleComponent},
    {path:'circle',component:CircleComponent},
    {path:'bmi',component:BmiComponent},
    {path:'table',component:TableComponent},
    {path:'vehicles',component:VehiclesComponent},
    {path:'cars',component:CarsComponent},
    {path:'myntra',component:MyntraComponent},
    {path:'bikes',component:BikesComponent},
    {path:'accounts',component:AccountsComponent},
    {path:'flipcart',component:FlipcartComponent},
    {path:'mail',component:MailComponent},
    {path:'reload',component:ReloadComponent},
    {path:'photogallary', component:PhotogallaryComponent},
    {path:'create-bikes',component:CreateBikesComponent},
    {path:'create-account',component:CreateAccountComponent},
    {path:"create-user",component:CreateUserComponent},
    {path:"create-user-ex",component:CreateUserExComponent}
  ]},
  {path:'', component:LoginComponent},
  {path:'**',component:PagenotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
