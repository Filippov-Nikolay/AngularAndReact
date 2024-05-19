import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
// import { Child2Component } from './child2/child2.component';
// import { OutputComponent } from './output/output.component';
// import { Bind2Component } from './bind2/bind2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AppComponent';

  name = "Alex";
  age = 24;

  top(name: string) {
    this.name = name;
  }


  // Componene Output
  clicks  = 0;
  onChanged(increased:boolean){
      increased?this.clicks++:this.clicks--;
  }



}
