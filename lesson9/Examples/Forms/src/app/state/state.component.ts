import { Component } from '@angular/core';
import { FormsModule} from "@angular/forms";

class User{
    constructor(public name: string,
        public email: string,
        public phone: string){}
}
@Component({
  selector: 'app-state',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './state.component.html',
  styleUrl: './state.component.css'
})
export class StateComponent {
  user: User = new User("", "", "");
  addUser(){
      console.log(this.user);
  }

}
