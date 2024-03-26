import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { courses } from 'src/app/shared/common';
import { ServicesService } from 'src/app/shared/services.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private router:Router,private servicenow:ServicesService,private routes:ActivatedRoute) { }

  mycourses!:courses[]

  ngOnInit(): void {

  
    console.log(this.mycourses,'this is all the courses')

    // METHOD-1
    // console.log(this.routes.snapshot.queryParams['name'],'this is query string') this is one way of fetching it
    
    //METHOD-2

    // const names =this.routes.snapshot.queryParamMap.get('names')

   let names:null|string=''

  this.routes.queryParamMap.subscribe((val)=>{
      names = val.get('names')
    })

    if(names== undefined||names==''||names == null )
    {
      this.mycourses=this.servicenow.allcourses
    }
    else{
      this.mycourses= this.servicenow.allcourses.filter(val=>val.courseName.toLocaleLowerCase().includes(names!.toLocaleLowerCase()))
    }
    


  }

gotohome()
{
  // this.router.navigate(['/home','author','101'])
  // this accepts arrays so it can accepts multiple value
  this.router.navigate(['/home'])

}

gotohall()
{
  this.router.navigate(['/home','hall'])
}

gotomaster()
{
  this.router.navigate(['home','hall','master'])
}

goingdetails(val:number)
{
  this.router.navigate(['courses','details',val])
}


}


