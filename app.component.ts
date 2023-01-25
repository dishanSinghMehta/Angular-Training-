
import { useAnimation } from "@angular/animations";
import { INFERRED_TYPE } from "@angular/compiler/src/output/output_ast";
import { Component,OnInit } from "@angular/core";
import { UsersService } from "./services/users.service";



@Component({
  selector : 'dishan-root', 
  templateUrl : './app.component.html'
})
export class AppComponent implements OnInit {


  pageTitle:string = "Services in Angular";
  

  users: any[]=[] ;//if used for http client then declare it as users : any ; 

  constructor(private variable:UsersService)//Dependency injection necessary for services and http services 
  {

  }
  ngOnInit() {
   //this.users=this.variable.getAllUsers();//Uncomment for services only 

   /*this.variable.getAllUsers().subscribe((data)=>{
     this.users = data;});*///uncomment for http services only 
     
    }
    
    

  }
  

  

  









  
 /*isUserLoggedIn : boolean = true   ;

 //toggle(){
  //this.isUserLoggedIn = !this.isUserLoggedIn;
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
*/

