import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { users } from 'src/app/shared/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authservice:AuthService,private router:Router,private activeroute:ActivatedRoute) { }

  loginform!:FormGroup
  username!:string
  password!:number

  ngOnInit(): void {

    this.loginform= new FormGroup({
      username:new FormControl(null,[Validators.required]),
      password:new FormControl(null,[Validators.required])
    })
    
const logoutval=this.activeroute.queryParamMap.subscribe((val)=>{
  const logout=Boolean(val.get('logout'))
  
  if(logout)
  {
    this.authservice.logout();
    alert('you are now logout'+ this.authservice.islogged)
  }

})

console.log(logoutval,'this is logoutval')
  }

 

  submit()
  {
  
    this.username=this.loginform.value.username
    this.password =this.loginform.get('password')?.value
    console.log(this.loginform.valueChanges,this.loginform,this.loginform.get('username'),this.password,'two ways of getting values')

    const user=this.authservice.loginuser(this.username,this.password)
     
    if(user=== undefined)
    {
      alert('please enter the correct credentials')
    
    }
    else
    {
      alert('welcome'+this.username+ ' you are logged in')
      this.router.navigate(['home'])

    }
     
  }




}
