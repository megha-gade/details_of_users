import { Component } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrl: './all-users.component.css'
})
export class AllUsersComponent {
userArray:{id:number,name:string, lastName:string,age:number,salary:number,experience:number}[]=[]
clikedOrNot:boolean=false;
constructor(private service:UserService)
{

}

ngOnInit(): void {
this.userArray=this.service.user


}

buttonClikedFromAllUser(user:{id:number,name:string, lastName:string,age:number,salary:number,experience:number})
{
this.clikedOrNot=true;
console.log(user);
this.service.showDetailsButton(user)
}
}
