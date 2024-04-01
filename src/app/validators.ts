import { AbstractControl } from "@angular/forms";

 export function tcsMail(control:AbstractControl){
    if(!control.value || control.value?.includes('@tcs.com')){
        return null;
    }
    else{
        return{'tcsMail':'invalid domain'}
    }
 }

 export function cvv(control:AbstractControl){
    if(!control.value || Number(control.value)>0 && Number(control.value)<1000){
        return null;
    }
    else{
        return{'cvv':'invalid cvv'}
    }
 }

