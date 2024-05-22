import { Component } from '@angular/core';
import { HttpService} from "../http.service";
import { HttpClientModule} from "@angular/common/http";
import {User} from "../user";

@Component({
  selector: 'app-task2',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './task2.component.html',
  styleUrl: './task2.component.css',
  providers: [HttpService]
})
export class Task2Component {
  user: User| undefined;
  users: User[]=[]; // для закгрузки данных из файла data2.js

    constructor(private httpService: HttpService){
    }

    ngOnInit(){

         this.httpService.getData().subscribe({next:(data:any) => this.user=new User(data.name, data.age)});
       // this.httpService.getData().subscribe({next: (data: any) => this.users=data["userList"]});
    }

}
