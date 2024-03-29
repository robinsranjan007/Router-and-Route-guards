import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HallComponent } from './components/home/hall/hall.component';
import { GallaryComponent } from './components/home/gallary/gallary.component';
import { MasterRoomComponent } from './components/home/hall/master-room/master-room.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { CoursesComponent } from './components/courses/courses.component';
import { DetailcourseComponent } from './components/courses/detailcourse/detailcourse.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { GuradService } from './components/gurad.service';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'home',
    canActivateChild:[GuradService],
    children: [
      {
        path: 'hall',
        component: HallComponent,
      },
      {
        path: 'gallery',
        component: GallaryComponent,
      },
      {
        path: 'hall',
        children: [
          {
            path: 'master',
            component: MasterRoomComponent,
          },
        ],
      },
    ],
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'courses',
    component: CoursesComponent,
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path: 'courses/details/:id',
    component: DetailcourseComponent,
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
