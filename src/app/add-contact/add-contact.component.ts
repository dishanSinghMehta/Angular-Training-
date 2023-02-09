import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../user-auth.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  constructor(private _builder: FormBuilder,private _userAuth:UserAuthService,private _router:Router) { }
user:any
  ngOnInit(): void {
    let user=JSON.parse(localStorage.getItem("loggedInUser")!);
    this.user=user
  }


  addContact=this._builder.group({
    name:['',Validators.required],
    phone:['',Validators.compose([Validators.required,Validators.minLength(10)])]
  })

  display=true;

  handleSubmit(){

   
    
  
   
    if (this.addContact.valid) {
      this.user.contacts.push(this.addContact.value)
      localStorage.setItem("loggedInUser",JSON.stringify(this.user))
      console.log(this.user);
      this.addContact.reset()

      this._userAuth.update(this.user.id,this.user).subscribe({
        next:(data)=>{
          return data
        }
      })
      this.display=false;
     
        this.display=true;
        this._router.navigate(['/profile/all-contacts'])
        
     
      
    }
    
    else{
      alert("The number you entered might be incorrect")
    }
    console.log(this.addContact.valid);
  }


}
