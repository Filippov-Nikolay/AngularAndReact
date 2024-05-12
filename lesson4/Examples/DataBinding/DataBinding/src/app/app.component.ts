import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Binding01InterpolationComponent } from './binding01interpolation/binding01interpolation.component';
import { Binding02PropertyComponent } from './binding02property/binding02property.component';
import { Binding03EventsComponent } from './binding03events/binding03events.component';
import { Binding04ReferenseComponent } from './binding04referense/binding04referense.component';
import { Binding05KeyboardsComponent } from './binding05keyboards/binding05keyboards.component';
import { Binding06AttributeComponent } from './binding06attribute/binding06attribute.component';
import { Binding07ClassComponent } from './binding07class/binding07class.component';
import { Binding08StyleComponent } from './binding08style/binding08style.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  Binding01InterpolationComponent, Binding02PropertyComponent,Binding03EventsComponent,Binding04ReferenseComponent,Binding05KeyboardsComponent,
    Binding06AttributeComponent,Binding07ClassComponent,Binding08StyleComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'First';
}
