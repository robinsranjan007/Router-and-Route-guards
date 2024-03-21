import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { CoursesComponent } from './components/courses/courses.component';
import { HallComponent } from './components/home/hall/hall.component';
import { MasterRoomComponent } from './components/home/hall/master-room/master-room.component';
import { GallaryComponent } from './components/home/gallary/gallary.component';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { DetailcourseComponent } from './components/courses/detailcourse/detailcourse.component';
import { HttpClientModule} from '@angular/common/http'

const routes:Routes=[
  {
    path:'',
    component:HomeComponent
  },
  {
      path:'home',
      component:HomeComponent
  },  
  {
    path:'home/hall',
    component:HallComponent
  },
  {
    path:'home/gallery',
    component:GallaryComponent
  },
  {
    path:'home/hall/master',
    component:MasterRoomComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'about',
    component:AboutComponent
},  
  {
    path:'courses',
    component:CoursesComponent
  },
  {
    path:'courses/details/:id',
    component:DetailcourseComponent
  },
  {
    path:'**',
    component:ErrorComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    CoursesComponent,
    HallComponent,
    MasterRoomComponent,
    GallaryComponent,
    DetailcourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
