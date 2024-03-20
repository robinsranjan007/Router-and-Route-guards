import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { courses } from 'src/app/shared/common';
import { ServicesService } from 'src/app/shared/services.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private router:Router,private servicenow:ServicesService) { }

  mycourses!:courses[]

  ngOnInit(): void {

    this.mycourses=this.servicenow.allcourses
    console.log(this.mycourses,'this is all the courses')
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


}


