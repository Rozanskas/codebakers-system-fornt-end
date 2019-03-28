import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import {Router , Routes, RouterModule} from "@angular/router";
import { ErrorComponent } from './pages/error/error.component';
import { MainComponent } from './pages/main/main.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { CourseComponent } from './components/course/course.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SingleCourseComponent } from './components/single-course/single-course.component';
import { SingleCourseImageComponent } from './components/single-course-image/single-course-image.component';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { RegisterComponent } from './pages/register/register.component';
import { SingleCourseMeniuComponent } from './components/single-course-meniu/single-course-meniu.component';
import { NgxPermissionsModule } from 'ngx-permissions';
import { UsersComponent } from './pages/users/users.component';
import { CourseHomeComponent } from './components/course-home/course-home.component';
import { CourseMembersComponent } from './components/course-members/course-members.component';
import { CourseActivityComponent } from './components/course-activity/course-activity.component';
import { CourseEventsComponent } from './components/course-events/course-events.component';
import { CourseDriveComponent } from './components/course-drive/course-drive.component';


const appRoutes: Routes = [
  {
    path:'courses',
    component: CourseComponent,
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'contacts',
    component: ContactsComponent
  },
  {
    path:'',
    component: MainComponent
  },
  {
    path:'main',
    component: MainComponent
  },
  {
    path:'users',
    component: UsersComponent
  },
  {
    path:'**',
    component: ErrorComponent
  },
  {
    path:'coursemeniu',
    component: SingleCourseMeniuComponent ,canActivate: [AuthGuard]
  },
  
];

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    CourseComponent,
    ErrorComponent,
    MainComponent,
    AboutComponent,
    ContactsComponent,
    CourseComponent,
    SingleCourseComponent,
    SingleCourseImageComponent,
    LoginComponent,
    RegisterComponent,
    SingleCourseMeniuComponent,
    UsersComponent,
    CourseHomeComponent,
    CourseMembersComponent,
    CourseActivityComponent,
    CourseEventsComponent,
    CourseDriveComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes,{enableTracing:true}),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPermissionsModule.forRoot()
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  },{
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
