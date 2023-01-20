
import { useAnimation } from "@angular/animations";
import { INFERRED_TYPE } from "@angular/compiler/src/output/output_ast";
import { Component } from "@angular/core";

@Component({
  selector : 'dishan-root', 
  templateUrl : './app.component.html'
})
export class AppComponent{
  
 isUserLoggedIn : boolean = true   ;

 toggle(){
  this.isUserLoggedIn = !this.isUserLoggedIn;
}
selectedCountry: any;

   
  countries:any[] = [
    {code:'ind',country:'India'},
    {code:'arg',country:'Argentina'},
    {code:'aus',country:'Australia'},
    {code:'uk',country:'United Kingdom'},
    {code:'rsa',country:'Republic Of South Africa'},
    {code:'urg',country:'Uruguay'}
  ];
  choice(code: any){
    // alert(code)
    // alert(code.value)
this.selectedCountry = code.value;
console.log(code.value);



  }
  

  // users:string[] = ["Dishan","Mirang","Priyanka"];
users:any[] = [

{id:101,name:'Dishan',city:'Mumbai'},
{id:102,name:'Mirang ',city:'Pune'},
{id:103,name:'Priyanka',city:'Delhi'}

];

}
