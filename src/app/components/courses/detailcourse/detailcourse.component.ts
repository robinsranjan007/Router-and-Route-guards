import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { courses } from 'src/app/shared/common';
import { ServicesService } from 'src/app/shared/services.service';

@Component({
  selector: 'app-detailcourse',
  templateUrl: './detailcourse.component.html',
  styleUrls: ['./detailcourse.component.css']
})
export class DetailcourseComponent implements OnInit {

  constructor(private servicenow:ServicesService,private activeroute:ActivatedRoute,private router:Router) { }

  allcourses!:courses[]
  userID!:number
  mycourse:courses|undefined

  ngOnInit(): void {
    this.allcourses=this.servicenow.allcourses;
    // this.userID=this.activeroute.snapshot.params['id']; old way of doing
      // this.userID = +this.activeroute.snapshot.paramMap.get('id')!; using parammap method

      this.activeroute.params.subscribe((val)=>{
         this.userID= val['id']
      })


    this.mycourse=this.allcourses.find(item=>item.courseId== this.userID)

    console.log(this.mycourse)
  }

  nextcourse()
  {
    this.userID++;
      this.router.navigate(['courses','details',this.userID])
      this.mycourse=this.allcourses.find(item=>item.courseId== this.userID)
  }

  previouscourse()
  {
    this.userID--
    this.router.navigate(['courses','details',this.userID])
    this.mycourse=this.allcourses.find(item=>item.courseId== this.userID)

  }

}
