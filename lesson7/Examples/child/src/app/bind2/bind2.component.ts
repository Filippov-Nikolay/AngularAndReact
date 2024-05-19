import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bind2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './bind2.component.html',
  styleUrl: './bind2.component.css'
})
export class Bind2Component {
  @Input() userName:string = "";
  @Output() userNameChange = new EventEmitter<string>();
  onNameChange(model: string){

      this.userName = model;
      this.userNameChange.emit(model);
  }

}
