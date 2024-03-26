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
import { DetailcourseComponent } from './components/courses/detailcourse/detailcourse.component';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './components/login/login.component'
import { ReactiveFormsModule } from '@angular/forms';


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
    DetailcourseComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
