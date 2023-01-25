import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
 


  constructor(private Http:HttpClient) { }

  getAllUsers()
  {
   /* return [ {id:101,name:'Dishan',city:'DELHI',salary:20,dob:new Date("05/10/1989")},
    {id:102,name:'Mirang',city:'PUNE',salary:30,dob:new Date("05/12/1985")},
    {id:103,name:'Priyanka',city:'GOA',salary:40,dob:new Date("10/10/1991")},
    {id:104,name:'Harsh',city:'DELHI',salary:50,dob:new Date("12/18/1987")}];*/
  ;
    return this.Http.get("https://jsonplaceholder.typicode.com/users");
  }
}
