import { Component } from '@angular/core'
import { Input } from '@angular/core';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component {
  @Input() userName: string = "";
  _userAge: number = 0;

 @Input()
 set userAge(age:number) {
     if(age<0)
         this._userAge=0;
     else if(age>100)
         this._userAge=100;
     else
         this._userAge = age;
}
get userAge() { return this._userAge; }
}
