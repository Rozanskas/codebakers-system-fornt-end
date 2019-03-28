import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users:User[];
  constructor(private userService:UserService) { }



  ngOnInit() {
    this.getAllUsers();
  }
  
  getAllUsers(){

    this.userService.getAllUsers().subscribe(data=>this.users=data);
  
  }

  disable(id:number,index:number){
  
    this.userService.disableUser(id).subscribe(data=>{if(data===1){this.users[index].is_disabled=1}});
    
  }
  enable(id:number,index:number){
    this.userService.enableUser(id).subscribe(data=>{if(data===1){this.users[index].is_disabled=0}});
  }

}
