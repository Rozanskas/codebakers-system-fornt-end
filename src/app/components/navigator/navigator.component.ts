import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { Observable, Observer } from 'rxjs';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {

  isLoggedIn:Observable<boolean> ;

  constructor(public authenticationService: AuthenticationService,private permissionsService: NgxPermissionsService) {
    this.isLoggedIn = authenticationService.isLoggedIn();
  }

  
  ngOnInit() {
  
  }

}
