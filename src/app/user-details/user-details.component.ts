import { Component } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {

constructor(private service:UserService)
{

}

user:{id:number,name:string, lastName:string,age:number,salary:number,experience:number};

ngOnInit(): void {
this.service.onShowButtonClickedEvent
.subscribe((data:{id:number,
  name:string,
   lastName:string,
   age:number,
   salary:number,
   experience:number})=>{
this.user=data;
   })

}

}
