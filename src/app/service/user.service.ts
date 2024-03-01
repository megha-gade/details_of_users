import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {



user=[
{id:1,name:'Megha', lastName:'gade',age:22,salary:45000,experience:2},
{id:2,name:'Raja', lastName:'Salvi',age:23,salary:3454,experience:4},
{id:3,name:'Rani', lastName:'Kamble',age:56,salary:90000,experience:12},
{id:4,name:'Ankita', lastName:'Lokhande',age:24,salary:23400,experience:2},
{id:5,name:'Mayara', lastName:'Vaikul',age:45,salary:3500,experience:5},
{id:6,name:'Saniya', lastName:'Jain',age:18,salary:12400,experience:3},
{id:7,name:'Sumit', lastName:'Katte',age:34,salary:456700,experience:6},
]


  constructor() { }


onShowButtonClickedEvent=
new EventEmitter
<{id:number,name:string, lastName:string,age:number,salary:number,experience:number}>();


showDetailsButton(user:{id:number,name:string, lastName:string,age:number,salary:number,experience:number})
{
this.onShowButtonClickedEvent.emit(user)
}


}
