import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.css']
})
export class HallComponent implements OnInit {

  constructor(private routes:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  gotomaster()
  {
    this.routes.navigate(['master'],{relativeTo:this.activatedRoute})
  }

}
