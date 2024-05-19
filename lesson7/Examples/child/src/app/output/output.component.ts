import { Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [],
  templateUrl: './output.component.html',
  styleUrl: './output.component.css'
})
export class OutputComponent {
  @Output() onChanged = new EventEmitter<boolean>();

  change(increased:boolean) {
      this.onChanged.emit(increased);
  }
}

// Если мы должны передавать его родительскому компоненту, то для этого нам надо использовать свойство типа EventEmitter
// Cвойство onChanged будет представлять собой событие, которое вызывается в методе change() по клику на кнопку и передается главному компоненту.
