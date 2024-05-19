import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LifecycleComponentComponent } from './lifecycle-component/lifecycle-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LifecycleComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LifeCycle';
}
