import { Injectable } from '@angular/core';
import { courses } from './common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private https:HttpClient) { }

 

allcourses:courses[]=[
      {
courseId:1,
courseName:'java',
coursePrice:2200,
courseDuration:'4 months',
description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
      },
      {
courseId:2,
courseName:'javascript',
coursePrice:2200,
courseDuration:'4 months',
description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
      },
      {
courseId:3,
courseName:'typescript',
coursePrice:2200,
courseDuration:'4 months',
description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
      },
      {
courseId:4,
courseName:'python',
coursePrice:2200,
courseDuration:'4 months',
description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
      },
      {
courseId:5,
courseName:'c++',
coursePrice:2200,
courseDuration:'4 months',
description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
      },
      {
courseId:6,
courseName:'c#',
coursePrice:2200,
courseDuration:'4 months',
description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
      },
      {
courseId:7,
courseName:'Angular',
coursePrice:2200,
courseDuration:'4 months',
description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
      },
      {
courseId:8,
courseName:'reactjs',
coursePrice:2200,
courseDuration:'4 months',
description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
      }
]


}

 export interface Elephant{

 }