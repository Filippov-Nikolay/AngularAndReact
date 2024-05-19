import { Component } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() userName: string = "";
  @Input() userAge: number = 0;
 // Ключевой особенностью таких входных свойств является то, что они могут устанавливаться извне, то есть извне получать значения, например, из главного компонента.

}
