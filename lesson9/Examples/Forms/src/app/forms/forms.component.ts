import { Component } from '@angular/core';
import { FormsModule, NgForm} from "@angular/forms";

class User{
    constructor(public name: string,
        public email: string,
        public phone: string){}
}

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {

  name: string = "";
  email: string = "";
  phone: string = "";


  onSubmit(form: NgForm){
      console.log(form);

  }
}