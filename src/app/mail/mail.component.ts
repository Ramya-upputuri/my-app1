import { Component } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent {
public maildata:any=[]
constructor(private _mailService:MailService){
  _mailService.getmail().subscribe(
    (data:any)=>{
      this.maildata=data;
    },
    (err:any)=>{
      alert("Internal Server error")
    }
  )
}
}
