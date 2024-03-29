import { Injectable } from '@angular/core';
import { users } from './common';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 constructor(private route:Router) { }

 myusers:users[]=[
  {id:1,name:'robins ranjan', username:'rr',password:1234},
  {id:2,name:'sasuke uchiha', username:'su',password:1234},
  {id:3,name:'saitama', username:'ss',password:1234},
  {id:4,name:'shravani', username:'sh',password:1234}
 ]

islogged:boolean=false;


loginuser(username:string,password:number,)
{
  let user=this.myusers.find(val=>val.username == username && val.password == password)
  
if(user==undefined)
{
  this.islogged=false;
  this.route.navigate(['login'])
}
else
{
  this.islogged=true
}
return user;

}


logout()
{
  this.islogged=false;
}

isAuthenticated()
{
  return this.islogged;
}




}
